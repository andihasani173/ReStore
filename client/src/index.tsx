import React from 'react'
import ReactDOM from 'react-dom/client'
import './app/layout/styles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
//import { router } from './app/router/routes.js';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes';
import { StoreProvider } from './app/context/StoreContext';
 


// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// root.render(
// <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

// reportWebVitals();

const root =ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
  );
  
  root.render(
  <React.StrictMode>
    <StoreProvider>
    <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>
);