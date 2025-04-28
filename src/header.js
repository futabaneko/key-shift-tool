import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <label className="navbar-brand">Key Shift Tool</label>
        </div>
        </nav>
    );
}
export default Header;