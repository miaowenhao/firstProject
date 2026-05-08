const httpStatus = require('http-status');
const logger = require('../utils/logger');
const ApiError = require('../utils/ApiError');
const config = require('../config');

const errorConverter = (err, _req, _res, next) => {
  let error = err;
  if (!(error instanceof ApiError)) {
    const statusCode = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
    const message = error.message || httpStatus[statusCode];
    error = new ApiError(statusCode, message, false, err.stack);
  }
  next(error);
};

const errorHandler = (err, _req, res, _next) => {
  let statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  let message = err.message || httpStatus[statusCode] || 'Internal Server Error';
  if (config.isProd && !err.isOperational) {
    statusCode = httpStatus.INTERNAL_SERVER_ERROR;
    message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
  }

  const response = {
    code: statusCode,
    message,
    ...(config.isDev && { stack: err.stack }),
  };

  if (!config.isProd) {
    logger.error(err);
  }

  res.status(statusCode).json(response);
};

const notFoundHandler = (req, _res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, `Not found - ${req.originalUrl}`));
};

module.exports = {
  errorConverter,
  errorHandler,
  notFoundHandler,
};
