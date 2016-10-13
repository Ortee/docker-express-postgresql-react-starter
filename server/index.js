const app = require('express')();
const path = require('path');
const express = require('express');
const fallback = require('express-history-api-fallback');

let root = path.join(__dirname,'/../');

app.use(express.static(root));
app.use(fallback('index.html', {root: root}));

//Mocks
const authorMock = require('./mocks/author.json')

app.get('/api/author', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(authorMock));
});

module.exports = app;
