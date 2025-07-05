import React from "react";
import DetectorDeGolpes from "./components/DetectorDeGolpes";
import AlertasRecentes from "./components/AlertasRecentes";
import MiniCursos from "./components/MiniCursos";
import Glossario from "./components/Glossario";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="bg-gray-100 min-h-screen font-sans text-gray-800">
      <Header />
      <main className="p-4 max-w-4xl mx-auto space-y-6">
        <DetectorDeGolpes />
        <AlertasRecentes />
        <MiniCursos />
        <Glossario />
      </main>
    </div>
  );
}