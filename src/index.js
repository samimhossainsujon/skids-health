import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';
import UserDetails from './components/UserDetails/UserDetails';
import UserEdit from './components/UserEdit/UserEdit';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: 'error',
    children: [{
      path: '/',
      element: <Home />
    },

    {
      path: '/addUser',
      element: <AddUser />
    },

    {
      path: '/UserDetails/:id',
      element: <UserDetails />,      
    },

    {
      path: '/UserEdit/:id',
      element: <UserEdit />,
      loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)

    },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
