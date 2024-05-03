import React from "react";
import "../css/Consulta.css";

function Consulta() {
  return (
    <div className="contenedor-consulta">
      <h1 className="titulo-consulta">Listar Registros</h1>
      <form className="consulta-registros" action="/consulta_actividades" method="get">
      <div className="busqueda-actividades">
        <input
          className="input-consulta"
          type="text"
          placeholder="Nombre Usuario"
        ></input>
        <button className="boton-consulta" type="submit" >
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
              <tr><td></td></tr>
              <tr></tr>
            </tbody>
          </table>
        </div>
      </div>
      </form>
    </div>
  );
}

export default Consulta;
