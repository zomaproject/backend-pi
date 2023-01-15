import express from 'express'
import { createRecipe, getRecipeById } from '../controllers/recipesController.js'
import {getRecipes} from '../controllers/recipesController.js'


const router = express.Router()

// router.get('/',recipes) 


router.route('/')
  .get(getRecipes)
  .post(createRecipe)

router.get('/:id', getRecipeById)
export default router