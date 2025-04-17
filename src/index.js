import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter } from 'react-router-dom'; // 👈 Import this

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter> {/* 👈 Wrap App inside BrowserRouter */}
      <App />
    </BrowserRouter>
  </Provider>
);

