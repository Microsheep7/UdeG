// ProductCard.jsx
// T-02: Diseñar y desarrollar tarjetas de productos (HU-01) — Completado

import React from "react";
import "./ProductCard.css";

function ProductCard({ product, onSelect }) {
  return (
    <div className="product-card" onClick={() => onSelect(product)}>
      <img className="product-card__image" src={product.images[0]} alt={product.name} />
      <div className="product-card__body">
        <h3 className="product-card__name">{product.name}</h3>
        <p className="product-card__price">${product.price.toFixed(2)}</p>
        {!product.available && <span className="product-card__unavailable">Agotado</span>}
      </div>
    </div>
  );
}

export default ProductCard;
