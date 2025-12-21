// console.log(process.env.PORT)

// import config = require("./config");
// import express from 'express'
import app from './app.js'
import { Config } from './config/index.js'

console.log(Config.PORT)

// const app = express()

const startServer = () => {
    const PORT = Config.PORT
    try {
        app.listen(PORT, () => console.log(`Listening on post ${PORT}`))
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

startServer()
