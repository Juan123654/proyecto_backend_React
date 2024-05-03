import React, { useState } from "react";
import "../css/Registro.css";
import axios from "axios";

function Registro() {
  const [usuario, setUsuario] = useState("");
  const [actividad, setActividad] = useState("");
  const [fecha, setFecha] = useState("");
  const [horai, setHorai] = useState("");
  const [horaf, setHoraf] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
      await axios.post("/registro_actividades", {
        usuario,
        actividad,
        fecha,
        horai,
        horaf,
  }).then(()=>{
    alert("Empleado regitrado");
  })
}

  return (
    <div className="contenedor-registro">
      <h1 className="titulo-registro">Registro Actividades</h1>
      <div>
        <form className="formulario-registro" onSubmit={handleSubmit}>
          <input
            className="input-registro"
            type="text"
            placeholder="Nombre Usuario"
            value={usuario}
            onChange={(event)=>{
              setUsuario(event.target.value);
            }}
            name="usuario"
          ></input>
          <input
            className="input-registro"
            type="text"
            placeholder="Actividad"
            value={actividad}
            onChange={(event)=>{
              setActividad(event.target.value);
            }}
            name="actividad"
          ></input>
          <input
            className="input-registro"
            type="date"
            placeholder="Fecha"
            value={fecha}
            onChange={(event)=>{
              setFecha(event.target.value);
            }}
            name="fecha"
          ></input>
          <input
            className="input-registro"
            type="text"
            placeholder="Hora Inicio"
            value={horai}
            onChange={(event)=>{
              setHorai(event.target.value);
            }}
            name="horai"
          ></input>
          <input
            className="input-registro"
            type="text"
            placeholder="Hora Final"
            value={horaf}
            onChange={(event)=>{
              setHoraf(event.target.value);
            }}
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