import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import config from './config/config'
import mongoose from 'mongoose'
import userRout from './routes/userRout'

/**
 * this is just a basic request/response
 *
 */
const app = express()
// Middleware
app.use(cors())
app.use(bodyParser.json())
app.use('/users', userRout)
mongoose
  .connect(config.mongo.url)
  .then(() => {
    console.info('Connected to mongoDB.')
    // Start the server
    // note: if you run port=5000
    const port = config.server.port
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  })
  .catch((error) => {
    console.error('Unable to connect.')
    console.error(error)
  })
