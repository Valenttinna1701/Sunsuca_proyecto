// src/components/Navbar.js
import React from 'react';
import './Navbar.css'; // Si tienes un archivo CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a href="/">Página Principal</a>
        <a href="/catalog">Catalogo</a>
        <a href="/gallery">Galeria</a>
        <a href="/login">Login</a>
        <a href="/contacto">Contacto</a>
      </div>
    </nav>
  );
};

export default Navbar;
