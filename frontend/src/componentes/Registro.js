import React from "react";
import "../css/Registro.css";

function Registro() {
  const clic = () => {
    alert("Registro Prueba");
  };
  return (
    <div className="contenedor-registro">
      <h1 className="titulo-registro">Registro Actividades</h1>
      <div>
        <form className="formulario-registro">
          <input
            className="input-registro"
            type="text"
            placeholder="Nombre Usuario"
          ></input>
          <input
            className="input-registro"
            type="text"
            placeholder="Actividad"
          ></input>
          <input
            className="input-registro"
            type="date"
            placeholder="Fecha"
          ></input>
          <input
            className="input-registro"
            type="text"
            placeholder="Hora Inicio"
          ></input>
          <input
            className="input-registro"
            type="text"
            placeholder="Hora Final"
          ></input>
          <button className="boton-registro" type="submit" onClick={clic}>
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
export default Registro;
