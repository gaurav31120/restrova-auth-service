// console.log(process.env.PORT)

// import config = require("./config");
// import express from 'express'
import app from './app.js'
import { Config } from './config/index.js'
import logger from './config/logger.js'

console.log(Config.PORT)

// const app = express()

const startServer = () => {
    const PORT = Config.PORT
    try {
        app.listen(PORT, () => {
            // logger.warn("testing warning...")
            // logger.error("testing error log...")
            // logger.debug("debug test")
            logger.info('Server listening on port', { port: PORT })
        })
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

startServer()
