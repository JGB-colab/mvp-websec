import React from "react";
import glossario from "../data/glossario.json";

export default function Glossario() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-2">Glossário de Segurança Digital</h2>
      <dl className="space-y-2">
        {glossario.map((item, index) => (
          <div key={index}>
            <dt className="font-semibold">{item.termo}</dt>
            <dd className="ml-4 text-sm">{item.significado}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}