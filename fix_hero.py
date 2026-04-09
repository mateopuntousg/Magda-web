#!/usr/bin/env python3
path = '/home/mpuntous/Proyectos/PlasticaWorking/src/components/Hero.js'
content = """import React, { useEffect, useRef, useState, useMemo } from 'react';
import './Hero.css';

// Carga autom\u00e1tica de todas las im\u00e1genes en public/fotos/expositorias/hero/
const heroContext = require.context('../../public/fotos/expositorias/hero', false, /\\.(jpe?g|png|gif|webp)$/i);

function Hero() {
  const frases = [
    "\u00a1El yoga no es solo ejercicio, es medicina para el alma!",
    "La plasticidad neuronal demuestra que nunca es tarde para cambiar.",
    "La cooperaci\u00f3n amplifica la fuerza individual en equipos poderosos.",
    "Una mente calmada es una mente creativa y productiva.",
    "El bienestar corporativo es inversi\u00f3n, no gasto.",
    "Tu cuerpo es tu primer hogar, cu\u00eddalo con amor."
  ];

  const [frasaActual] = useState(() => {
    return frases[Math.floor(Math.random() * frases.length)];
  });

  const images = useMemo(() => {
    return heroContext.keys().map(key => heroContext(key));
  }, []);

  const imageRef = useRef(null);

  useEffect(() => {
    if (images.length <= 1) return;
    let index = 0;
    const total = images.length * 2;
    const interval = setInterval(() => {
      index = (index + 1) % total;
      if (imageRef.current) {
        imageRef.current.style.transform = `translateX(-$""" + """{index * 100}%)`;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="inicio" className="hero">
      <div className="hero-gallery-wrapper">
        <div className="hero-gallery" ref={imageRef}>
          {[...images, ...images].map((src, i) => (
            <img key={i} src={src} alt={`Hero $""" + """{(i % images.length) + 1}`} className="hero-gallery-image" />
          ))}
        </div>
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1>Pertenencia \u2022 Cooperaci\u00f3n \u2022 Bienestar</h1>
        <p>Somos una innovadora consultora motivada por promover una mejor calidad de vida para personas y organizaciones.</p>
        <div className="frase-mentor">
          <p><span style={{fontSize: '1.2em'}}>\U0001f56f</span> {frasaActual}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
"""
with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print('Hero.js escrito OK')
