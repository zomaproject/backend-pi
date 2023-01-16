import axios from 'axios'
import clientAxios from '../config/clientAxios.js'

export const getApiRecipes = async () => {
  const { data: { results } } = await clientAxios.get()
  return results
}

export const getApiRecipeById = async (id) => {
  const { data } = await axios(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=ba81b4d07ca94195ba7811151d17dcdf`
  )
  return data
}
