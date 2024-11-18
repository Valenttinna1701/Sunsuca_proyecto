import React from 'react';
import './Gallery.css';

const images = [
  { 
    src: require('../img/sembrado1.jpg'), 
    alt: 'Sembrado Ecológico 1',
    title: 'Sembrado Ecológico',
    description: 'Implementación de técnicas agrícolas sostenibles'
  },
  { 
    src: require('../img/sembrado2.jpg'), 
    alt: 'Sembrado Ecológico 2',
    title: 'Cultivo Orgánico',
    description: 'Producción de alimentos sin pesticidas'
  },
  { 
    src: require('../img/sembrado3.jpg'), 
    alt: 'Sembrado Ecológico 3',
    title: 'Agricultura Sostenible',
    description: 'Prácticas agrícolas respetuosas con el medio ambiente'
  },
  { 
    src: require('../img/sembrado4.jpg'), 
    alt: 'Riego Automático',
    title: 'Sistema de Riego',
    description: 'Optimización del uso del agua en cultivos'
  },
  { 
    src: require('../img/sembrado5.jpg'), 
    alt: 'Procesamiento de Residuos Biológicos',
    title: 'Gestión de Residuos',
    description: 'Transformación de residuos en recursos útiles'
  },
  { 
    src: require('../img/sembrado6.jpg'), 
    alt: 'Cuidado del Medio Ambiente',
    title: 'Protección Ambiental',
    description: 'Conservación de ecosistemas naturales'
  },
];

function Gallery() {
  return (
    <div className="gallery">
      <h1>Galería de Imágenes</h1>
      <p>Explora las imágenes destacadas de nuestras actividades y servicios.</p>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <div className="gallery-image-container">
              <img src={image.src} alt={image.alt} className="gallery-image" />
            </div>
            <div className="gallery-content">
              <h3>{image.title}</h3>
              <p>{image.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;