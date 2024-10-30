import React from 'react';
import './Tarea.css'; // Importa el archivo CSS

function Tarea({ tarea, color, eliminarTarea }) {
  return (
    <div className="tarea" style={{ backgroundColor: color }}>
      <div className="tarea-texto">
        <span>{tarea}</span>
      </div>
      <div className="tarea-boton">
        <button className="eliminar" onClick={eliminarTarea}>X</button>
      </div>
    </div>
  );
}

export default Tarea;