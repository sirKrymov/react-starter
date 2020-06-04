import 'mobx-react-lite/batchingForReactDom';
import 'react-app-polyfill/ie11';

import './styles/fonts.scss';
import './styles/index.scss';

import React from 'react';

import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom';

import history from 'utils/history';

import Interceptor401 from 'custom/Interceptor401';
import App from './App';
// Import i18n (needs to be bundled)
import 'i18n';

// Put env variables to console log (development)
if (process.env.REACT_APP_HOST_ENV === 'development') {
  console.log('---------- Environments ----------');
  console.log(process.env);
  console.log('---------- Environments ----------');
}

Interceptor401.runInterceptor();

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// Dev hot-reloading
if (module.hot) {
  module.hot.accept();
}

// Set listener on route history change
history.listen(() => {
  // Check scroll className to start scrollTop
  const elements = document.getElementsByClassName('scroll');

  if (!elements.length) return;

  let i = 0;

  while (i < elements.length) {
    elements[i].scrollTop = 0;
    i++;
  }
});
