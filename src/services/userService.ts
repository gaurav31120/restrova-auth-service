import type { Repository } from 'typeorm'
import { AppDataSource } from '../config/data-source.js'
import { User } from '../entity/User.js'
import type { UserData } from '../types/index.js'
import createHttpError from 'http-errors'
import { Roles } from '../constants/index.js'
import bcrypt from 'bcrypt'

export class UserService {
    constructor(private userRepository: Repository<User>) {}
    async create({
        firstName,
        lastName,
        email,
        password,
    }: UserData): Promise<User> {
        const userRepository = AppDataSource.getRepository(User)

        const user = await this.userRepository.findOne({
            where: { email: email },
        })

        if (user) {
            const err = createHttpError(400, 'Email is already exists')
            throw err
        }

        // Hash the password
        const saltRounds = 10

        const hashedPassword = await bcrypt.hash(password, saltRounds)

        try {
            return await userRepository.save({
                firstName,
                lastName,
                email,
                password: hashedPassword,
                role: Roles.CUSTOMER,
            })
        } catch {
            const error = createHttpError(
                500,
                'Failed to store the data in database',
            )
            throw error
        }
    }
}
