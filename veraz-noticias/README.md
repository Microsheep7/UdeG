# Veraz Noticias — Simulación del Sprint 2

Simulación funcional del incremento planeado en el Sprint 2 del Product Backlog,
sobre la base del incremento del Sprint 1.

## Historias de usuario cubiertas
- **HU-01** Consulta de noticias (Sprint 1)
- **HU-02** Publicación de noticias (Sprint 1)
- **HU-03** Calidad periodística: checklist de criterios de verificación y redacción,
  bloqueo de publicación si falta algún criterio, indicador de "Verificada" para el lector.
- **HU-04** Fuentes de información: registro de una o varias fuentes al publicar,
  visibles en la vista de la noticia.
- **HU-05** Edición de noticias: edición de una noticia ya publicada con
  confirmación antes de guardar los cambios.

## Cómo probarlo
Abre `index.html` en el navegador (no requiere instalación ni servidor).
Usa el botón **Periodista** para publicar/editar y **Lector** para consultar.
Los datos se guardan en `localStorage`, por lo que persisten al recargar la página.
