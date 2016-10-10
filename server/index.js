const app = require('express')();

app.get('/', function (req, res) {
  console.log('~/server/index.js : SUCCES');
  res.json({succes: true});
});

module.exports = app;
