import React from 'react';
import './SobreNosotros.css';
import { getImagePath } from '../utils/imagePath';

function SobreNosotros() {
  const testimonios = [];

  const equipo = [
    {
      id: 1,
      nombre: 'Magdalena Goddard',
      rol: 'Directora de Proyecto',
      foto: getImagePath("/fotos/personas/Magdalena.jpg"),
      especialidades: [
        'Socióloga, Posgrado en Cooperación para el Desarrollo',
        'Coach Newfield Network',
        'Practitioner PNL Impact',
        'Profesora Certificada de Yoga Integral',
        'Especialización en Yoga Terapia Motora',
        'Profesora Certificada Aero Yoga',
        'Diversos Cursos Yoga Iyengar'
      ],
      descripcion: 'Directora y fundadora con más de 20 años de experiencia en diseño e implementación de clases de yoga en diversos contextos.'
    },
    {
      id: 2,
      nombre: 'Claudia Zepeda',
      rol: 'Profesora de Yoga',
      foto: getImagePath("/fotos/personas/claudia.jpg"),
      especialidades: [
        'Profesora Certificada de Hatha Yoga',
        'Escuela Chilena de Yoga',
        'Profesora Certificada Aero Yoga',
        'Especialización en Yoga Nidra y Meditación'
      ],
      descripcion: 'Experta en técnicas de relajación y meditación, especializada en yoga nidra para el bienestar integral.'
    },
    {
      id: 3,
      nombre: 'Jandy Ruiz',
      rol: 'Profesora de Yoga',
      foto: getImagePath("/fotos/personas/handi.jpg"),
      especialidades: [
        'Profesora Certificada Dynamic Yoga',
        'Profesora Certificada Aero Yoga',
        'Especialización en Biometría del Yoga',
        'Especialización en Anatomía Aplicada al Yoga'
      ],
      descripcion: 'Especialista en biomecánica y movimiento, enfocada en la prevención de lesiones y optimización postural.'
    }
  ];

  return (
    <section id="sobre-nosotros" className="sobre-nosotros section">
      <div className="container">
        <h2 className="section-title">Sobre Nosotros</h2>

        {/* Sección de Testimonios */}
        <div className="testimonios-container">
          <p className="subsection-subtitle">Lo que dicen de la experiencia YogaTeamWorking.</p>
          
          {testimonios.length === 0 ? (
            <div className="testimonios-vacio">
              <p>Proximamente compartiremos los testimonios de nuestros clientes...</p>
            </div>
          ) : (
            <div className="testimonios-grid">
              {testimonios.map((test, idx) => (
                <div key={idx} className="testimonio-card">
                  <div className="testimonio-contenido">
                    <p className="testimonio-texto">"{test.texto}"</p>
                    <div className="testimonio-autor">
                      <p className="autor-nombre">{test.nombre}</p>
                      <p className="autor-cargo">{test.cargo}</p>
                      <p className="autor-empresa">{test.empresa}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Sección del Equipo */}
        <div className="equipo-container">
          <h3 className="subsection-title">Nuestro Equipo</h3>
          <div className="grid grid-3">
            {equipo.map((miembro) => (
              <div key={miembro.id} className="equipo-card">
                <img 
                  src={miembro.foto} 
                  alt={miembro.nombre} 
                  className={`equipo-foto equipo-foto-${miembro.id}`}
                />
                <h4>{miembro.nombre}</h4>
                <p className="equipo-rol">{miembro.rol}</p>
                <p className="equipo-descripcion">{miembro.descripcion}</p>
                
                <div className="equipo-especialidades">
                  <h5>Especialidades:</h5>
                  <ul>
                    {miembro.especialidades.map((esp, index) => (
                      <li key={index}>{esp}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreNosotros;
