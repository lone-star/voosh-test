import React from 'react';
import reactDOM from 'react-dom';
import App from './App';
import 'whatwg-fetch';
import './index.css';

// Proxying in development mode
const URL_SOURCE = 'https://crossorigin.me/http://static.solidstategroup.com/js-test/films.json';

fetch(URL_SOURCE)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    reactDOM.render(<App movies={data} />, document.getElementById('root'));
  });

