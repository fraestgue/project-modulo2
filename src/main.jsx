import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// script.js
import 'bootstrap/dist/css/bootstrap.min.css';
import "nes.css/css/nes.min.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <App />
  
  </BrowserRouter>
  
)
