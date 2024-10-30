import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import InputTarea from './Components/InputTarea.jsx';
import Tarea from './Components/Tarea.jsx';
import Navbar from './Components/navbar.jsx'; // Asegúrate de que la ruta sea correcta
import EmployeeList from './Components/ListadeEmpleados.jsx'; // Asegúrate de que la ruta sea correcta
import ColorManager from './Components/ColorAdministrar.jsx'; // Asegúrate de que la ruta sea correcta

function App() {
  const [tareas, setTareas] = useState([]);

  const generarColorAleatorio = () => {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const agregarTarea = (tarea) => {
    const nuevaTarea = {
      id: tareas.length + 1,
      tarea: tarea,
      color: generarColorAleatorio()
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    const nuevasTareas = tareas.filter(tarea => tarea.id !== id);
    setTareas(nuevasTareas);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div className='App'>
            <h1>Bienvenido</h1>
            <h1>Ingresa tus tareas</h1>
            <InputTarea agregarTarea={agregarTarea} />
            <div id="dinamic">
              {tareas.map((tarea) => (
                <Tarea
                  key={tarea.id}
                  tarea={tarea.tarea}
                  color={tarea.color}
                  eliminarTarea={() => eliminarTarea(tarea.id)}
                />
              ))}
            </div>
          </div>
        } />
        <Route path="/tareas" element={<div>Componente de Tareas</div>} />
        <Route path="/empleados" element={<EmployeeList />} />
        <Route path="/colores" element={<ColorManager />} />
      </Routes>
    </Router>
  );
}

export default App;