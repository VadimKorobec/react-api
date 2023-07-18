import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Context } from 'testContext/Context/Context';
// import { App } from './testContext/App.jsx';
import { persistor, store } from './redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Context>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Context>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
