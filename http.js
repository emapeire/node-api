const http = require('node:http')
const { findAvailablePort } = require('./free-port.js')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    console.log('Request received')
    res.statusCode = 200
    res.end('<h1>Welcome to the homepage! 🎉</h1>')
  } else if (req.url === '/about') {
    console.log('Request received')
    res.statusCode = 200
    res.end('<h1>About page 💻</h1>')
  } else {
    console.log('Request received')
    res.statusCode = 404
    res.end('<h1>Page not found 😕</h1>')
  }
}

const server = http.createServer(processRequest)

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})
