import type { HttpError } from 'http-errors'
import express, {
    type NextFunction,
    type Request,
    type Response,
} from 'express'
import logger from './config/logger.js'
// import createHttpError from 'http-errors';

const app = express()

app.get('/', (req, res) => {
    res.send('Welcome to the restrova project -- auth service')
})

// app.get('/', async (req, res, next) => {
//     const err = createHttpError(401, "You cannot access this route.")
//     // throw err
//     next(err)
//     // res.send('Welcome to the restrova project -- auth service')
// })

// global error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message)
    const statusCode = err.statusCode || 500

    res.status(statusCode).json({
        errors: [
            {
                type: err.name,
                msg: err.message,
                path: '',
                location: '',
            },
        ],
    })
})

export default app
