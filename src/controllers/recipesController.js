import { Op } from 'sequelize'
import { Recipes, Diets } from '../config/db.js'
import { getApiRecipes, getApiRecipeById } from '../helpers/getRecipes.js'
import { mapRecipe } from '../helpers/mapRecipe.js'

// get recipes with info needed for home
export const getRecipes = async (req, res) => {
  const { search } = req.query

  try {
    const apiData = await getApiRecipes()
    const recipesApi = mapRecipe(apiData)

    const recipesInDB = await Recipes.findAll({
      include: {
        model: Diets
      }
    })

    if (!search) {
      return res.send([...recipesApi, ...recipesInDB])
    }

    const searchDB = await Recipes.findAll({
      where: { title: { [Op.iRegexp]: `${search}` } },
      include: {
        model: Diets,
        attributes: ['name'],
        through: {
          attributes: []
        }
      }
    })
    const searchApi = recipesApi.filter((recipe) => 
      recipe.title.toLowerCase().includes(search.toLowerCase())
    )
    res.send([...searchApi, ...searchDB])
  } catch(error) {
    res.status(500).send({ msg: error.message })
  }

}

// create recipe
export const createRecipe = async (req, res) => {
  const titleBody = req.body.title.trim()
  console.log([`${titleBody}`])
  try {
    //search if recipe already exists
    const recipeInDB = await Recipes.findOne({
      where: {
        title: titleBody
      }
    })
    if (recipeInDB?.toJSON().id) {
      const error = new Error('Recipe already exists')
      return res.status(403).send({ msg: error.message })
    }
    req.body.title = titleBody
    //create recipe
    const recipe = await Recipes.create(req.body)
    // search types
    const dietsData = await Diets.findAll({
      where: {
        name: req.body.diets
      }
    })
    // add types to recipe
    await recipe.addDiets(dietsData)

    res.send(recipe)
  } catch (error) {
    res.status(500).send({ msg: 'Ha ocurrido un erro intenta mas tarde' })
  }
}

// get recibes by id

export const getRecipeById = async (req, res) => {
  //search in api
  const { id } = req.params
  try {
    const recipeApi = await getApiRecipeById(id)
    if (!recipeApi) {
      return res.status(404).send({ msg: 'Recipe not found' })
    }
    const recipeFormat = mapRecipe([recipeApi],"healthScore","summary", "instructions")
    res.send(recipeFormat[0])
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}
