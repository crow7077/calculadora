import { useState } from "react";
import RegraDeTres from "./components/RegraDeTres";
import OperacoesBasicas from "./components/OperacoesBasicas";
import "./Calculadora.css";

export default function Calculadora() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  return (
    <div className={temaEscuro ? "container dark" : "container light"}>
      <h1>
        Calculadora
        <br /> do meu Amor
      </h1>
      <button
        onClick={() => setTemaEscuro(!temaEscuro)}
        className="toggle-theme"
      >
        Alternar para tema {temaEscuro ? "claro" : "escuro"}
      </button>
      <RegraDeTres />
      <OperacoesBasicas />
    </div>
  );
}
