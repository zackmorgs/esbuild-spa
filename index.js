const http = require('http');
// const http2 = require('http2');
// todo
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

let spa = fs.readFileSync(path.resolve("./build/index.html"), 'utf8', (err) => {
    if (err) { throw err; }
});

console.log(spa);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //   res.end(req.url);
    res.end(spa);
});

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });