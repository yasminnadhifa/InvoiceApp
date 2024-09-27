import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux';
import store from './store.js';
import Home from './pages/Home.jsx';
import { Invoices } from './pages/Invoices.jsx';
import PublishedInvoice from './pages/PublishedInvoice.jsx';
import RevenueChart from './pages/RevenueChart.jsx';

const routes = [
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/invoices",
    element: <Invoices/>,
  },
  {
    path: "/published_invoice",
    element: <PublishedInvoice/>,
  },
  {
    path: "/dashboard",
    element: <RevenueChart/>,
  }
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);