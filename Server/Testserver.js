const express = require('express');
const app = express();
const port = 9000;

app.get('/', (req, res) => {
  res.send('Basic server working!');
});

app.listen(port, () => {
  console.log(`Test server running at http://localhost:${port}`);
});
