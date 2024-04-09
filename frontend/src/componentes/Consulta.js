import React from "react";
import "../css/Consulta.css";
function Consulta() {
  const clic = () => {
    alert("Consulta Prueba");
  };
  return (
    <div className="contenedor-consulta">
      <h1 className="titulo-consulta">Consulta</h1>
      <div className="busqueda-actividades">
        <input
          className="input-consulta"
          type="text"
          placeholder="Nombre Usuario"
        ></input>
        <button className="boton-consulta" type="submit" onClick={clic}>
          Consulta
        </button>
        <h1>Otro</h1>
      </div>
    </div>
  );
}


export default Consulta;
