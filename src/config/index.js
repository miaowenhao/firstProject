const dotenv = require('dotenv');

dotenv.config();

const env = process.env.NODE_ENV || 'development';

const config = {
  env,
  port: parseInt(process.env.PORT, 10) || 3000,
  apiVersion: process.env.API_VERSION || 'v1',
  logLevel: process.env.LOG_LEVEL || 'info',
  isDev: env === 'development',
  isProd: env === 'production',
  isTest: env === 'test',
};

module.exports = config;
