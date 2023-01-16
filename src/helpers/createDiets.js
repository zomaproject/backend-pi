import clientAxios from "../config/clientAxios.js"
import axios from "axios"
import { Diets } from "../config/db.js"


export const createDiets = async () => {
  const { data: { results } } = await axios('https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5')
  const allDiets = results.map((recipe) => recipe.diets)
  const diets = allDiets.flat()
  const uniqueDiets = [...new Set(diets)]
  uniqueDiets.forEach( async elemento => {
     await Diets.create({name: elemento})
  });
}
