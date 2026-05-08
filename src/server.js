const http = require('http');
const app = require('./app');
const config = require('./config');
const logger = require('./utils/logger');

const server = http.createServer(app);

server.listen(config.port, () => {
  logger.info(`🚀 Server running in ${config.env} mode on port ${config.port}`);
  logger.info(`📍 API available at http://localhost:${config.port}/api/${config.apiVersion}`);
});

const unexpectedErrorHandler = (error) => {
  logger.error('Unhandled error:', error);
  process.exit(1);
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down gracefully...');
  server.close(() => {
    logger.info('Server closed.');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  logger.info('SIGINT received. Shutting down gracefully...');
  server.close(() => {
    logger.info('Server closed.');
    process.exit(0);
  });
});

module.exports = server;
