import { Diets } from "../config/db.js"

export const  getDiets =  async (req, res) => {
    try {
      const diets = await Diets.findAll()
      res.send(diets)
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }