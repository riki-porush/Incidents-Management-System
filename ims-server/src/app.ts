import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import swaggerUI from 'swagger-ui-express'
import fs from 'fs'
import config from './config/config' 
import incidentRout from './routes/IncidentRout'
import logger from './loggers/log'

const swaggerFile: any = (process.cwd() + '/src/Swagger.json')
const swaggerData: any = fs.readFileSync(swaggerFile, 'utf8')
const swaggerDocument = JSON.parse(swaggerData)
swaggerDocument.servers[0].url = `http://localhost:${config.server.port}`

const app = express()

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocument))
app.use(cors())
app.use(bodyParser.json())
app.use('/incident', incidentRout)

mongoose
  .connect(config.mongo.url)
  .then(() => {
    logger.info('Connected to mongoDB.')
    const port = config.server.port
    app.listen(port, () => {
      logger.info(`Server is listening on port ${port}`);
    })
  })
  .catch((error) => {
    logger.error('Unable to connect to MongoDB.', error);
  })
