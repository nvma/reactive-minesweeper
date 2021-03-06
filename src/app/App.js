import React, { Fragment } from 'react';
import Helmet from 'react-helmet';
/* eslint-disable import/no-extraneous-dependencies */
import { hot } from 'react-hot-loader';


import Game from './Game';

const App = () => (
  <Fragment>
    <Helmet>
      <title>Minesweeper in React</title>
      <meta charSet='utf-8' />
      <meta
        name='description'
        content='Minesweeper game written with React'
      />
    </Helmet>
    <Game />
    <footer>
      <p><a href='https://github.com/nvma/reactive-minesweeper'>Source on GitHub</a></p>
    </footer>
  </Fragment>
);

export default hot(module)(App);

