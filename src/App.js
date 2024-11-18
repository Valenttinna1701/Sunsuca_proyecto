// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Gallery from './pages/Gallery';
import Login from './pages/Login';
import Contacto from './pages/Contacto';
import ManageEvents from './pages/ManageEvents'; // Agregar página de gestión de eventos
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(false); // Estado para saber si el usuario está autenticado
  const [role, setRole] = useState(''); // Estado para saber si el usuario es admin o cliente

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/login" element={<Login setAuthenticated={setAuthenticated} setRole={setRole} />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* Si el usuario está autenticado, redirige a la gestión de eventos */}
          <Route 
            path="/manage-events" 
            element={authenticated ? <ManageEvents role={role} /> : <Login setAuthenticated={setAuthenticated} setRole={setRole} />} 
          />
        </Routes>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-links">
              <ul>
                <li><a href="/about">Acerca de</a></li>
                <li><a href="/services">Servicios</a></li>
                <li><a href="/contact">Contacto</a></li>
                <li><a href="/privacy-policy">Política de Privacidad</a></li>
              </ul>
            </div>
            <div className="footer-info">
              <p>&copy; 2024 Tu Empresa. Todos los derechos reservados.</p>
              <p>Dirección: Calle Ejemplo 123, Ciudad, País</p>
              <p>Teléfono: (123) 456-7890</p>
              <p>Email: contacto@tuempresa.com</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
