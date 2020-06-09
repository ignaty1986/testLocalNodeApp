const app = require('./app/index');
const http = require('http');

const server = http.createServer(app);
const port = 3000;

server.listen(port, error => {
  if (error) throw new Error(error);

  console.log(`Server is running on port ${port}`);

});