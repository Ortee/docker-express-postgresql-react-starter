const app = require('express')();
const path = require('path');
const express = require('express');
const fallback = require('express-history-api-fallback');
const pgp = require('pg-promise')(/*options*/);
const db = pgp('postgres://user:password@db/db');

let root = path.join(__dirname,'/../');

app.use(express.static(root));
app.use(fallback('index.html', {root: root}));

//Mocks
const authorMock = require('./mocks/author.json')

app.get('/api/author', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(authorMock));
});

app.get('/api/posts', function (req, res) {
  db.any('SELECT * FROM "Posts"')
    .then(function (data) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(data));
    })
    .catch(function (error) {
      res.status(404).send('Not found');
    });
});

module.exports = app;
