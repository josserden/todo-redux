import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App-redux';
import { GlobalStyles } from './index.styled';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
