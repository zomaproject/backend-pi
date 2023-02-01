// import clientAxios from "../config/clientAxios.js"
import axios from "axios"
import clientAxios from "../config/clientAxios.js"
import { Diets } from "../config/db.js"

export const createDiets = async () => {
  const { data: { results } } = await clientAxios(`/recipes/complexSearch/?apiKey=${process.env.API_KEY}&addRecipeInformation=true&number=100`)
  const allDiets = results.map((recipe) => recipe.diets)
  const diets = allDiets.flat()
  const uniqueDiets = [...new Set(diets)]
  uniqueDiets.forEach( async elemento => {
     await Diets.findOrCreate({where: {name: elemento}})
  });
}




export default createDiets