const app = require('express')();
const path = require('path');
const express = require('express');
const fallback = require('express-history-api-fallback');

let root = path.join(__dirname,'/../');

app.use(express.static(root));
app.use(fallback('index.html', {root: root}));

app.get('/author', function (req, res) {
  let mockJSON = {
    username: 'Orteedev',
    url: 'https://github.com/ortee',
    description: 'Follow me on github'
  }
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(mockJSON));
});

module.exports = app;
