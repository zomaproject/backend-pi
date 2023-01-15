import { Types } from "../config/db.js"

export const  getTypes =  async (req, res) => {
    try {
      const types = await Types.findAll()
      res.send(types)
    } catch (error) {
      res.status(500).send({ msg: error.message })
    }
  }