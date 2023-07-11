import express from 'express'
import aggregateIncident from '../aggregations/incidentAggregation'

const aggrigationRouter = express.Router()
aggrigationRouter.get('/', aggregateIncident)

export default aggrigationRouter

