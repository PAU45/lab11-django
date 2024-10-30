import React from 'react';
import './Navbar.css'; // Importa el archivo CSS
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/" className="navbar-link">Tarea</Link></li>
       
        <li className="navbar-item"><Link to="/empleados" className="navbar-link">Empleados</Link></li>
        <li className="navbar-item"><Link to="/colores" className="navbar-link">Colores</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;