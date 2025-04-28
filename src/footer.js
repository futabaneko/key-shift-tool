import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return (
        <footer className="bg-dark text-light text-center py-5 mt-6 position-fixed bottom-0 w-100">
            <small>Copyright © 2025 Futabaneko All Rights Reserved.<br /></small>
            <a href="https://github.com/futabaneko/key-shift-tool" style={{ fontSize: '20px', color: 'white' }}>
            <i class="bi bi-github"></i>
            </a>
        </footer>
    );
}
export default Footer;