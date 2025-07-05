import React, { useState } from "react";

export default function DetectorDeGolpes() {
  const [input, setInput] = useState("");
  const [resposta, setResposta] = useState("");

  const verificarGolpe = () => {
    const termosSuspeitos = ["pix", "urgente", "senha", "link", "ganhe", "prêmio"];
    const suspeito = termosSuspeitos.some((termo) => input.toLowerCase().includes(termo));

    setResposta(
      suspeito
        ? "⚠️ Isso pode ser um golpe! Evite clicar em links ou fornecer dados pessoais."
        : "✅ Não identificamos risco claro, mas sempre tenha cautela."
    );
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-2">Detector de Golpes</h2>
      <textarea
        className="w-full border rounded-md p-2"
        rows="4"
        placeholder="Cole aqui uma mensagem suspeita..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={verificarGolpe}
        className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
      >
        Verificar
      </button>
      {resposta && <p className="mt-3 font-medium">{resposta}</p>}
    </div>
  );
}