import React from 'react';
import ReactDOM from 'react-dom';
// import { AppContainer } from 'react-hot-loader';
import configureStore from './store/configureStore';

import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = configureStore();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'));
}
render();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// if (module.hot) {
//   module.hot.accept('./index.tsx', () => {
//     render()
//   })
// }
