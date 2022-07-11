import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalStyle from './styles/GlobalStyle';
import { Provider } from "react-redux";
import config from './store/config';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render( 
  <React.StrictMode>
    <Provider store={config}>
      <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
