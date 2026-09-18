// mockProducts.js
// Datos de prueba (mock) usados MIENTRAS el backend entrega el endpoint
// GET /products (ver IMP-001 en el Log de Impedimentos, T-03: Bloqueado).
// Cuando el endpoint esté disponible en Staging, este archivo se reemplaza
// por una llamada real a la API (fetch/axios) en Catalog.jsx.

const mockProducts = [
  {
    id: 1,
    name: "Camiseta Básica",
    price: 249.0,
    image: "https://picsum.photos/seed/producto1/400/400",
    description: "Camiseta 100% algodón, corte regular, disponible en varios colores.",
  },
  {
    id: 2,
    name: "Sudadera Oversize",
    price: 599.0,
    image: "https://picsum.photos/seed/producto2/400/400",
    description: "Sudadera unisex de algodón perchado, silueta oversize.",
  },
  {
    id: 3,
    name: "Gorra Clásica",
    price: 189.0,
    image: "https://picsum.photos/seed/producto3/400/400",
    description: "Gorra ajustable de seis paneles con bordado frontal.",
  },
  {
    id: 4,
    name: "Mochila Urbana",
    price: 849.0,
    image: "https://picsum.photos/seed/producto4/400/400",
    description: "Mochila resistente al agua con compartimento acolchado para laptop.",
  },
  {
    id: 5,
    name: "Tenis Casuales",
    price: 1099.0,
    image: "https://picsum.photos/seed/producto5/400/400",
    description: "Tenis ligeros de uso diario con suela antiderrapante.",
  },
  {
    id: 6,
    name: "Playera Estampada",
    price: 299.0,
    image: "https://picsum.photos/seed/producto6/400/400",
    description: "Playera de algodón con estampado exclusivo de la temporada.",
  },
];

export default mockProducts;
