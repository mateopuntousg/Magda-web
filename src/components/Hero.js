import React, { useEffect, useRef, useState, useMemo } from 'react';
import './Hero.css';

// Carga automática de todas las imágenes en public/fotos/expositorias/hero/
const heroContext = require.context('../../public/fotos/expositorias/hero', false, /\.(jpe?g|png|gif|webp)$/i);

function Hero() {
  const frases = [
    "¡El yoga no es solo ejercicio, es medicina para el alma!",
    "La plasticidad neuronal demuestra que nunca es tarde para cambiar.",
    "La cooperación amplifica la fuerza individual en equipos poderosos.",
    "Una mente calmada es una mente creativa y productiva.",
    "El bienestar corporativo es inversión, no gasto.",
    "Tu cuerpo es tu primer hogar, cuídalo con amor."
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
        imageRef.current.style.transform = `translateX(-${index * 100}%)`;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="inicio" className="hero">
      <div className="hero-gallery-wrapper">
        <div className="hero-gallery" ref={imageRef}>
          {[...images, ...images].map((src, i) => (
            <img key={i} src={src} alt={`Hero ${(i % images.length) + 1}`} className="hero-gallery-image" />
          ))}
        </div>
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1>Pertenencia • Cooperación • Bienestar</h1>
        <p>Somos una innovadora consultora motivada por promover una mejor calidad de vida para personas y organizaciones.</p>
        <div className="frase-mentor">
          <p><span style={{fontSize: '1.2em'}}>🕯</span> {frasaActual}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
