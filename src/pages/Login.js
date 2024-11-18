import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ setAuthenticated, setRole }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'El usuario es requerido';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'La contraseña es requerida';
    } else if (formData.password.length < 4) {
      newErrors.password = 'La contraseña debe tener al menos 4 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Limpiar error del campo cuando el usuario empieza a escribir
    if (errors[name]) {
      setErrors(prevErrors => ({
        ...prevErrors,
        [name]: ''
      }));
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simular un delay de red
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (formData.username === 'admin' && formData.password === 'admin') {
        setAuthenticated(true);
        setRole('admin');
        navigate('/manage-events');
      } else if (formData.username === 'client' && formData.password === 'client') {
        setAuthenticated(true);
        setRole('client');
        navigate('/manage-events');
      } else {
        setErrors({
          auth: 'Usuario o contraseña incorrectos'
        });
      }
    } catch (error) {
      setErrors({
        auth: 'Error al intentar iniciar sesión. Por favor, intente nuevamente.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <h2>Iniciar Sesión</h2>

        {errors.auth && (
          <div className="error-message auth-error">
            {errors.auth}
          </div>
        )}

        <div className="form-group">
          <label htmlFor="username">Usuario</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Ingrese su usuario"
            value={formData.username}
            onChange={handleChange}
            disabled={isLoading}
          />
          {errors.username && (
            <span className="error-message">{errors.username}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese su contraseña"
            value={formData.password}
            onChange={handleChange}
            disabled={isLoading}
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>

        <button 
          type="submit" 
          className={isLoading ? 'loading' : ''}
          disabled={isLoading}
        >
          {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
        </button>

        <div className="login-footer">
          <p>Usuarios de prueba:</p>
          <small>Admin: admin/admin</small>
          <small>Cliente: client/client</small>
        </div>
      </form>
    </div>
  );
}

export default Login;