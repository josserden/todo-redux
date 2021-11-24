import React from 'react';
import ReactDOM from 'react-dom';
import { Global } from '@emotion/react';

import App from './components/App';
import { GlobalStyles } from './index.styled';

ReactDOM.render(
  <React.StrictMode>
    <Global styles={GlobalStyles} />

    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
