const http = require('node:http')
const dittoJson = require('../data/pokemon/ditto.json')

const processRequest = (req, res) => {
  const { url, method } = req

  switch (method) {
    case 'GET':
      switch (url) {
        case '/pokemon/ditto':
          res.setHeader('Content-Type', 'application/json; charset=utf-8')
          return res.end(JSON.stringify(dittoJson))
        default:
          res.statusCode = 404
          res.setHeader('Content-Type', 'text/html; charset=utf-8')
          return res.end('<h1>Not Found 😕</h1>')
      }
  }
}

const server = http.createServer(processRequest)

server.listen(8080, () => {
  console.log('Server listening on port http://localhost:8080')
})
