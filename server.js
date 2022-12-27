const express = require('express');
const path = require('path');
const env = process.env.NODE_ENV || 'undefined';

console.log('env: ' + env)

const app = express();

app.get('*', function (req, res, next) {

  if (env !== 'production') {
    next();

  } else if ((req.headers['x-forwarded-proto'] || '') === 'https') {
    next();

  } else if (req.method === 'GET' || req.method === 'HEAD') {
    const host = req.headers['x-forwarded-host'] || req.headers.host;
    res.redirect(301, `https://${host}${req.originalUrl}`);

  } else {
    res.status(403).send('This server requires an HTTPS connection.');
  }
});

app.use(express.static(__dirname + '/dist'));
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 4200);
