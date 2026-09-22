// Catalog.jsx
// T-01: Crear estructura inicial pantalla catálogo (HU-01) — Completado
// T-02: Tarjetas de producto — Completado
// T-03: Integrar y mostrar productos disponibles — Completado
// T-04: Implementar selección de producto — Completado

import React from "react";
import ProductCard from "./ProductCard";
import mockProducts from "../data/mockProducts";
import "./Catalog.css";

function Catalog({ onSelectProduct }) {
  return (
    <div className="catalog">
      <h2 className="catalog__title">Catálogo de productos</h2>
      <div className="catalog__grid">
        {mockProducts.map((product) => (
          <ProductCard key={product.id} product={product} onSelect={onSelectProduct} />
        ))}
      </div>
    </div>
  );
}

export default Catalog;
