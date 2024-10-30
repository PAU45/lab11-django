import React, { useState } from 'react';

function InputTarea({ agregarTarea }) {
  const [tarea, setTarea] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (tarea) {
      agregarTarea(tarea);
      setTarea('');
    }
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Nueva tarea"
        value={tarea}
        onChange={(e) => setTarea(e.target.value)}
      />
      <button type="submit">Agregar Tarea</button>
    </form>
  );
}

export default InputTarea;