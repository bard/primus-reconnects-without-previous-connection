const http = require('http')
const Primus = require('primus')
const fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(fs.readFileSync('index.html'))
  } else {
    res.writeHead(404)
    res.end()
  }
})

const primus = new Primus(server, { transformer: 'sockjs' })

primus.on('connection', (spark) => {
  console.log('Connection')
})

server.listen({ port: 8080 })
