import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { router } from './router';

import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import themeCustom from './utils/themeCustom';

import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider theme={themeCustom}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>  
          <RouterProvider router={router}>
            <App />
          </RouterProvider>
        </PersistGate>
      </Provider>
    </ConfigProvider>  
  </React.StrictMode>
);
