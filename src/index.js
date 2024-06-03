import React from 'react';
import ReactDOM from 'react-dom/client';
import './postcss/index.css';
import App from './App';
import './fonts/Montserrat-Alt1-0.3.2/fonts/webfonts/MontserratAlt1-Thin.woff'
import './fonts/Montserrat-Alt1-0.3.2/fonts/webfonts/MontserratAlt1-Thin.woff2'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);