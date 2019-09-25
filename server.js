const express = require('express');
const app = express();
const path = require('path');

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

app.get('*', function(req, res) {
  if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
    console.log(`request for ${req.url}`);
    res.sendFile(path.resolve(`dist/${req.url}`));
  } else {
    res.sendFile(path.resolve('dist/index.html'));
  }
});

app.listen(4200, () => console.log('Local webserver listening on 4200'));
