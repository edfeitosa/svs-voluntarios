import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app';
import Header from './components/_general/header';

import './styles/main.scss';

ReactDOM.render(
  <div>
    <Header />
    <BrowserRouter>
      <div className="container">
        <App />
      </div>
    </BrowserRouter>
  </div>, document.getElementById('root')
);