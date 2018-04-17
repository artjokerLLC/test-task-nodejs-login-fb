export { default as winstonConfig } from './winston';
export { default as facebookAuth } from './facebookAuth';
export { default as httpsOptions } from './https';

export const port = process.env.PORT;
export const morganConfig =
  process.env.NODE_ENV === 'development' ? 'dev' : () => {};
export const host = process.env.HOST;
