import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import store from './store';
import router from './router';
//  主题定制文件
import './theme.css'
//  注入组件 组合后的组件
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
);
