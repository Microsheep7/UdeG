// Catalog.jsx
// T-01: Crear estructura inicial pantalla catálogo (HU-01) — Completado
//   Grid: 2 columnas en mobile, 3 en tablet (criterio definido Día 2).
// T-02: Tarjetas de producto — Completado (ver ProductCard.jsx)
// T-03: Integrar y mostrar productos disponibles — Bloqueado (IMP-001)
//   -> Por eso aquí se usa mockProducts en vez de un fetch real.
// T-04: Implementar selección de producto — No iniciado
//   -> onSelect está simulado (navegación real es T-09, también pendiente).

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
