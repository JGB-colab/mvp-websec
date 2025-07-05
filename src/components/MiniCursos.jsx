import React from "react";

export default function MiniCursos() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-bold mb-2">Mini Cursos</h2>
      <p className="mb-2">Aprenda em poucos minutos como se proteger:</p>
      <ul className="space-y-2">
        <li>
          <a
            href="https://www.youtube.com/watch?v=F0Q2DqG1jVQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Como identificar links suspeitos
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/watch?v=9P0rrDVBXQI"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            Proteja seu celular contra golpes
          </a>
        </li>
      </ul>
    </div>
  );
}