import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'Pages/Main';
import store from 'Src/store';

const root = document.getElementById('root');

if (root !== null) {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
}
