import axios from 'axios'
import clientAxios from '../config/clientAxios.js'

export const getApiRecipes = async () => {
  try {
  const { data: { results } } = await axios('https://run.mocky.io/v3/84b3f19c-7642-4552-b69c-c53742badee5')
    return results
  
  } catch {
    const error = new Error('Error in API')
    return error
  }
}


export const getApiRecipeById = async (id) => {
  const { data }  = axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=ba81b4d07ca94195ba7811151d17dcdf`)
  return data
}
