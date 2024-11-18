// src/pages/Catalog.js
import React from 'react';
import './Catalog.css';

// Datos de servicios, incluyendo imágenes
const services = [
  { 
    title: 'Sembrado Ecológico', 
    description: 'Este servicio de sembrado ecológico promueve técnicas sostenibles para cultivar plantas y árboles, respetando el medio ambiente y fomentando la biodiversidad.', 
    image: 'https://agrospray.com.ar/blog/wp-content/uploads/2022/04/agricultura-ecologica.jpg' 
  },
  { 
    title: 'Riego Automático', 
    description: 'El servicio de riego automático asegura un riego eficiente y controlado de las plantas, utilizando sistemas automatizados que optimizan el consumo de agua y favorecen su desarrollo saludable..', 
    image: 'https://img.freepik.com/fotos-premium/riego-riego-automatico-plantas-agricolas_756748-3683.jpg' 
  },
  { 
    title: 'Cuidado del Medio Ambiente', 
    description: 'Este servicio de cuidado del medio ambiente fomenta prácticas sostenibles y ecológicas, contribuyendo a la reducción del impacto ambiental y promoviendo la conservación de los recursos naturales..', 
    image: 'https://www.repsol.com/content/dam/repsol-corporate/es/energia-e-innovacion/manos-tierra-nino.jpg' 
  },
  { 
    title: 'Procesamiento de Residuos', 
    description: 'Este servicio de procesamiento de residuos biológicos transforma los desechos orgánicos en compost o energía renovable, contribuyendo a la sostenibilidad y reduciendo la huella ambiental.', 
    image: 'https://www.24-horas.mx/wp-content/uploads/2021/07/ProcesamientoResiduos_CDMX.jpg' 
  }
];

function Catalog() {
  return (
    <div className="catalog">
      <h1>Catálogo de Servicios</h1>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.title} className="service-image" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Catalog;
