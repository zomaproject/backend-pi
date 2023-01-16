import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
import recipeSchema from '../models/Recipes.js'
import typesSchema from '../models/Diets.js'
dotenv.config()

const connection = new Sequelize(
  `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/food`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false // lets Sequelize know we can use pg-native for ~30% more speed
  }
)
recipeSchema(connection)
typesSchema(connection)


const {Recipes, Diets } = connection.models

Recipes.belongsToMany(Diets, {through: 'recipe_diets'})
Diets.belongsToMany(Recipes, {through: 'recipe_diets'})


export { connection , Recipes , Diets}

