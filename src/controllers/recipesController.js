import { Recipes, Types } from '../config/db.js'
import { getApiRecipes, getApiRecipeById } from '../helpers/getRecipes.js'
import { mapRecipe } from '../helpers/mapRecipe.js'

// get recipes with info needed for home
export const getRecipes = async (req, res) => {
  const { search } = req.query

  try {
    const apiData = await getApiRecipes()
    const recipesInDB = await Recipes.findAll({
      include: {
        model: Types
      }
    })
    if (search) {
      const recipes = mapRecipe(apiData)
      const searchReicipes = recipes?.filter((recipe) =>
        recipe.title.toLowerCase().includes(search.toLowerCase())
      )
      if(!searchReicipes.length) {
      return  res.status(403).send({ msg: `Recipe  ${search} not found` })
      }
      return  res.send(searchReicipes) 
    }

    const recipes = apiData.map((recipe) => {
      const { id, title, image, healthScore, diets } = recipe
      return {
        id,
        title,
        image,
        healthScore,
        Types: diets.map(diet => ({name: diet})) 
      }
    })
    res.send([...recipes, ...recipesInDB])
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

// create recipe
export const createRecipe = async (req, res) => {
  const titleBody = req.body.title.trim()
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

    //create recipe
    const recipe = await Recipes.create(req.body)
    // search types
    const typesData = await Types.findAll({
      where: {
        name: req.body.types
      }
    })
    // add types to recipe
    await recipe.addTypes(typesData)

    res.send(recipe)
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}

// get recibes by id

export const getRecipeById = async (req, res) => {
  //search in api
  const { id } = req.params
  try {
    const recipe = await getApiRecipeById(id)
    if (!recipe) {
      return res.status(404).send({ msg: 'Recipe not found' })
    }

    const { title, image, healthScore, diets, instructions } = recipe
    res.send({
      id,
      title,
      image,
      healthScore,
      diets,
      instructions
    })
  } catch (error) {
    res.status(500).send({ msg: error.message })
  }
}
