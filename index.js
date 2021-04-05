const http = require('http');
const http2 = require('http2');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// const server = http2.createSecureServer({
//     key: fs.readFileSync('localhost-privkey.pem'),
//     cert: fs.readFileSync('localhost-cert.pem')
//   });