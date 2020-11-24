import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

const mongoose = require('mongoose');
const winston = require('winston');

const app = require('./app');
const config = require('./config');

mongoose.connect(config.DATABASE);
mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
  winston.info('Mongoose connected!');
});

mongoose.connection.on('disconnected', () => {
  winston.info('Mongoose disconnected!');
});

mongoose.connection.on('error', (err) => {
  winston.error(err.message);
  process.exit(1);
});

require('./user/user.model');

app.listen(config.PORT, () => {
  Object.keys(config).forEach((key) => winston.info(`${key}: ${config[key]}`));
});
