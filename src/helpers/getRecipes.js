import axios from 'axios'
import clientAxios from '../config/clientAxios.js'

export const getApiRecipes = async () => {
  const { data: { results } } = await clientAxios.get()
  return results
}

export const getApiRecipeById = async (id) => {
  const { data } = await axios(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=c6c1447a36d84432a200c5441bb51d47`
  )
  return data
}
