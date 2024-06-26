import React from "react";
import { Link } from "react-router-dom";
import "../css/Menu.css";
function Menu() {
  return (
    <div className="menu">
      <div>
        <ul>
          <li>
            <Link className="item" to="/home">
              Home
            </Link>
          </li>
          <li>
            <Link className="item" to="/registro">
              Registro Actividad
            </Link>
          </li>
          <li>
            <Link className="item" to="/consulta">
              Consultar Registros
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Menu;
