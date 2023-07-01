import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import Root from './routes/root';
import Home from './routes/home';
import Booking from './routes/booking';
import Success from './routes/success';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/booking',
        element: <Booking />,
      },
      {
        path: '/success',
        element: <Success />,
      },
    ],
    errorElement: <div className="container">404 Not Found</div>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
