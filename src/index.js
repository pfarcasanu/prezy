/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Post from './Components/Post';
import Shell from './Components/Shell';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Shell />,
    children: [
      {
        path: 'post',
        element: <Post />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
