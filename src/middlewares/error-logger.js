import logger from '../lib/logger';

const errorLogger = (error, request, response, next) => {
  logger.error(error);
  return next();
};

export default errorLogger;
