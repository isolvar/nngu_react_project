const http = require('http');
const fsp = require('fs').promises;
const fs = require('fs');

const host = 'localhost';
const port = 5555;

let goods = null;

fsp
  .readFile(__dirname + '/server-data/test-server-data.json')
  .then((content) => {
    goods = content;
  })
  .catch((err) => {
    goods = 'Error during data loading from file! ' + err;
    return;
  });

const requestListener = function (req, res) {
  switch (req.url) {
    case '/goods':
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.writeHead(200);
      res.end(goods);
      break;
    case '/user-icon':
      res.setHeader('Content-Type', 'image/png');
      res.writeHead(200);
      fs.readFile('./server-data/login_icon.png', (err, image) => {
        res.end(image);
      });
      break;

    default:
      res.writeHead(404);
      res.end(JSON.stringify({ error: 'Resource not found' }));
  }
};

const server = http.createServer(requestListener);

server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
