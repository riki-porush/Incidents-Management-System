import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'

import config from './config/config'
import incidentRout from './routes/IncidentRout'

const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Your API',
      version: '1.0.0',
      description: 'API documentation using Swagger',
    },
    servers: [
      {
        url: `http://localhost:${config.server.port}`, // Replace with your server URL
      },
    ],
    tags: [
      {
        name: 'users',
      },
    ],
  },
  apis: ['./routes/*.ts', './controllers/*.ts'],
};

const swaggerSpecs = swaggerJSDoc(swaggerOptions);
const app = express()

app.use('/', swaggerUI.serve, swaggerUI.setup(swaggerSpecs));
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