import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/dashboard.css';
import  Routes  from './routes/Routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes/>
  </React.StrictMode>
);

