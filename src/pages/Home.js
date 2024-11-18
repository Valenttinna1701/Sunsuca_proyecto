import React from 'react';
import './Home.css'; // Estilos específicos para la página de inicio
import logo from '../img/logo.png'; // Asegúrate de que la ruta es correcta

const Home = () => {
  return (
    <div className="home">
      <header className="hero-section">
        <img src={logo} alt="Logo SUNSUCA" className="logo" />
        <h1>Bienvenidos </h1>
        <p>Innovación y compromiso con el agro: sembrado ecológico, riego automático y más.</p>
        <a href="/catalog" className="btn-primary">Descubre nuestros servicios</a>
      </header>

      {/* Sección sobre nosotros */}
      <section className="about-us">
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre nosotros</h2>
            <p>
              En SUNSUCA nos dedicamos a la agricultura sostenible, brindando soluciones ecológicas 
              para el sembrado, riego y tratamiento de residuos biológicos. Con el uso de tecnología avanzada, 
              buscamos cuidar el medio ambiente mientras mejoramos la eficiencia y productividad de los cultivos.
            </p>
          </div>
          <div className="about-image">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQD0oCUz7QzJG-wl3GAm19lWWSvGNZHuPZSw&s" alt="Sobre nosotros" />
          </div>
        </div>
      </section>

      <section className="services">
        <h2>Servicios</h2>
        <div className="services-list">
          <div className="service-item">
            <h3>Sembrado Ecológico</h3>
            <p>Ofrecemos soluciones para el sembrado ecológico en grandes hectáreas, optimizando recursos y cuidando el ecosistema.</p>
          </div>
          <div className="service-item">
            <h3>Riego Automático</h3>
            <p>Instalamos sistemas de riego automático para mejorar la eficiencia en el uso del agua, adaptados a tus necesidades agrícolas.</p>
          </div>
          <div className="service-item">
            <h3>Procesamiento de Residuos</h3>
            <p>Gestionamos los residuos biológicos generados en la agricultura, contribuyendo al cuidado del medio ambiente.</p>
          </div>
        </div>
      </section>

      <section className="gallery-preview">
        <h2>Galería de Siembras Inteligentes</h2>
        <p>Conoce cómo implementamos nuestras soluciones tecnológicas en el campo.</p>
        <a href="/gallery" className="btn-secondary">Ver galería completa</a>
      </section>

      <section className="events-preview">
        <h2>Eventos y Capacitaciones</h2>
        <p>Participa en nuestros eventos y capacitaciones para conocer más sobre nuestras soluciones y cómo aplicarlas en tu negocio.</p>
        <a href="/login" className="btn-secondary">Acceder al área exclusiva</a>
      </section>
    </div>
  );
};

export default Home;
