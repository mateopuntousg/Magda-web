import React from 'react';
import './Valores.css';

function Valores() {
  const valores = [
    {
      id: 1,
      icon: '◉',
      title: 'Pertenencia',
      description: '79% de colaboradores se sienten más comprometidos cuando la empresa promueve hábitos saludables. Creamos espacios donde cada persona siente que es parte valiosa del equipo, fortaleciendo vínculos y cohesión grupal.'
    },
    {
      id: 2,
      icon: '◈',
      title: 'Cooperación',
      description: 'Ambientes saludables reducen 20% las enfermedades ocupacionales musculoesqueléticas. Fomentamos colaboración mediante prácticas que potencian confianza, comunicación efectiva y trabajo en equipo.'
    },
    {
      id: 3,
      icon: '✦',
      title: 'Bienestar Integral',
      description: 'El yoga enseña alineación postural, biomecánica, meditación, control respiratorio y relajación. Activamos plasticidad neuronal para generar cambios sostenibles en comportamiento, resiliencia y salud mental.'
    }
  ];

  const beneficios = [
    'Incremento de la sensación de bienestar general',
    'Mejora significativa en la calidad del sueño y descanso',
    'Aumento de concentración y claridad mental',
    'Fortalecimiento de la cohesión y confianza del equipo',
    'Mayor productividad y compromiso organizacional',
    'Disminución de licencias médicas relacionadas con estrés y problemas musculoesqueléticos',
  ];

  return (
    <section id="valores" className="valores section">
      <div className="container">
        <h2 className="section-title">Qué aportamos en Plástica Working</h2>
        
        {/* Texto introductorio */}
        <div className="intro-text">
          <p>
            Diversos estudios recomiendan integrar salud mental y actividad física en espacios laborales para reducir la tasa de morbilidad y licencias médicas. El yoga utiliza técnicas de alineación postural, biomecánica corporal, meditación y relajación, que integramos en un trabajo de coordinación grupal para potenciar dimensiones de interés para las organizaciones.
          </p>
        </div>

        <div className="grid grid-3">
          {valores.map((valor) => (
            <div key={valor.id} className="card valor-card">
              <div className="card-icon">{valor.icon}</div>
              <h3>{valor.title}</h3>
              <p>{valor.description}</p>
            </div>
          ))}
        </div>

        {/* Sección: Lo que logras con nosotros */}
        <div className="beneficios-section">
          <h3 className="beneficios-titulo">Lo que logras con nosotros</h3>
          <div className="beneficios-grid">
            {beneficios.map((beneficio, idx) => (
              <div key={idx} className="beneficio-item">
                <span className="beneficio-icon">✓</span>
                <p>{beneficio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Valores;
