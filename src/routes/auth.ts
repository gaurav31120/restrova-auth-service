import express from 'express'
import { AuthController } from './AuthController.js'

const router = express.Router()

const authController = new AuthController()

router.post('/register', (req, res) => authController.register(req, res))
// router.post("/register", (req, res) => {
//     res.status(201).send();
// });

export default router
