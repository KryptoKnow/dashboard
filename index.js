const express = require('express');
const server = express();

const PORT = 3000;

server.use(express.static('.'));

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
});
