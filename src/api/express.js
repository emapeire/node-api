const express = require('express')
const ditto = require('../data/pokemon/ditto.json')

const PORT = process.env.PORT ?? 8080

const app = express()
app.disable('x-powered-by')

app.use(express.json())

// app.use((req, _res, next) => {
//   console.log(`${req.method} ${req.url}`)
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   let body = ''
//   req.on('data', (chunk) => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = new Date().toISOString()
//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/ditto', (_req, res) => {
  res.json(ditto)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((_req, res) => {
  res.status(404).send('<h1>Not Found 😕</h1>')
})

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`)
})
