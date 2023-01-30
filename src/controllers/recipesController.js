import { Op } from "sequelize";
import { Recipes, Diets } from "../config/db.js";
import { getApiRecipes, getApiRecipeById } from "../helpers/getRecipes.js";
import cloudinary from "cloudinary";
import fs from "fs";
import os from "os";
cloudinary.v2.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_KEY,
	api_secret: process.env.CLOUDINARY_SECRET,
});

import { mapRecipe } from "../helpers/mapRecipe.js";
// get recipes with info needed for home
export const getRecipes = async (req, res) => {
	const { search } = req.query;

	try {
		const apiData = await getApiRecipes();
		const recipesApi = mapRecipe(apiData, "healthScore");

		const recipesInDB = await Recipes.findAll({
			include: {
				model: Diets,
			},
		});

		if (!search) {
			return res.send([...recipesInDB, ...recipesApi]);
		}

		const searchDB = await Recipes.findAll({
			where: { title: { [Op.iRegexp]: `${search}` } },
			include: {
				model: Diets,
				attributes: ["name"],
				through: {
					attributes: [],
				},
			},
		});
		const searchApi = recipesApi.filter((recipe) =>
			recipe.title.toLowerCase().includes(search.toLowerCase()),
		);
		if ([...searchApi, ...searchDB].length === 0) {
			return res.status(403).send({ msg: `The recipe ${search} not found` });
		}
		return res.send([...searchApi, ...searchDB]);
	} catch (error) {
		res.status(500).send({ msg: error.message });
	}
};

// create recipe
export const createRecipe = async (req, res) => {
	const { instructions, summary, healthScore, title } = req.body;

	const dataRecipe = {
		title,
		instructions,
		summary,
		healthScore,
	};
	const titleBody = title.toLowerCase().trim().replace(/\s+/g, " ");
	dataRecipe.title = titleBody;
	const recipeInDB = await Recipes.findOne({
		where: {
			title: titleBody,
		},
	});

	if (recipeInDB?.toJSON().id) {
		const error = new Error("Recipe already exists");
		return res.status(403).send({ msg: error.message });
	}

	try {
		const buffer = req.file?.buffer;
		let image;
		if (buffer) {
			const tempFilePath = `${os.tmpdir()}/${req.file.originalname}`;
			fs.writeFileSync(tempFilePath, buffer);
			const result = await cloudinary.v2.uploader.upload(tempFilePath);
			fs.unlinkSync(tempFilePath);
			image = result.secure_url;
			dataRecipe.image = image;
		} else {
			image = req.body.image;
			dataRecipe.image = image;
		}
		console.log(dataRecipe)
		const recipe = await Recipes.create(dataRecipe);
		const dietsData = await Diets.findAll({
			where: {
				name: req.body.Diets,
			},
		});
		await recipe.addDiets(dietsData);
		const updateRecipe = await Recipes.findByPk(recipe.id, {
			include: [
				{
					model: Diets,
				},
			],
		});
		res.send('hola');
	} catch (error) {
		res.status(500).send({ msg: error.message });
	}
};

// get recibes by id

export const getRecipeById = async (req, res) => {
	//search in api
	const { id } = req.params;
	const regexExp =
		/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

	if (regexExp.test(id)) {
		// search in db
		try {
			const recipe = await Recipes.findOne({
				where: { id },
				include: {
					model: Diets,
					attributes: ["name"],
					through: {
						attributes: [],
					},
				},
			});
			if (!recipe) {
				return res.status(404).send({ msg: "Recipe not found" });
			}
			return res.send(recipe);
		} catch (error) {
			return res.status(500).send({ msg: error.message });
		}
	}
	try {
		const recipeApi = await getApiRecipeById(id);
		if (!recipeApi) {
			return res.status(404).send({ msg: "Recipe not found" });
		}
		const recipeFormat = mapRecipe(
			[recipeApi],
			"healthScore",
			"summary",
			"analyzedInstructions",
		);
		return res.send(recipeFormat[0]);
	} catch (error) {
		return res.status(500).send({ msg: error.message });
	}

	//delete
};

export const deleRecipe = async (req, res) => {
	const id = req.params.id;
	try {
		await Recipes.destroy({ where: { id } });
		res.send({ msg: "Receta eliminada correctamente" });
	} catch (e) {
		res.send({ msg: "Ha ocurrido un error , intente mas tarde" });
	}
};

export const editRecipe = async (req, res) => {
	const { id } = req.params;

	const {  instructions, summary, healthScore, title } = req.body;
	const dataRecipe = {
		instructions,
		summary,
		healthScore,
	};

	const titleBody = title?.toLowerCase().trim().replace(/\s+/g, " ");
	dataRecipe.title = titleBody;

	const   recipeInDB =  await Recipes.findOne({
		where: {
			title: titleBody,
		},
	}) 
	// console.log(recipeInDB.toJSON())
	if (recipeInDB?.toJSON().id && id !== recipeInDB.toJSON().id ) {
		const error = new Error("Recipe already exists intenta con otro titulo");
		return res.status(403).send({ msg: error.message });
	}

	try {
		const buffer = req.file?.buffer;
		let image;
		if (buffer) {
			const tempFilePath = `${os.tmpdir()}/${req.file.originalname}`;
			fs.writeFileSync(tempFilePath, buffer);
			const result = await cloudinary.v2.uploader.upload(tempFilePath);
			fs.unlinkSync(tempFilePath);
			image = result.secure_url;
			dataRecipe.image = image;
		} else {
			image = req.body.image;
			dataRecipe.image = image;
		}

		const recipeInDB = await Recipes.findByPk(id);
		if (!recipeInDB) {
			return res.status(404).send("Receta no encontrada");
		}
		console.log(dataRecipe)
		await recipeInDB.update(dataRecipe);
		const recipe = await Recipes.findByPk(id, {
			include: [
				{
					model: Diets,
				},
			],
		});
		res.send(recipe);
	} catch (err) {
		res.send({ msg: `Eror al actualizar intenta mas tarde ${err.message}` });
	}
};
