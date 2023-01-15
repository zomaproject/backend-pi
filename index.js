
import cors from 'cors'
import  dotenv from 'dotenv'
dotenv.config()
import express, { json } from 'express'
import recipes from './src/routes/recipesRouter.js'
import morgan from 'morgan'
import { connection } from './src/config/db.js'
import types from './src/routes/typesRouter.js'
import { createTypes } from './src/helpers/createTypes.js'
const app = express()

const whiteList = [process.env.FRONTEND_URL]
const corsOptions = {
  origin: function(origin, callback){
    if(whiteList.includes(origin)){
      callback(null, true)
    }else {
      callback( new Error('Error de Cors'))
    }
  }
}

// app.use(cors(corsOptions))

app.use(cors({
    origin: '*'
}));
app.use(express.json())
app.use(morgan('tiny'))
app.use('/api/recipes', recipes)
app.use('/api/types', types)



const PORT = process.env.PORT || 4000


connection.sync({ alter: true }).then(() => {
  // createTypes()
  console.log('Database synced')
  app.listen(PORT, () => {
    createTypes().then(() => console.log('Types created'))
    console.log(`Server running on port ${PORT}`)
  })
})


