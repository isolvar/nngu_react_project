const http = require('http');
const fs = require('fs').promises;

const host = 'localhost';
const port = 5555;

// const requestListener = function (req, res) {
//   fs.readFile(__dirname + '/test-server-data.json')
//     .then((contents) => {
//       res.setHeader('Content-Type', 'application/json');
//       res.writeHead(200);
//       res.end(contents);
//     })
//     .catch((err) => {
//       res.writeHead(500);
//       res.end(err);
//       return;
//     });

//   // res.setHeader('Content-Type', 'application/json');
//   // res.writeHead(200);
//   // res.end('My first server!');
// };

let goods = null;

fs.readFile(__dirname + '/test-server-data.json')
  .then((content) => {
    goods = content;
  })
  .catch((err) => {
    goods = 'Error during data loading from file! ' + err;
    return;
  });

const requestListener = function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  switch (req.url) {
    case '/goods':
      res.writeHead(200);
      res.end(goods);
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
