// mockProducts.js
// Datos de productos usados por el catálogo y el detalle.
// T-03 (Integrar y mostrar productos disponibles) ya fue completado por el
// equipo de backend con el endpoint GET /products; aquí se mantiene una
// fuente de datos local para que el módulo funcione de forma independiente.

const mockProducts = [
  {
    id: 1,
    name: "Camiseta Básica",
    price: 249.0,
    images: [
      "https://picsum.photos/seed/producto1a/500/500",
      "https://picsum.photos/seed/producto1b/500/500",
    ],
    description: "Camiseta 100% algodón, corte regular, disponible en varios colores.",
    available: true,
  },
  {
    id: 2,
    name: "Sudadera Oversize",
    price: 599.0,
    images: [
      "https://picsum.photos/seed/producto2a/500/500",
      "https://picsum.photos/seed/producto2b/500/500",
    ],
    description: "Sudadera unisex de algodón perchado, silueta oversize.",
    available: true,
  },
  {
    id: 3,
    name: "Gorra Clásica",
    price: 189.0,
    images: ["https://picsum.photos/seed/producto3a/500/500"],
    description: "Gorra ajustable de seis paneles con bordado frontal.",
    available: false,
  },
  {
    id: 4,
    name: "Mochila Urbana",
    price: 849.0,
    images: [
      "https://picsum.photos/seed/producto4a/500/500",
      "https://picsum.photos/seed/producto4b/500/500",
    ],
    description: "Mochila resistente al agua con compartimento acolchado para laptop.",
    available: true,
  },
  {
    id: 5,
    name: "Tenis Casuales",
    price: 1099.0,
    images: ["https://picsum.photos/seed/producto5a/500/500"],
    description: "Tenis ligeros de uso diario con suela antiderrapante.",
    available: true,
  },
  {
    id: 6,
    name: "Playera Estampada",
    price: 299.0,
    images: [
      "https://picsum.photos/seed/producto6a/500/500",
      "https://picsum.photos/seed/producto6b/500/500",
    ],
    description: "Playera de algodón con estampado exclusivo de la temporada.",
    available: true,
  },
];

export default mockProducts;
