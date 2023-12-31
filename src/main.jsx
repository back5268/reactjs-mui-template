import React from 'react';
import ReactDOM from 'react-dom/client';

// third party
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

// project imports
import * as serviceWorker from '@/serviceWorker';
import App from './App.jsx';

// style + assets
import '@assets/scss/style.scss';
import { config } from '@/config/index.js';

// ==============================|| REACT DOM RENDER  ||============================== //
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter basename={config.basename}>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
