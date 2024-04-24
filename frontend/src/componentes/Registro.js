import React from "react";
import "../css/Registro.css";

function Registro() {
  return (
    <div className="contenedor-registro">
      <h1 className="titulo-registro">Registro Actividades</h1>
      <div>
        <form className="formulario-registro" action="/registro_actividades" method="post">
          <input
            className="input-registro"
            type="text"
            placeholder="Nombre Usuario"
            name="usuario"
          ></input>
          <input
            className="input-registro"
            type="text"
            placeholder="Actividad"
            name="actividad"
          ></input>
          <input
            className="input-registro"
            type="date"
            placeholder="Fecha"
            name="fecha"
          ></input>
          <input
            className="input-registro"
            type="text"
            placeholder="Hora Inicio"
            name="horai"
          ></input>
          <input
            className="input-registro"
            type="text"
            placeholder="Hora Final"
            name="horaf"
          ></input>
          <button className="boton-registro" type="submit">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
export default Registro;
