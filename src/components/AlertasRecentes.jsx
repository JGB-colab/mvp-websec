import React from "react";
import alertas from "../data/alertas.json";

export default function AlertasRecentes() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-2">Alertas Recentes</h2>
      <ul className="list-disc list-inside space-y-1">
        {alertas.map((alerta, index) => (
          <li key={index}>
            <strong>{alerta.titulo}:</strong> {alerta.descricao}
          </li>
        ))}
      </ul>
    </div>
  );
}