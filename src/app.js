import express from 'express';
import path from 'path';
import ejs from 'ejs';
import applyMiddleware from './middlewares';

const app = express();

app.engine('html', ejs.renderFile);
app.set('views', path.join(__dirname, '/public'));
app.set('view engine', 'html');

applyMiddleware(app);

export default app;
