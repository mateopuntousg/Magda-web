import React, { useEffect, useRef, useState } from 'react';
import './Carrusel.css';

function Carrusel() {
  const images = [
    '/fotos/expositorias/carrusel/IMG_2765.JPG',
    '/fotos/expositorias/carrusel/IMG_2772.JPG',
    '/fotos/expositorias/carrusel/IMG_2777.JPG',
    '/fotos/expositorias/carrusel/IMG_2782.JPG',
    '/fotos/expositorias/carrusel/IMG_2785.JPG',
    '/fotos/expositorias/carrusel/IMG_2792.JPG',
    '/fotos/expositorias/carrusel/IMG_2797.JPG',
    '/fotos/expositorias/carrusel/IMG_2802.JPG',
    '/fotos/expositorias/carrusel/IMG_2813.JPG',
    '/fotos/expositorias/carrusel/IMG_2821.JPG',
    '/fotos/expositorias/carrusel/IMG_2824.JPG',
    '/fotos/expositorias/carrusel/IMG_2826.JPG',
    '/fotos/expositorias/carrusel/IMG_2839.JPG',
    '/fotos/expositorias/carrusel/IMG_2842.JPG',
    '/fotos/expositorias/carrusel/IMG_2846.JPG',
    '/fotos/expositorias/carrusel/IMG_2852.JPG',
    '/fotos/expositorias/carrusel/IMG_2856.JPG',
    '/fotos/expositorias/carrusel/IMG_2860.JPG',
    '/fotos/expositorias/carrusel/IMG_2871.JPG',
    '/fotos/expositorias/carrusel/IMG_2877.JPG',
    '/fotos/expositorias/carrusel/IMG_2880.JPG',
    '/fotos/expositorias/carrusel/IMG_2881.JPG',
    '/fotos/expositorias/carrusel/IMG_2889.JPG',
    '/fotos/expositorias/carrusel/IMG_2891.JPG',
    '/fotos/expositorias/carrusel/IMG_2901.JPG',
    '/fotos/expositorias/carrusel/IMG_2904.JPG',
    '/fotos/expositorias/carrusel/IMG_2906.JPG',
    '/fotos/expositorias/carrusel/IMG_2908.JPG',
    '/fotos/expositorias/carrusel/IMG_2909.JPG',
    '/fotos/expositorias/carrusel/IMG_2931.JPG',
    '/fotos/expositorias/carrusel/IMG_2934.JPG',
    '/fotos/expositorias/carrusel/IMG_2944.JPG',
    '/fotos/expositorias/carrusel/IMG_2945.JPG',
    '/fotos/expositorias/carrusel/IMG_2947.JPG',
    '/fotos/expositorias/carrusel/IMG_2948.JPG',
    '/fotos/expositorias/carrusel/IMG_2951.JPG',
    '/fotos/expositorias/carrusel/IMG_2956.JPG',
    '/fotos/expositorias/carrusel/IMG_2959.JPG',
    '/fotos/expositorias/carrusel/IMG_2971.JPG',
    '/fotos/expositorias/carrusel/fotos ab.JPG',
    '/fotos/expositorias/carrusel/fotos abas.JPG',
    '/fotos/expositorias/carrusel/fotos abast.JPG',
    '/fotos/expositorias/carrusel/fotos abasti.JPG',
    '/fotos/expositorias/carrusel/fotosabastib.JPG',
    '/fotos/expositorias/carrusel/fotosabastible.JPG',
    '/fotos/expositorias/carrusel/fotosabastible 1.JPG',
    '/fotos/expositorias/carrusel/fotosabastible2.JPG',
    '/fotos/expositorias/carrusel/fotosabastible4.JPG',
    '/fotos/expositorias/carrusel/fotosabstibl.JPG'
  ];

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
