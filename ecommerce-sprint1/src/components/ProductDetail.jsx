// ProductDetail.jsx
// T-06: Crear estructura pantalla de detalle (HU-02) — Completado
// T-07: Diseñar sección de información (HU-02) — En progreso (60%)
// T-08: Mostrar nombre, precio, descripción, imágenes (HU-02) — No iniciado
//   -> Por eso el nombre y precio SÍ se muestran (vienen del catálogo),
//      pero la descripción/galería completas se marcan como pendientes,
//      igual que reporta el Sprint Backlog.
// T-09: Navegación catálogo → detalle — No iniciado
//   -> El botón "Volver" aquí es una simulación local (useState en App.jsx),
//      no la navegación final (ej. React Router) que contempla esa tarea.

import React from "react";
import "./ProductDetail.css";

function ProductDetail({ product, onBack }) {
  if (!product) return null;

  return (
    <div className="detail">
      <button className="detail__back" onClick={onBack}>
        ← Volver al catálogo
      </button>

      <div className="detail__content">
        <img className="detail__image" src={product.image} alt={product.name} />

        <div className="detail__info">
          <span className="detail__badge">Sección de información — en progreso (60%)</span>
          <h2 className="detail__name">{product.name}</h2>
          <p className="detail__price">${product.price.toFixed(2)}</p>

          <div className="detail__description">
            <p>{product.description}</p>
            <span className="detail__pending">🚧 Galería de imágenes múltiples: pendiente (T-08)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
