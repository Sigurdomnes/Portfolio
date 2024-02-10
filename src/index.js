import React from 'react';
import ReactDOM from 'react-dom/client';
import './postcss/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
