import React from 'react';
import EmployeeRow from './EmployeeRow';
import './empleados.css';

const employees = [
    { nombre: 'Laya Dueñas', rol: 'CEO', departmento: 'Business', avatar: 'perfil.png' },
    { nombre: 'Astryd Vallés', rol: 'CMO', departmento: 'Marketing', avatar: 'perfil.png' },
    { nombre: 'Shantell Meza', rol: 'CFO', departmento: 'Business', avatar: 'perfil.png' },
    { nombre: 'Sergio Ocampo', rol: 'CTO', departmento: 'Engineering', avatar: 'perfil.png' },
    { nombre: 'Ares Jiménez', rol: 'Art Director', departmento: 'Marketing', avatar: 'perfil.png' },
    { nombre: 'Marta Pérez', rol: 'Frontend Dev', departmento: 'Engineering', avatar: 'perfil.png' }
];

function EmployeeList() {
    return (
        <div className="employee-list">
            {employees.map((employee, index) => (
                <EmployeeRow key={index} {...employee} />
            ))}
        </div>
    );
}

export default EmployeeList;