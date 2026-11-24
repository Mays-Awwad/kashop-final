import React, { useEffect } from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import { QueryClient , QueryClientProvider  } from '@tanstack/react-query'
import './i18next.jsx';
import { useTranslation } from 'react-i18next';
import { ThemeProvider } from '@emotion/react';
import getTheme from './theme.jsx';
import { CssBaseline } from '@mui/material';
/*import useThemeStore from './api/store/useThemeStore.jsx';*/
import { ToastContainer } from 'react-toastify';
import theme from './theme.jsx';

export default function App() {
  const queryClient = new QueryClient();

  return (
    <>
     
     <ThemeProvider theme={theme}>
       <QueryClientProvider  client={queryClient}>
        <CssBaseline />

         <RouterProvider router={router} />
          <ToastContainer />
      </QueryClientProvider>
     </ThemeProvider>
    </>
    
   
  )
}
