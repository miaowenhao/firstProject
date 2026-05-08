const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('./config');
const requestLogger = require('./middleware/requestLogger.middleware');
const { errorConverter, errorHandler, notFoundHandler } = require('./middleware/error.middleware');
const v1Routes = require('./routes/v1');

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

if (config.isDev) {
  app.use(morgan('dev'));
}
app.use(requestLogger);

app.use(`/api/${config.apiVersion}`, v1Routes);

app.use(notFoundHandler);
app.use(errorConverter);
app.use(errorHandler);

module.exports = app;
