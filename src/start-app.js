import https from 'https';

import { port, httpsOptions } from './config';
import app from './app';
import logger from './lib/logger';

async function startApp() {
  const server = https.createServer(httpsOptions, app);

  server.listen(port);

  logger.info(`App listening on port ${port}`);

  return server;
}

export default startApp;
