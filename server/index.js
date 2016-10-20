const app = require('express')();
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const fallback = require('express-history-api-fallback');
const pgp = require('pg-promise')();
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/config/config.json')[env];
const db = pgp(process.env[config.use_env_variable]);

const root = path.join(__dirname,'/../public/');

app.use(express.static(root));
app.use(fallback('index.html', {root: root}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Mocks
const authorMock = require('./mocks/author.json')

//classes
var Post = require('./class/post');

function getTimestamp() {
  return new Date(new Date().getTime() + (new Date().getTimezoneOffset() * 60000) + (3600000*2));
}

app.get('/api/author', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(authorMock));
});

app.get('/api/posts', function (req, res) {
  db.any('SELECT name, content FROM "Posts"')
    .then(function (data) {
      res.setHeader('Content-Type', 'application/json');
      Posts = data.map((elem) => new Post(elem.name, elem.content));
      res.send(JSON.stringify(Posts));
    })
    .catch(function (error) {
      res.status(404).send();
    });
});

app.post('/api/posts', function (req, res){
  req.accepts('application/json');
  var NewPost = new Post(req.body[0].name, req.body[0].content);
  db.one('INSERT INTO "Posts" (name, content, created_at, updated_at) VALUES ($1, $2, $3, $4) ON CONFLICT (content) DO NOTHING RETURNING id',
   [NewPost.getName(), NewPost.getContent(), getTimestamp(), getTimestamp()])
    .then(function(){
      res.status(201).send();
    })
    .catch(function (error) {
      res.status(404).send();
    });
});

app.delete('/api/postremove', function (req, res){
  req.accepts('application/json');
  db.none('DELETE FROM "Posts" WHERE NAME = $1', req.body[0].name)
    .then(function(){
      res.status(204).send();
    })
    .catch(function (error) {
      res.status(409).send();
    });
});

module.exports = app;
