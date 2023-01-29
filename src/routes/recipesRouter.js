import express from "express";

import cloudinary from "cloudinary";
import multer from "multer";
import {
	createRecipe,
	deleRecipe,
	editRecipe,
	getRecipeById,
} from "../controllers/recipesController.js";
import { getRecipes } from "../controllers/recipesController.js";

const router = express.Router();

// router.get('/',recipes)

const storage = multer.memoryStorage();
const upload = multer({ storage });
router.route("/").get(getRecipes).post(upload.single('image'),createRecipe);

router.route("/:id").get(getRecipeById).delete(deleRecipe).put(editRecipe);

export default router;
