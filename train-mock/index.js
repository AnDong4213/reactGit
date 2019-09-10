/* const express = require('express');

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

app.listen(5000); */

const express = require('express');
const path = require('path');
const apiMocker = require('mocker-api');

const app = express();

apiMocker(app, path.resolve('./mocker/mocker.js'))
app.listen(5000);
