import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/layout/App.js'
import './app/layout/styles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );

// root.render(
// <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// );

// reportWebVitals();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <App />
  </React.StrictMode>
)