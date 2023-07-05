import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import config from './config/config'
import mongoose from 'mongoose'
import incidentRout from './routes/IncidentRout'


const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/incident', incidentRout)

mongoose
  .connect(config.mongo.url)
  .then(() => {
    console.info('Connected to mongoDB.')
    const port = config.server.port
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`)
    })
  })
  .catch((error) => {
    console.error('Unable to connect.')
    console.error(error)
  })
