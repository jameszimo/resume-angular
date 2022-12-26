const express = require('express'), env = process.env.NODE_ENV || 'development';
const path = require('path');

var forceSSL = function (req, res, next) {
  if(req.headers['x-forward-proto'] !== 'https') {
    return res.redirect(['https://', req.get('host'), req.url].join(''));
  }
  return next();
}

const app = express();

if(env === 'production') {
  app.use(forceSSL);
}

app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 4200);
