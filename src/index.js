import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Context } from 'testContext/Context/Context';
// import { App } from './testContext/App.jsx';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-api">
      <Provider store={store}>
        <Context>
          <App />
        </Context>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
