import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop.jsx';
import Layout from './components/Layout/Layout.jsx';
import Orders from './components/Orders/Orders.jsx';
import ManageInventory from './components/ManageInventory/ManageInventory.jsx';
import Login from './components/Login/Login.jsx';
import OrderReview from './components/OrderReview/OrderReview.jsx';
import cartProductsLoader from './loaders/cartProductsLoader.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path:'orders',
        element: <Orders></Orders>,
        loader: cartProductsLoader
      },
      {
        path: 'manage inventory',
        element: <ManageInventory></ManageInventory>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'order review',
        element: <OrderReview></OrderReview>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
