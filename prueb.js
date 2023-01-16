
export const mapRecipe = (recipeApi,...args) => {
  const recipes = recipeApi.map((r) => {
    const { id, title, image, diets } = r
    const recipe = {
      id,
      title,
      image,
      Types: diets.map((diet) => ({ name: diet })),
    }

    for(let i = 0; i < args.length; i++){
      recipe[args[i]] = r[args[i]]
    }
    return recipe
  })
  
  return recipes
}




const prueba2 ={
  "vegetarian": false,
  "vegan": false,
  "glutenFree": false,
  "dairyFree": true,
  "veryHealthy": false,
  "cheap": false,
  "veryPopular": false,
  "sustainable": false,
  "lowFodmap": false,
  "weightWatcherSmartPoints": 1,
  "gaps": "no",
  "preparationMinutes": -1,
  "cookingMinutes": -1,
  "aggregateLikes": 0,
  "healthScore": 4,
  "creditsText": "bla5@bla.com",
  "sourceName": "The Kitchn",
  "pricePerServing": 82.06,
  "extendedIngredients": [
    {
      "id": 15001,
      "aisle": "Seafood",
      "image": "anchovies.jpg",
      "consistency": "SOLID",
      "name": "marinated anchovies",
      "nameClean": "boquerones",
      "original": "6 oz marinated anchovies",
      "originalName": "marinated anchovies",
      "amount": 6.0,
      "unit": "oz",
      "meta": [
        
      ],
      "measures": {
        "us": {
          "amount": 6.0,
          "unitShort": "oz",
          "unitLong": "ounces"
        },
        "metric": {
          "amount": 170.097,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 18064,
      "aisle": "Bakery/Bread",
      "image": "white-bread.jpg",
      "consistency": "SOLID",
      "name": "day-old bread",
      "nameClean": "bread",
      "original": "2 oz day-old bread",
      "originalName": "day-old bread",
      "amount": 2.0,
      "unit": "oz",
      "meta": [
        
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "oz",
          "unitLong": "ounces"
        },
        "metric": {
          "amount": 56.699,
          "unitShort": "g",
          "unitLong": "grams"
        }
      }
    },
    {
      "id": 10211215,
      "aisle": "Produce",
      "image": "garlic.jpg",
      "consistency": "SOLID",
      "name": "garlic clove",
      "nameClean": "whole garlic cloves",
      "original": "1/2 garlic clove",
      "originalName": "garlic clove",
      "amount": 0.5,
      "unit": "",
      "meta": [
        
      ],
      "measures": {
        "us": {
          "amount": 0.5,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 0.5,
          "unitShort": "",
          "unitLong": ""
        }
      }
    },
    {
      "id": 4053,
      "aisle": "Oil, Vinegar, Salad Dressing",
      "image": "olive-oil.jpg",
      "consistency": "LIQUID",
      "name": "olive oil plus",
      "nameClean": "olive oil",
      "original": "2 tsps olive oil plus 1/4 for drizzling",
      "originalName": "olive oil plus 1/4 for drizzling",
      "amount": 2.0,
      "unit": "tsps",
      "meta": [
        "for drizzling"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "tsps",
          "unitLong": "teaspoons"
        }
      }
    },
    {
      "id": 11291,
      "aisle": "Produce",
      "image": "spring-onions.jpg",
      "consistency": "SOLID",
      "name": "scallions",
      "nameClean": "spring onions",
      "original": "2 whole scallions, julienned",
      "originalName": "whole scallions, julienned",
      "amount": 2.0,
      "unit": "",
      "meta": [
        "whole",
        "julienned"
      ],
      "measures": {
        "us": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        },
        "metric": {
          "amount": 2.0,
          "unitShort": "",
          "unitLong": ""
        }
      }
    }
  ],
  "id": 2,
  "title": "Anchovies Appetizer With Breadcrumbs & Scallions",
  "author": "bla5@bla.com",
  "readyInMinutes": 15,
  "servings": 8,
  "sourceUrl": "http://www.thekitchn.com/other-two-veg-recipes-notes-85779",
  "image": "https://spoonacular.com/recipeImages/2-556x370.jpg",
  "imageType": "jpg",
  "summary": "Anchovies Appetizer With Breadcrumbs & Scallions is a <b>dairy free and pescatarian</b> hor d'oeuvre. This recipe makes 8 servings with <b>57 calories</b>, <b>5g of protein</b>, and <b>2g of fat</b> each. For <b>82 cents per serving</b>, this recipe <b>covers 4%</b> of your daily requirements of vitamins and minerals. Head to the store and pick up scallions, day-old bread, garlic clove, and a few other things to make it today. From preparation to the plate, this recipe takes about <b>15 minutes</b>. It is brought to you by spoonacular user <a href=\"/profile/bla5@bla.com\">bla5@bla.com</a>. Try <a href=\"https://spoonacular.com/recipes/spaghetti-with-anchovies-and-breadcrumbs-68\">Spaghetti with Anchovies and Breadcrumbs</a>, <a href=\"https://spoonacular.com/recipes/spaghetti-with-anchovies-and-breadcrumbs-1228193\">Spaghetti with Anchovies and Breadcrumbs</a>, and <a href=\"https://spoonacular.com/recipes/broccoli-rabe-with-anchovies-and-breadcrumbs-84627\">Broccoli Rabe with Anchovies and Breadcrumbs</a> for similar recipes.",
  "cuisines": [
    
  ],
  "dishTypes": [
    "antipasti",
    "starter",
    "snack",
    "appetizer",
    "antipasto",
    "hor d'oeuvre"
  ],
  "diets": [
    "dairy free",
    "pescatarian"
  ],
  "occasions": [
    
  ],
  "winePairing": {
    "pairedWines": [
      "sauvignon blanc",
      "riesling",
      "sparkling rose"
    ],
    "pairingText": "Anchovies on the menu? Try pairing with Sauvignon Blanc, Riesling, and Sparkling rosé. In general, crisp white wines and sparkling wine pair well with strongly flavored, oily fish. The Grgich Hills Estate Sauvignon Blanc ( half-bottle) with a 4.5 out of 5 star rating seems like a good match. It costs about 19 dollars per bottle.",
    "productMatches": [
      {
        "id": 494852,
        "title": "Grgich Hills Estate Sauvignon Blanc ( half-bottle)",
        "description": "Sauvignon Blanc, primarily Musqué clone, grown in Grgich Hills Estate's coolest vineyards provides elegant, floral aromatics. Made with 100% Sauvignon Blanc.",
        "price": "$18.99",
        "imageUrl": "https://spoonacular.com/productImages/494852-312x231.jpg",
        "averageRating": 0.9,
        "ratingCount": 6.0,
        "score": 0.8473684210526315,
        "link": "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fgrgich-hills-estate-sauvignon-blanc-375ml-half-bottle-2018%2F535170"
      }
    ]
  },
  "instructions": "<ol><li>Preheat oven to 400 F.</li><li>Remove crusts from bread and cut into bite-sized croutons.</li><li>Rub garlic in bottom of a small oven-safe skillet, add 2 teaspoons olive oil.</li><li> Rub croutons in oil until they absorb it all. </li><li>Bake for 7-10 minutes or until deep golden brown. </li><li>Remove and set aside.</li><li>Slice anchovies in thirds. </li><li>Toss with scallions. </li><li>Divide into small cups, ramekins or bowls between 4 and 8 ounces and nestle in the croutons.</li></ol>",
  "analyzedInstructions": [
    {
      "name": "",
      "steps": [
        {
          "number": 1,
          "step": "Preheat oven to 400 F.",
          "ingredients": [
            
          ],
          "equipment": [
            {
              "id": 404784,
              "name": "oven",
              "localizedName": "oven",
              "image": "oven.jpg",
              "temperature": {
                "number": 400.0,
                "unit": "Fahrenheit"
              }
            }
          ]
        },
        {
          "number": 2,
          "step": "Remove crusts from bread and cut into bite-sized croutons.Rub garlic in bottom of a small oven-safe skillet, add 2 teaspoons olive oil. Rub croutons in oil until they absorb it all.",
          "ingredients": [
            {
              "id": 4053,
              "name": "olive oil",
              "localizedName": "olive oil",
              "image": "olive-oil.jpg"
            },
            {
              "id": 18242,
              "name": "croutons",
              "localizedName": "croutons",
              "image": "croutons.png"
            },
            {
              "id": 11215,
              "name": "garlic",
              "localizedName": "garlic",
              "image": "garlic.png"
            },
            {
              "id": 18064,
              "name": "bread",
              "localizedName": "bread",
              "image": "white-bread.jpg"
            },
            {
              "id": 4582,
              "name": "cooking oil",
              "localizedName": "cooking oil",
              "image": "vegetable-oil.jpg"
            },
            {
              "id": 1012034,
              "name": "dry seasoning rub",
              "localizedName": "dry seasoning rub",
              "image": "seasoning.png"
            }
          ],
          "equipment": [
            {
              "id": 404645,
              "name": "frying pan",
              "localizedName": "frying pan",
              "image": "pan.png"
            },
            {
              "id": 404784,
              "name": "oven",
              "localizedName": "oven",
              "image": "oven.jpg"
            }
          ]
        },
        {
          "number": 3,
          "step": "Bake for 7-10 minutes or until deep golden brown.",
          "ingredients": [
            
          ],
          "equipment": [
            {
              "id": 404784,
              "name": "oven",
              "localizedName": "oven",
              "image": "oven.jpg"
            }
          ],
          "length": {
            "number": 10,
            "unit": "minutes"
          }
        },
        {
          "number": 4,
          "step": "Remove and set aside.Slice anchovies in thirds. Toss with scallions. Divide into small cups, ramekins or bowls between 4 and 8 ounces and nestle in the croutons.",
          "ingredients": [
            {
              "id": 15001,
              "name": "anchovies",
              "localizedName": "anchovies",
              "image": "anchovies.jpg"
            },
            {
              "id": 11291,
              "name": "green onions",
              "localizedName": "green onions",
              "image": "spring-onions.jpg"
            },
            {
              "id": 18242,
              "name": "croutons",
              "localizedName": "croutons",
              "image": "croutons.png"
            }
          ],
          "equipment": [
            {
              "id": 404781,
              "name": "ramekin",
              "localizedName": "ramekin",
              "image": "ramekin.jpg"
            },
            {
              "id": 404783,
              "name": "bowl",
              "localizedName": "bowl",
              "image": "bowl.jpg"
            }
          ]
        }
      ]
    }
  ],
  "originalId": null
}

// console.log(mapRecipe([prueba2], "summary", "gaps"))
console.log(mapRecipe([prueba2]))