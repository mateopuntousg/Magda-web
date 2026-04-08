import React, { useState } from 'react';
import './Header.css';
import { getImagePath } from '../utils/imagePath';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-img-container">
          <img src={getImagePath('/fotos/logo/Logo Plastica Working (1).png')} alt="GW Plástica Working" className="logo-img" />
        </div>
        <div className="logo-text-center">
          <h1 className="tagline">YogaTeamWorking</h1>
        </div>
        <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
          <a href="#desafio">Desafío</a>
          <a href="#valores">Qué Aportamos</a>
          <a href="#carrusel">Galería</a>
          <a href="#programas">Programas</a>
          <a href="#sobre-nosotros">Sobre Nosotros</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <button 
          className="menu-toggle" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}

export default Header;
