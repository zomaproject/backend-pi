import { Diets } from "../config/db.js"

export const  getDiets =  async (req, res) => {
    try {
      const Diets = await Diets.findAll()
      res.send(types)
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }