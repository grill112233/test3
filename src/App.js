import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToggleComponent from './ToggleComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
         Continuous Integration Successful.
        </p>
      </div>
    );
  }
  toggle() {
    return (
        <ToggleComponent />
    );
  }

}

const bodyParser = require('body-parser');
const cors = require('@robertoachar/express-cors');
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

const { catchAll, notFound } = require('./error');

const app = express();
const userRouter = require('./user/user.router');

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.json({ message: 'It works!' });
});

app.use('/api/users', userRouter);

app.use(notFound);
app.use(catchAll);

module.exports = app;

export default App;
