import express from 'express'
import { getTypes } from '../controllers/typesController.js'

const router = express.Router()

router.get('/', getTypes)

export default router