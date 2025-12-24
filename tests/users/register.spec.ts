import request from 'supertest'
import app from '../../src/app.js'

describe('POST/auth/register', () => {
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
    })
    describe('Fields are missing', () => {})
})
