import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' https://example.com; script-src 'self' https://example.com;">

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
