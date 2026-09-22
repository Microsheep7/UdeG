// SprintStatusBoard.jsx
// Traducción visual del tablero del sprint y del log de impedimentos
// del documento Ejecucion_Sprint_1 (estado final, Día 15).

import React from "react";
import "./SprintStatusBoard.css";

const columns = [
  { title: "TO DO", items: ["T-12", "T-13"] },
  { title: "IN PROGRESS", items: ["T-10 (50%)", "T-11 (40%)"] },
  {
    title: "DONE",
    items: ["T-01", "T-02", "T-03", "T-04", "T-05", "T-06", "T-07", "T-08", "T-09"],
  },
  { title: "BLOQUEADO", items: ["Ninguna (resuelta)"] },
];

function SprintStatusBoard() {
  return (
    <div className="board">
      <h2 className="board__title">Tablero del Sprint 1 — Estado final (Día 15)</h2>

      <div className="board__columns">
        {columns.map((col) => (
          <div
            key={col.title}
            className={`board__column board__column--${col.title.toLowerCase().replace(" ", "-")}`}
          >
            <h3>{col.title}</h3>
            <ul>
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="board__impediment board__impediment--resolved">
        <strong>IMP-001 (Resuelto):</strong> el backend entregó el endpoint{" "}
        <code>GET /products</code> el viernes 09:00, según lo previsto. Bloqueó T-03 por 2
        días; el equipo avanzó en HU-02 en paralelo mientras se resolvía.
      </div>
    </div>
  );
}

export default SprintStatusBoard;
