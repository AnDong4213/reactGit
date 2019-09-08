const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200);
  res.send('Hello World_19/09');
  res.end()
})

app.get('/rest', (req, res) => {
  res.status(200);
  res.json({
    restlt: 111,
    msg: 'Dooo'
  })
  res.end()
})

app.listen(5000);
