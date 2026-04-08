import React from 'react';
import './Footer.css';

function Footer() {
  const whatsappLink = 'https://wa.me/+56991780363?text=Hola%20GW%20Plastica%20Working';
  const gmailLink = 'https://mail.google.com/mail/?view=cm&fs=1&to=plasticaworking@gmail.com&su=Contacto%20desde%20Web%20Plastica%20Working&body=Hola%20Plastica%20Working,%0A%0AMe%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20vuestros%20programas%20de%20yoga%20y%20team%20working.';
  const instagramLink = 'https://instagram.com/plastica_working';

  return (
    <footer id="contacto" className="contacto">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        
        <div className="contacto-wrapper">
          <div className="contacto-info">
            <h3>Apoyamos tus Objetivos</h3>
            <div className="info-item">
              <span className="icon">📧</span>
              <p>plasticaworking@gmail.com</p>
            </div>
            <div className="info-item">
              <span className="icon">📱</span>
              <p>+56 9 9178 0363</p>
            </div>
            <div className="info-item">
              <span className="icon">📍</span>
              <p>Santiago, Chile</p>
            </div>
            
            <div className="contact-buttons">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp">
                <span>💬</span> WhatsApp
              </a>
              <a href={gmailLink} target="_blank" rel="noopener noreferrer" className="contact-btn gmail">
                <span>📧</span> Gmail
              </a>
              <a href={instagramLink} target="_blank" rel="noopener noreferrer" className="contact-btn instagram">
                <span>📷</span> Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Plástica Working. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
