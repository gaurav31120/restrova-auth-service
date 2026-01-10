import request from 'supertest'
import app from '../../src/app.js'
import type { DataSource } from 'typeorm'
import { AppDataSource } from '../../src/config/data-source.js'
// import { truncateTables } from '../utils/index.js'
import { User } from '../../src/entity/User.js'
import { Roles } from '../../src/constants/index.js'

describe('POST/auth/register', () => {
    let connection: DataSource

    beforeAll(async () => {
        connection = await AppDataSource.initialize()
    })

    beforeEach(async () => {
        // database truncate
        await connection.dropDatabase()
        await connection.synchronize()
        // await truncateTables(connection)
    })

    afterAll(async () => {
        if (connection && connection.isInitialized) {
            await connection.destroy()
        }
    })

    describe('Given all fields', () => {
        it('should return the 201 status code', async () => {
            // AAA
            // Arrange
            const userData = {
                firstName: 'Gaurav',
                lastName: 'Kumar',
                email: 'gaurav@gmail.com',
                password: 'secret',
            }
            // Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData)
            // console.log('Status Code:', response.statusCode);
            // console.log('Response Body:', response.body);
            // Assert

            expect(response.statusCode).toBe(201) // This will fail and show Expected vs Received
        })

        it('should return valid json response', async () => {
            // AAA
            // Arrange
            const userData = {
                firstName: 'Gaurav',
                lastName: 'Kumar',
                email: 'gaurav@gmail.com',
                password: 'secret',
            }
            // Act
            const response = await request(app)
                .post('/auth/register')
                .send(userData)

            // Assert application/json utf-8

            expect(response.headers['content-type']).toEqual(
                expect.stringContaining('json'),
            )
        })

        it('should persist the user in the database', async () => {
            // Arrange
            const userData = {
                firstName: 'Gaurav',
                lastName: 'Kumar',
                email: 'gaurav@gmail.com',
                password: 'secret',
            }
            // Act
            await request(app).post('/auth/register').send(userData)
            // console.log('Status Code:', response.statusCode);
            // console.log('Response Body:', response.body);

            // Assert
            const userRepository = connection.getRepository(User)

            const users = await userRepository.find()

            expect(users).toHaveLength(1)
            expect(users[0]?.firstName).toBe(userData.firstName)
            expect(users[0]?.lastName).toBe(userData.lastName)
            expect(users[0]?.email).toBe(userData.email)

            // expect(response.statusCode).toBe(201) // This will fail and show Expected vs Received
        })

        it('should assign a customer role', async () => {
            // Arrange
            const userData = {
                firstName: 'Gaurav',
                lastName: 'Kumar',
                email: 'gaurav@gmail.com',
                password: 'secret',
            }
            // Act
            await request(app).post('/auth/register').send(userData)

            // Assert
            const userRepository = connection.getRepository(User)

            const users = await userRepository.find()

            expect(users[0]).toHaveProperty('role')
            expect(users[0]?.role).toBe(Roles.CUSTOMER)

            // expect(response.statusCode).toBe(201) // This will fail and show Expected vs Received
        })
    })
    describe('Fields are missing', () => {})
})
