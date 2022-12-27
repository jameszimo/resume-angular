const express = require('express');
const path = require('path');

const app = express();

app.get('*',function(req,res,next){
  if(req.headers['x-forwarded-proto']!='https' && process.env.NODE_ENV === 'production') {
    res.redirect('https://james.zimowsky.net');
  } else {
    next();
  }
});

app.use(express.static(__dirname + '/dist'));
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 4200);
