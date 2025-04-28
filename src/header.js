import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <nav className="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Key Shift Tool</a>
        </div>
        </nav>
    );
}
export default Header;