// SprintStatusBoard.jsx
// Traducción visual del "Tablero del sprint" y el "Tablero de impedimentos"
// del documento Ejecucion_Sprint_1.docx (estado al Día 5 / Jueves).

import React from "react";
import "./SprintStatusBoard.css";

const columns = [
  { title: "TO DO", items: ["T-04", "T-08", "T-09", "T-10", "T-11", "T-12", "T-13"] },
  { title: "IN PROGRESS", items: ["T-05 (70%)", "T-07 (60%)"] },
  { title: "DONE", items: ["T-01", "T-02", "T-06"] },
  { title: "BLOQUEADO", items: ["T-03 (falta backend)"] },
];

function SprintStatusBoard() {
  return (
    <div className="board">
      <h2 className="board__title">Tablero del Sprint 1 — Día 5 (Jueves)</h2>

      <div className="board__columns">
        {columns.map((col) => (
          <div key={col.title} className={`board__column board__column--${col.title.toLowerCase().replace(" ", "-")}`}>
            <h3>{col.title}</h3>
            <ul>
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="board__impediment">
        <strong>IMP-001 (Abierto):</strong> el backend no ha entregado el endpoint{" "}
        <code>GET /products</code>. Bloquea T-03 (integración del catálogo). SM confirmó
        disponibilidad en Staging el viernes 09:00; mientras tanto el equipo avanza con
        HU-02 y QA en paralelo.
      </div>
    </div>
  );
}

export default SprintStatusBoard;
