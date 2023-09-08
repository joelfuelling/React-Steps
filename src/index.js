import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//! Line below altered to only work on version 2. Must be manually changed to work on version 1.
import App from './App-V2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
