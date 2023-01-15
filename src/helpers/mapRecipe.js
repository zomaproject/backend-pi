export const mapRecipe = (recipeApi,...args) => {
  const recipes = recipeApi.map((recipe) => {
    const { id, title, image, diets } = recipe
    const r = {
      id,
      title,
      image,
      Types: diets.map((diet) => ({ name: diet })),
    }
    for(let i = 0; i < args.length; i++){
      r[args[i]] = recipe[i]
    }
    return r
  })
  return recipes
}
