import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "../src/componentes/Menu.js";
import Registro from "../src/componentes/Registro.js";
import Home from "../src/componentes/Home.js";
import Consulta from "./componentes/Consulta.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/consulta" element={<Consulta />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
