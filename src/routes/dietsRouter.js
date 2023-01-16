import express from 'express'
import { getDiets } from '../controllers/dietsController.js'

const router = express.Router()

router.get('/', getDiets)

export default router