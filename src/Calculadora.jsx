import { useState } from "react";
import OperacoesBasicas from "./components/OperacoesBasicas";
import RegraDeTres from "./components/RegraDeTres";
import "./Calculadora.css";

export default function Calculadora() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  return (
    <div className={temaEscuro ? "container dark" : "container light"}>
      <h1>Calculadora 
       <br /> do meu Amor</h1>
      <button
        onClick={() => setTemaEscuro(!temaEscuro)}
        className="toggle-theme"
      >
        Alternar para tema {temaEscuro ? "claro" : "escuro"}
      </button>
      <OperacoesBasicas />
      <RegraDeTres />
    </div>
  );
}
