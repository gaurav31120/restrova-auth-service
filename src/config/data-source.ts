import 'reflect-metadata'
import { DataSource } from 'typeorm'
import { User } from '../entity/User.js'
import { Config } from './index.js'

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: Config.DB_HOST || 'localhost',
    port: Number(Config.DB_PORT) || 5432,
    username: Config.DB_USERNAME || 'root',
    password: Config.DB_PASSWORD || 'root',
    database: Config.DB_NAME || 'postgres',

    // Don't use this in production. Always keep false
    // synchronize: Config.NODE_ENV === 'test' || Config.NODE_ENV === 'dev',
    synchronize: false,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
