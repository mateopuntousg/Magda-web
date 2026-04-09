import React, { useEffect, useRef, useState, useMemo } from 'react';
import './Carrusel.css';

// Carga automática de todas las imágenes en public/fotos/expositorias/carrusel/
const carruselContext = require.context('../../public/fotos/expositorias/carrusel', false, /\.(jpe?g|png|gif|webp)$/i);

function Carrusel() {
  const images = useMemo(() => {
    return carruselContext.keys().map(key => carruselContext(key));
  }, []);

  const columnRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const updateCarousel = (index) => {
    if (columnRef.current) {
      columnRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
    setCurrentIndex(index);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    updateCarousel(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 10000);
    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <section id="carrusel" className="carrusel-section">
      <button className="carrusel-nav carrusel-nav-prev" onClick={prevImage}>‹</button>
      <div className="carrusel-column-wrapper">
        <div className="carrusel-column" ref={columnRef}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`Imagen ${i + 1}`} className="carrusel-column-image" />
          ))}
        </div>
      </div>
      <button className="carrusel-nav carrusel-nav-next" onClick={nextImage}>›</button>
    </section>
  );
}

export default Carrusel;
