const app = require('./server');
const PORT = process.env.PORT || 3000;
const logger = require('winston');

app.listen(PORT, function () {
  logger.info(`SERVER Listening on ${PORT}`);
});

module.exports = app;
