
import cors from 'cors'
import  dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import recipes from './src/routes/recipesRouter.js'
import morgan from 'morgan'
import { connection } from './src/config/db.js'
import diets from './src/routes/dietsRouter.js'
import { createDiets } from './src/helpers/createDiets.js'
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
app.use('/api/diets', diets)



const PORT = process.env.PORT || 4000


connection.sync({ alter: true }).then(() => {
  console.log('Database synced')
  app.listen(PORT, () => {
    // createDiets().then(() => console.log('Types created'))
    console.log(`Server running on port ${PORT}`)
  })
})


