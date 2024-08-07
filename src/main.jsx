import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// react Dom setup
import { RouterProvider } from "react-router-dom";
import router from './Routes/Route.jsx';

import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './AuthProvider/AuthProvider.jsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
        <Toaster />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
