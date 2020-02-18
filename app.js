const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send(200, 'Hello World!');
});

const port = 8080

app.listen(port, () => console.log(`Server is on port ${port}`));
