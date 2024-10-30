import React from 'react';

function EmployeeRow({ nombre, rol, departmento, avatar }) {
  return (
    <div className="employee-row">
      <img src={avatar} alt={`${nombre}'s avatar`} className="employee-avatar" />
      <div className="employee-details">
        <h3>{nombre}</h3>
        <p className="employee-role">{rol}</p>
        <p className="employee-department">{departmento}</p>
      </div>
    </div>
  );
}

export default EmployeeRow;