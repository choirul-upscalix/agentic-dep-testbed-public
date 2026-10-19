const { exec } = require('child_process')
const http = require('http')

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost')
  exec('ls ' + url.searchParams.get('dir'), (err, out) => res.end(out))
}).listen(3000)
