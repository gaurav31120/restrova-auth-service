import express, {
    type Request,
    type Response,
    type NextFunction,
} from 'express'
// import { body } from 'express-validator'
import { AuthController } from '../controllers/AuthController.js'
import { UserService } from '../services/userService.js'
import { User } from '../entity/User.js'
import { AppDataSource } from '../config/data-source.js'
import logger from '../config/logger.js'
import registerValidator from '../validators/register-validator.js'

const router = express.Router()
const userRepository = AppDataSource.getRepository(User)
const userService = new UserService(userRepository)
const authController = new AuthController(userService, logger)

router.post(
    '/register',
    registerValidator,
    (req: Request, res: Response, next: NextFunction) =>
        authController.register(req, res, next),
)
// router.post("/register", (req, res) => {
//     res.status(201).send();
// });

export default router
