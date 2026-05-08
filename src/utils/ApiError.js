const httpStatus = require('http-status');

class ApiError extends Error {
  constructor(statusCode, message, isOperational = true, stack = '') {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  static badRequest(message = 'Bad Request') {
    return new ApiError(httpStatus.BAD_REQUEST, message);
  }

  static unauthorized(message = 'Unauthorized') {
    return new ApiError(httpStatus.UNAUTHORIZED, message);
  }

  static forbidden(message = 'Forbidden') {
    return new ApiError(httpStatus.FORBIDDEN, message);
  }

  static notFound(message = 'Not Found') {
    return new ApiError(httpStatus.NOT_FOUND, message);
  }

  static internal(message = 'Internal Server Error') {
    return new ApiError(httpStatus.INTERNAL_SERVER_ERROR, message, false);
  }
}

module.exports = ApiError;
