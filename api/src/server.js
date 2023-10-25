import express from 'express'
import { Kafka } from 'kafkajs'

import routes from './routes'

const app = express()

/**
 * Make connection with Kafka
 */
const kafka = new Kafka({
  clientId: 'api',
  brokers: ['localhost:9092']
})

const producer = kafka.producer()

/**
 * Available the producer to all routes
 */
app.use((request, response, next) => {
  request.producer = producer
  return next()
})

/**
 * Register the routes of application
 */
app.use(routes)

async function run() {
  await producer.connect()
  
  app.listen(3333)
}

run().catch(console.error)

