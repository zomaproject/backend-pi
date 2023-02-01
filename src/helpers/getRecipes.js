import clientAxios from '../config/clientAxios.js'

export const getApiRecipes = async () => {
  const { data: { results } } = await clientAxios.get(`/recipes/complexSearch/?apiKey=${process.env.API_KEY}&addRecipeInformation=true&number=100`)
  return results
}

export const getApiRecipeById = async (id) => {
  const { data } = await clientAxios(
    `/recipes/${id}/information?apiKey=${process.env.API_KEY}`
  )
  return data
}
