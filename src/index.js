import React from 'react';
import ReactDOM from 'react-dom/client';
import  App from 'components/App';
import './index.css';

const doom = ReactDOM.createRoot(document.getElementById('root'));

doom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
