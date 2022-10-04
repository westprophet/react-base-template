import React from 'react';

import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import App from './App';
import theme from './mui-theme';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

const container = document.getElementById('root');
const root = createRoot(container!);
const queryClient = new QueryClient();

import './scss/index.scss';

root.render(
  <React.StrictMode>
    <HashRouter>
      <ThemeProvider theme={theme}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </SnackbarProvider>
      </ThemeProvider>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
