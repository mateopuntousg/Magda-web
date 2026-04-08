import React, { useState } from 'react';
import './Header.css';
import logoImg from '../../fotos/logo/Logo Plastica Working (1).png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo">
          <img src={logoImg} alt="GW Plástica Working" className="logo-img" />
          <div className="logo-text">
            <h1>GW Plástica Working</h1>
            <p className="tagline">YogaTeamWorking</p>
          </div>
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
