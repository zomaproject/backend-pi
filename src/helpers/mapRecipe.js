export const mapRecipe = (recipeApi, ...args) => {
  const recipes = recipeApi.map((r) => {
    const { id, title,image,diets } = r
    const recipe = {
      id,
      title,
      image,
      Diets: diets.map((diet) => ({ name: diet }))
    }
    for (let i = 0; i < args.length; i++) {
      if (r.hasOwnProperty(args[i])) {
        if (args[i] === 'analyzedInstructions') {
          recipe[args[i]] = r.analyzedInstructions[0]?.steps.map(
            (step) => step.step
          )
          continue
        }

        if (args[i] === 'summary') {
          recipe[args[i]] = r.summary.replace(/<[^>]*>?/gm, '')
          continue
        }
      }
      recipe[args[i]] = r[args[i]]
    }
    return recipe
  })

  return recipes
}
