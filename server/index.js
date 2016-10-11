const app = require('express')();
const path = require('path');
const express = require('express');
const fallback = require('express-history-api-fallback');

let root = path.join(__dirname,'/../');

app.use(express.static(root));
app.use(fallback('index.html', {root: root}));

app.get('/', function (req, res) {
  console.log('~/server/index.js : SUCCES');
  res.sendfile('index.html', {root: root })
});

module.exports = app;
