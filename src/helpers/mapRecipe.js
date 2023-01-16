export const mapRecipe = (recipeApi, ...args) => {
  const recipes = recipeApi.map((r) => {
    const { id, title, image, diets,winePairing } = r
    const recipe = {
      id,
      title,
      image,
      score: winePairing?.productMatches[0].score,
      Types: diets.map((diet) => ({ name: diet }))
    }

    for (let i = 0; i < args.length; i++) {
      recipe[args[i]] = r[args[i]]
    }
    return recipe
  })

  return recipes
}
