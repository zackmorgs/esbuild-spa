const http = require('http');
// const http2 = require('http2');
// todo
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

let build_files = {};

let build_path = path.resolve('./build');

fs.readFileSync(build_path, (err, files)=> {
    if (err) { 
        console.error(err);
        throw err; 
    } else {
        for (let i=0; i < files.length; i++) {
            build_files[files[i]] = fs.readFileSync(path.resolve(`./build/${files[i]}`), 'utf8', (err) => {
                if (err) { throw err; }
            });
        }
    }
})

let spa = {

}
let script = fs.readFileSync(path.resolve("./build/js/script.js"), 'utf8', (err) => {
    if (err) { throw err; }
});

// todo:
// create a hashtable like object that gets the files from the directory.
// create hashtable via adding as children to array (foreach file in dir)

// console.log(spa);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    //   res.end(req.url);
    let requestUrl = req.url;

    // if (requestUrl.indexOf('.js') || requestUrl.i) {
    //     res.end()
    // }

    // todo: currently returns the spa html, but non of your .css/.js is being loaded because request keeps giving back html instead. 

    res.end(build_files[req.url]);

});

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });