// Sprint1Simulation.jsx
// Punto de entrada del módulo. Combina el tablero de seguimiento, el
// catálogo de productos y la vista de detalle con navegación entre ambos.

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
