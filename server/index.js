const app = require('express')();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fallback = require('express-history-api-fallback');
const pgp = require('pg-promise')();
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];
const db = pgp(process.env[config.use_env_variable]);

const root = path.join(__dirname,'/../');

app.use(express.static(root));
app.use(fallback('index.html', {root: root}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Mocks
const authorMock = require('./mocks/author.json')

function getTimestamp() {
  return new Date(new Date().getTime() + (new Date().getTimezoneOffset() * 60000) + (3600000*2));
}

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
console.log(getTimestamp());
app.post('/api/posts', function (req, res){
  let request = req.body[0];

  db.one('INSERT INTO "Posts" (name, content, created_at, updated_at) VALUES ($1, $2, $3, $4) RETURNING id',
  [request.name, request.content, getTimestamp(), getTimestamp()])
    .then(function(){
      res.status(200).send('Success');
    })
    .catch(function (error) {
      res.status(404).send('Error');
    });
});

module.exports = app;
