import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import passport from 'passport';
import cors from 'cors';

import { morganConfig } from '../config';
import errorLogger from './error-logger';
import errorSender from './error-sender';

import v1 from '../v1';
import pages from '../public-routes';

function applyMiddleware(app) {
  app.use(morgan(morganConfig));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
  app.use(methodOverride('X-HTTP-Method-Override'));
  app.use(cors());
  app.use(passport.initialize());
  app.use('/public', express.static('src/public'));

  app.use('/v1', v1);
  app.use('/', pages);

  app.use(errorSender);
  app.use(errorLogger);
}

export default applyMiddleware;
