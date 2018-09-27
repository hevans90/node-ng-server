var express = require('express');
var app = express();
var path = require('path');

const allowedExt = [
  '.js',
  '.ico',
  '.css',
  '.png',
  '.jpg',
  '.woff2',
  '.woff',
  '.ttf',
  '.svg'
];

// viewed at http://localhost:8080
app.get('*', function(req, res) {
  if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
      console.log(`request for ${req.url}`)
    res.sendFile(path.resolve(`dist/${req.url}`));
  } else {
    res.sendFile(path.resolve('dist/index.html'));
  }
});

app.listen(8080, () => console.log('Local webserver listening on 8080'));
