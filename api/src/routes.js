import express from 'express'

const routes = new express.Router()

routes.post('/certifications', async(request, response) => {
  // TODO: call service
  const message = { 
    user: { id: 1, name: 'Lucas Alves' },
    course: 'Kafka with Node.js',
    grade: 5,
  }

  await request.producer.send({
    topic: 'issue-certificate',
    messages: [
      { value: JSON.stringify(message) }
    ]
  })

  return response.json({ ok: true })
})

export default routes

