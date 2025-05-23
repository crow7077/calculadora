import { useState } from "react";

export default function RegraDeTres() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    const aNum = parseFloat(a);
    const bNum = parseFloat(b);
    const cNum = parseFloat(c);

    if (isNaN(aNum) || isNaN(bNum) || isNaN(cNum)) {
      setResultado("Preencha todos os campos com números");
      return;
    }

    if (aNum === 0) {
      setResultado("Erro: A não pode ser zero");
      return;
    }

    setResultado((bNum * cNum) / aNum);
  };

  return (
    <div className="card">
      <h2>Regra de 3</h2>
      <input type="number" className="input" value={a} onChange={(e) => setA(e.target.value)} placeholder="A" />
      <input type="number" className="input" value={b} onChange={(e) => setB(e.target.value)} placeholder="B" />
      <input type="number" className="input" value={c} onChange={(e) => setC(e.target.value)} placeholder="C" />
      <button onClick={calcular}>Calcular</button>
      {resultado !== null && (
        <p className="resultado">Resultado: {resultado}</p>
      )}
    </div>
  );
}
