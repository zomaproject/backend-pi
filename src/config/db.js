import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
import recipeSchema from '../models/Recipes.js'
import typesSchema from '../models/Diets.js' 
import pg from  'pg'
dotenv.config()
const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'postgres',
  dialectModule: pg,
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});



recipeSchema(connection)
typesSchema(connection)

  

const {Recipes, Diets } = connection.models

Recipes.belongsToMany(Diets, {through: 'recipe_diets'})
Diets.belongsToMany(Recipes, {through: 'recipe_diets'})


export { connection , Recipes , Diets}

