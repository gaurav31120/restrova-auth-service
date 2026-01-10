import type { Repository } from 'typeorm'
import { AppDataSource } from '../config/data-source.js'
import { User } from '../entity/User.js'
import type { UserData } from '../types/index.js'
import createHttpError from 'http-errors'
import { Roles } from '../constants/index.js'

export class UserService {
    constructor(private userRepository: Repository<User>) {}
    async create({
        firstName,
        lastName,
        email,
        password,
    }: UserData): Promise<User> {
        const userRepository = AppDataSource.getRepository(User)

        try {
            return await userRepository.save({
                firstName,
                lastName,
                email,
                password,
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
