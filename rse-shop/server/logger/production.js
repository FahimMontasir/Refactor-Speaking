const { createLogger, format, transports } = require('winston');

const { combine, timestamp, json } = format;

const productionLogger = () =>
  createLogger({
    level: 'debug',
    format: combine(timestamp(), json()),
    defaultMeta: { service: 'user-service' },

    transports: [
      new transports.File({
        filename: 'productionErrors.log',
        handleExceptions: true,
        level: 'error',
      }),
    ],

    exitOnError: false,
  });

module.exports = productionLogger;
