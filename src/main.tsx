import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
=======
>>>>>>> dad3785788b24799a72a6a9969b18bea9d03fa1c

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
<<<<<<< HEAD


import { LanguageProvider } from './context/LanguageContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);
=======
>>>>>>> dad3785788b24799a72a6a9969b18bea9d03fa1c
