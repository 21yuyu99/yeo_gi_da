const http = require('http'); 
http.createServer((req, res) => { 
     res.writeHead(200, {'Content-Type': 'text/plain'}); 
     res.end('MinJae come\n'); 
}).listen(8000); 
console.log('Server running at http://localhost:8000/');

