# Simulación — Sprint 1 (Día 5 / Jueves)

Prototipo funcional del avance real reportado en `Ejecucion_Sprint_1.docx`.
No es la implementación final: es una simulación en React para visualizar
el catálogo y la vista de detalle con el estado exacto de cada tarea.

## Cómo se relaciona con el Sprint Backlog

| Tarea | Estado real | Qué hace la simulación |
|---|---|---|
| T-01 Estructura catálogo | ✅ Completado | Implementado (`Catalog.jsx`) |
| T-02 Tarjetas de producto | ✅ Completado | Implementado (`ProductCard.jsx`) |
| T-03 Integrar productos (API) | 🔴 Bloqueado (IMP-001) | Usa datos mock (`mockProducts.js`) en vez de `fetch` |
| T-04 Selección de producto | ⬜ No iniciado | Simulado con `useState`, no es la solución final |
| T-06 Estructura pantalla detalle | ✅ Completado | Implementado (`ProductDetail.jsx`) |
| T-07 Sección de información | 🟡 En progreso (60%) | Layout visible, marcado con badge "en progreso" |
| T-08 Mostrar nombre/precio/descripción/imágenes | ⬜ No iniciado | Solo imagen única + datos mock; galería marcada como pendiente |
| T-09 Navegación catálogo → detalle | ⬜ No iniciado | Simulada localmente (no es router real) |

También incluye `SprintStatusBoard.jsx`, una versión visual del tablero del
sprint y del impedimento IMP-001, tomada directamente del documento.

## Cómo integrarlo a tu repositorio (Microsheep7/UdeG)

1. Copia la carpeta `src/` de este paquete dentro de una nueva carpeta en tu
   repo, por ejemplo `src/sprint1-simulacion/`.
2. En tu `src/App.js` actual, impórtalo y renderízalo:

   ```jsx
   import Sprint1Simulation from "./sprint1-simulacion/src/Sprint1Simulation";

   function App() {
     return <Sprint1Simulation />;
   }

   export default App;
   ```
3. Ejecuta `npm start` para verlo en `http://localhost:3000`.
4. Haz commit y push a tu repositorio como de costumbre.

## Siguientes pasos reales (no cubiertos aquí)

- Resolver IMP-001 y reemplazar `mockProducts.js` por un `fetch`/`axios` real
  a `GET /products` (T-03).
- Completar T-07 y T-08 con el diseño final de la sección de información.
- Implementar T-09 con React Router (o la librería que uses) en vez de la
  navegación simulada con `useState`.
