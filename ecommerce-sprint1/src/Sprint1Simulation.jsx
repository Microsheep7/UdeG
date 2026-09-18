// Sprint1Simulation.jsx
// Punto de entrada de la simulación. Úsalo como componente independiente
// (impórtalo en tu App.js: import Sprint1Simulation from "./sprint1-simulacion/src/Sprint1Simulation";)
// o copia estos archivos dentro de tu carpeta src/ existente.
//
// IMPORTANTE: la navegación catálogo -> detalle que ves aquí es una
// simulación local con useState, NO la implementación real de T-09
// (Implementar navegación catálogo → detalle), que sigue "No iniciado"
// según el Sprint Backlog.

import React, { useState } from "react";
import SprintStatusBoard from "./components/SprintStatusBoard";
import Catalog from "./components/Catalog";
import ProductDetail from "./components/ProductDetail";
import "./Sprint1Simulation.css";

function Sprint1Simulation() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="sprint1-simulation">
      <SprintStatusBoard />
      {selectedProduct ? (
        <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />
      ) : (
        <Catalog onSelectProduct={setSelectedProduct} />
      )}
    </div>
  );
}

export default Sprint1Simulation;
