import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// react Dom setup
import { RouterProvider } from "react-router-dom";
import router from './Routes/Route.jsx';

import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './AuthProvider/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
