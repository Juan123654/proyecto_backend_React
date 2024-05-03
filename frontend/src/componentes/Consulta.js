import React from "react";
import { useState } from "react";
import "../css/Consulta.css";
import axios from "axios";

function Consulta() {
  const [registros, setRegistros] = useState([]);

  const getRegistros = async (event) => {
    event.preventDefault(); // Detener el envío del formulario predeterminado
    try {
      const response = await axios.get("/consulta_actividades");
      setRegistros(response.data);
    } catch (error) {
      console.error("Error al realizar la consulta: ", error);
    }
  };

  return (
    <div className="contenedor-consulta">
      <h1 className="titulo-consulta">Listar Registros</h1>
      <form
        className="consulta-registros"
        onSubmit={getRegistros} // Usar onSubmit en lugar de onClick para el formulario
      >
        <div className="busqueda-actividades">
          <button className="boton-consulta" type="submit" id="2">
            Consulta
          </button>
          <h2>Registros</h2>
          <div className="table-contenedor">
            <table className="table-registros">
              <thead className="table-head">
                <tr>
                  <th>ID</th>
                  <th>Usuario</th>
                  <th>Actividad</th>
                  <th>Fecha</th>
                  <th>Hora_I</th>
                  <th>Hora_F</th>
                </tr>
              </thead>
              <tbody className="table-body">
                {registros.map((registro) => (
                  <tr key={registro.id}>
                    <td>{registro.id}</td>
                    <td>{registro.usuario}</td>
                    <td>{registro.actividad}</td>
                    <td>{registro.fecha}</td>
                    <td>{registro.horai}</td>
                    <td>{registro.horaf}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Consulta;