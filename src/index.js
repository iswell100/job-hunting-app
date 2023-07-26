import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { router } from './router';

import { RouterProvider } from 'react-router-dom'
import { ConfigProvider } from 'antd';
import themeCustom from './utils/themeCustom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider theme={themeCustom}>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ConfigProvider>  
  </React.StrictMode>
);
