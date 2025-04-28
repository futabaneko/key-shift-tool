import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './header'
import Footer from './footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div class="page">
    <Header />
    <App />
    <Footer />
  </div>
)