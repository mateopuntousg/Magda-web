import React from 'react';
import './Desafio.css';

function Desafio() {
  const problemas = [
    {
      titulo: 'Insatisfacción Laboral',
      stats: [
        { label: 'Insatisfacción con el trabajo actual', value: 31 },
        { label: 'Problemas de estado físico y mental', value: 35 }
      ]
    },
    {
      titulo: 'Ausencias Laborales',
      stats: [
        { label: 'Trastornos mentales', value: 32.8 },
        { label: 'Enfermedades ostemusculares', value: 10 }
      ]
    },
    {
      titulo: 'Crisis de Salud Nacional',
      stats: [
        { label: 'Sedentarismo', value: 87 },
        { label: 'Sobrepeso y obesidad', value: 74.2 }
      ]
    }
  ];

  return (
    <section id="desafio" className="desafio section">
      <div className="container">
        <h2 className="section-title">El Desafío País que nos Motiva</h2>
        
        <div className="desafio-intro">
          <p>
            Las organizaciones reportan crecientes niveles de insatisfacción laboral, ausencia por enfermedades 
            y problemas de salud física, social y mental. Las empresas pierden productividad mientras sus 
            colaboradores luchan en silencio
          </p>
        </div>

        <div className="desafio-problemas">
          {problemas.map((problema, idx) => (
            <div key={idx} className="problema-card">
              <h3>{problema.titulo}</h3>
              <div className="problema-stats">
                {problema.stats.map((stat, statIdx) => (
                  <div key={statIdx} className="stat-item">
                    <div className="stat-bar-wrapper">
                      <div 
                        className="stat-bar" 
                        style={{ width: `${stat.value}%` }}
                      ></div>
                    </div>
                    <div className="stat-label">
                      <span>{stat.label}</span>
                      <span className="stat-valor">{stat.value}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="desafio-conclusion">
          <p>
            <strong>El resultado:</strong> Equipos desconectados, baja productividad, 
            alta rotación de personal y colaboradores que no encuentran sentido ni bienestar 
            en sus espacios laborales.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Desafio;
