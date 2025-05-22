import { useState } from "react";

export default function OperacoesBasicas() {
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleOperacao = (operador) => {
    const v1 = parseFloat(valor1);
    const v2 = parseFloat(valor2);

    if (isNaN(v1) || isNaN(v2)) {
      setResultado("Preencha ambos os campos com números");
      return;
    }

    let res;
    switch (operador) {
      case "+":
        res = v1 + v2;
        break;
      case "-":
        res = v1 - v2;
        break;
      case "*":
        res = v1 * v2;
        break;
      case "/":
        res = v2 !== 0 ? v1 / v2 : "Erro: divisão por zero";
        break;
      default:
        res = "Operação inválida";
    }
    setResultado(res);
  };

  return (
    <div className="card">
      <h2>Operações Básicas</h2>
      <input
        type="number"
        className="semseta"
        value={valor1}
        onChange={(e) => setValor1(e.target.value)}
        placeholder="Valor 1"
      />
      <input
        type="number"
        className="semseta"
        value={valor2}
        onChange={(e) => setValor2(e.target.value)}
        placeholder="Valor 2"
      />
      <div className="buttons">
        <button onClick={() => handleOperacao("+")}>+</button>
        <button onClick={() => handleOperacao("-")}>−</button>
        <button onClick={() => handleOperacao("*")}>×</button>
        <button onClick={() => handleOperacao("/")}>÷</button>
      </div>
      {resultado !== null && (
        <p className="resultado">Resultado: {resultado}</p>
      )}
    </div>
  );
}
