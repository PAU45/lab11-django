import React, { useState, useEffect } from 'react';
import './ColorManager.css';

function ColorManager() {
  const [color, setColor] = useState('');
  const [colors, setColors] = useState(() => {
    // Cargar colores desde localStorage al iniciar
    const savedColors = localStorage.getItem('colors');
    return savedColors ? JSON.parse(savedColors) : [{ name: 'Blanco', hex: '#FFFFFF' }];
  });

  useEffect(() => {
    // Guardar colores en localStorage cada vez que cambien
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  const handleInputChange = (e) => {
    setColor(e.target.value);
  };

  const handleAddColor = () => {
    if (color) {
      setColors([...colors, { name: color, hex: color }]);
      setColor('');
    }
  };

  const handleRemoveColor = (index) => {
    const newColors = colors.filter((_, i) => i !== index);
    setColors(newColors);
  };

  return (
    <div className="color-manager">
      <div className="input-section">
        <div className="input-container">
          <div className="color-bar" style={{ backgroundColor: color }}></div> {/* Barra de color a la izquierda */}
          <input
            type="text"
            value={color}
            onChange={handleInputChange}
            placeholder="Ingresa un nombre de color"
          />
        </div>
        <button className="add-button" onClick={handleAddColor}>Guardar</button>
      </div>
      <div className="color-cards">
        {colors.map((col, index) => (
          <div key={index} className="color-card">
            <div className="color-name">{col.name}</div>
            <div className="color-display" style={{ backgroundColor: col.hex }}></div>
            <button className="remove-button" onClick={() => handleRemoveColor(index)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorManager;