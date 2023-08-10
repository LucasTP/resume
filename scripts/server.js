const http = require('http');
const handler = require('serve-handler');

class Server {
  constructor({ port }) {
    this.port = port;
    this.server = http.createServer((request, response) => {
      handler(request, response);
    });
  }

  start() {
    return new Promise((resolve) => {
      this.server.listen(this.port, () => {
        console.log(`Server listening on port ${this.port}`);
        resolve();
      });
    });
  }

  stop() {
    return new Promise((resolve) => {
      this.server.close(() => {
        console.log(`Server stopped`);
        resolve();
      });
    });
  }
}

module.exports = Server;
