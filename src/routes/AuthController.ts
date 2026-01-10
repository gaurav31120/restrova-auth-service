import { type Response } from 'express'
// import { AppDataSource } from '../config/data-source.js';
// import { User } from '../entity/User.js';
import type { RegisterUserRequest } from '../types/index.js'
import type { UserService } from '../services/userService.js'

export class AuthController {
    // userService: UserService;

    constructor(private userService: UserService) {
        // this.userService = userService;
    }

    async register(req: RegisterUserRequest, res: Response) {
        const { firstName, lastName, email, password } = req.body

        await this.userService.create({ firstName, lastName, email, password })
        // res.status(201).send()
        res.status(201).json()
    }
}
