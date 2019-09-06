const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello World');
  res.end()
})

app.get('/rest', (req, res) => {
  res.status(200);
  res.json({
    restlt: 1,
    msg: 'Do'
  })
  res.end()
})

app.listen(5000)
