import express from 'express'
import { AuthController } from '../controllers/AuthController.js'
import { UserService } from '../services/userService.js'
import { User } from '../entity/User.js'
import { AppDataSource } from '../config/data-source.js'

const router = express.Router()
const userRepository = AppDataSource.getRepository(User)
const userService = new UserService(userRepository)
const authController = new AuthController(userService)

router.post('/register', (req, res) => authController.register(req, res))
// router.post("/register", (req, res) => {
//     res.status(201).send();
// });

export default router
