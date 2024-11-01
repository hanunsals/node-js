const http = require('http');

// Server HTTP
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!');
});

// Server berjalan di port 3000
server.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});