import express from 'express'
import { AuthController } from '../controllers/AuthController.js'
import { UserService } from '../services/userService.js'
import { User } from '../entity/User.js'
import { AppDataSource } from '../config/data-source.js'
import logger from '../config/logger.js'

const router = express.Router()
const userRepository = AppDataSource.getRepository(User)
const userService = new UserService(userRepository)
const authController = new AuthController(userService, logger)

router.post('/register', (req, res, next) =>
    authController.register(req, res, next),
)
// router.post("/register", (req, res) => {
//     res.status(201).send();
// });

export default router
