import type { Repository } from 'typeorm'
import { AppDataSource } from '../config/data-source.js'
import { User } from '../entity/User.js'
import type { UserData } from '../types/index.js'

export class UserService {
    constructor(private userRepository: Repository<User>) {}
    async create({ firstName, lastName, email, password }: UserData) {
        const userRepository = AppDataSource.getRepository(User)
        await userRepository.save({ firstName, lastName, email, password })
    }
}
