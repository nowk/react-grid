import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/**
 * render renders the ReactDOM
 *
 * @api private
 */

function render() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
}

/**
 * render, go!
 */

render();

/**
 * hot module accept
 */

if (module.hot) {
  console.log('module.hot!');
  module.hot.accept('./App', render);
}
