const http = require('node:http')
const { findAvailablePort } = require('./free-port.js')

const desiredPort = process.env.PORT ?? 3000

const processRequest = (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Welcome to the homepage!')
  }
}

const server = http.createServer(processRequest)

findAvailablePort(desiredPort).then((port) => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})
