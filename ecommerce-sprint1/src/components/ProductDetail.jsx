// ProductDetail.jsx
// T-06: Crear estructura pantalla de detalle (HU-02) — Completado
// T-07: Diseñar sección de información (HU-02) — Completado
// T-08: Mostrar nombre, precio, descripción, imágenes (HU-02) — Completado
// T-09: Implementar navegación catálogo → detalle (HU-02) — Completado

import React, { useState } from "react";
import "./ProductDetail.css";

function ProductDetail({ product, onBack }) {
  const [activeImage, setActiveImage] = useState(0);

  if (!product) return null;

  return (
    <div className="detail">
      <button className="detail__back" onClick={onBack}>
        ← Volver al catálogo
      </button>

      <div className="detail__content">
        <div className="detail__gallery">
          <img
            className="detail__image"
            src={product.images[activeImage]}
            alt={product.name}
          />
          {product.images.length > 1 && (
            <div className="detail__thumbnails">
              {product.images.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className={`detail__thumbnail ${index === activeImage ? "detail__thumbnail--active" : ""}`}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="detail__info">
          <h2 className="detail__name">{product.name}</h2>
          <p className="detail__price">${product.price.toFixed(2)}</p>
          <span
            className={`detail__availability ${
              product.available ? "detail__availability--in-stock" : "detail__availability--out"
            }`}
          >
            {product.available ? "Disponible" : "Agotado"}
          </span>
          <p className="detail__description">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
