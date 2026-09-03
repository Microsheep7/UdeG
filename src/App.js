import React, { useState } from 'react';
import { ChevronRight, Search, Menu, X } from 'lucide-react';

// ============================================================================
// DATOS DE PRUEBA - Noticias iniciales
// ============================================================================
const datosNoticias = [
  {
    id: 1,
    titulo: "Nuevas políticas de accesibilidad en Guadalajara benefician a personas con discapacidad",
    autor: "María González",
    fecha: "2026-09-04",
    categoria: "Sociedad",
    imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    resumen: "El municipio implementa nuevas regulaciones para garantizar acceso equitativo a espacios públicos y servicios.",
    contenido: "El municipio de Guadalajara ha anunciado la implementación de nuevas políticas de accesibilidad que beneficiarán a miles de personas con discapacidad. Las regulaciones incluyen la mejora de infraestructura en espacios públicos, la capacitación de personal municipal y la creación de canales de comunicación accesibles. Estas medidas responden a las demandas de organizaciones locales y buscan garantizar un acceso equitativo a los servicios municipales.",
    fuentes: [
      "Comunicado oficial del Municipio de Guadalajara",
      "Entrevista con directores de organizaciones de derechos de discapacidad",
      "Datos del Censo de Población y Vivienda 2020"
    ],
    contenidoCompleto: "El municipio de Guadalajara ha anunciado la implementación de nuevas políticas de accesibilidad que beneficiarán a miles de personas con discapacidad en la región. Las regulaciones incluyen la mejora de infraestructura en espacios públicos, la capacitación de personal municipal en atención a personas con diferentes tipos de discapacidad, y la creación de canales de comunicación accesibles para consultas y denuncias.\n\nEstas medidas responden a las demandas de organizaciones locales y buscan garantizar un acceso equitativo a los servicios municipales. Se espera que la implementación comience en las próximas semanas con evaluaciones de infraestructura en instituciones clave."
  },
  {
    id: 2,
    titulo: "Iniciativa comunitaria busca revitalizar parques históricos de la ciudad",
    autor: "Carlos Rodríguez",
    fecha: "2026-09-03",
    categoria: "Medio Ambiente",
    imagen: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=400&fit=crop",
    resumen: "Vecinos y organizaciones civiles se unen para restaurar y mantener espacios verdes tradicionales de Guadalajara.",
    contenido: "Una coalición de vecinos, organizaciones civiles y comerciantes ha lanzado una iniciativa para revitalizar los parques históricos de Guadalajara. El proyecto busca restaurar áreas verdes, mejorar la seguridad y crear espacios de convivencia comunitaria. Los primeros trabajos se concentran en tres parques principales de la ciudad.",
    fuentes: [
      "Documentos de la iniciativa comunitaria",
      "Entrevistas con líderes comunitarios",
      "Registros de mantenimiento del H. Ayuntamiento"
    ],
    contenidoCompleto: "Una coalición de vecinos, organizaciones civiles y comerciantes ha lanzado una iniciativa para revitalizar los parques históricos de Guadalajara. El proyecto busca restaurar áreas verdes que han sido descuidadas, mejorar la seguridad e iluminación, y crear espacios de convivencia comunitaria que fortalezcan el sentido de pertenencia.\n\nLos primeros trabajos se concentran en tres parques principales de la ciudad, con un cronograma que se extenderá a lo largo de los próximos meses."
  },
  {
    id: 3,
    titulo: "Universidad de Guadalajara lanza programa de becas para estudiantes de bajos recursos",
    autor: "Jessica Martínez",
    fecha: "2026-09-02",
    categoria: "Educación",
    imagen: "https://images.unsplash.com/photo-1523050854058-7baa50165ba1?w=800&h=400&fit=crop",
    resumen: "El nuevo programa beneficiará a 500 estudiantes de pregrado en su primer año de implementación.",
    contenido: "La Universidad de Guadalajara ha anunciado el lanzamiento de un nuevo programa de becas destinado a estudiantes de bajos recursos. El programa beneficiará a 500 estudiantes de pregrado en su primer año de implementación, con posibilidad de expansión según los resultados.",
    fuentes: [
      "Comunicado oficial de la UDG",
      "Datos de pobreza del CONEVAL",
      "Declaraciones del rector de la Universidad"
    ],
    contenidoCompleto: "La Universidad de Guadalajara ha anunciado el lanzamiento de un nuevo programa de becas destinado a estudiantes de bajos recursos. El programa beneficiará a 500 estudiantes de pregrado en su primer año de implementación, con posibilidad de expansión según los resultados. Las becas cubrirán matrícula, materiales de estudio y un apoyo mensual para gastos de transporte y alimentación."
  }
];

// ============================================================================
// COMPONENTE: ENCABEZADO
// ============================================================================
function Header({ onMenuClick }) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">VN</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Veraz Noticias</h1>
            <p className="text-xs text-gray-500">Información verificada, contexto confiable</p>
          </div>
        </div>
        <button 
          onClick={onMenuClick}
          className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu size={24} />
        </button>
      </div>
    </header>
  );
}

// ============================================================================
// COMPONENTE: NAVEGACIÓN
// ============================================================================
function Navegacion({ esAbierto, onCerrar }) {
  return (
    <>
      {/* Overlay para móvil */}
      {esAbierto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
          onClick={onCerrar}
        />
      )}
      
      {/* Menú */}
      <nav className={`
        fixed md:relative top-0 left-0 h-full md:h-auto
        bg-white md:bg-transparent
        w-64 md:w-full
        z-40 md:z-auto
        transform md:transform-none transition-transform duration-300
        ${esAbierto ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="md:hidden flex justify-between items-center p-4 border-b">
          <span className="font-bold">Menú</span>
          <button onClick={onCerrar}>
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4 md:p-0 md:max-w-6xl md:mx-auto md:flex md:items-center md:gap-8">
          <a href="#inicio" className="block md:inline-block py-2 md:py-0 text-gray-700 hover:text-blue-900 font-medium">
            Inicio
          </a>
          <a href="#todas" className="block md:inline-block py-2 md:py-0 text-gray-700 hover:text-blue-900 font-medium">
            Todas las noticias
          </a>
          <div className="block md:inline-block py-2 md:py-0">
            <select className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-lg text-gray-700">
              <option value="">Categorías</option>
              <option value="sociedad">Sociedad</option>
              <option value="educacion">Educación</option>
              <option value="medio-ambiente">Medio Ambiente</option>
            </select>
          </div>
        </div>
      </nav>
    </>
  );
}

// ============================================================================
// COMPONENTE: TARJETA DE NOTICIA
// ============================================================================
function TarjetaNoticia({ noticia, onClick }) {
  return (
    <article 
      onClick={onClick}
      className="bg-white border border-gray-200 hover:shadow-lg transition-shadow cursor-pointer overflow-hidden"
    >
      <div className="flex flex-col md:flex-row">
        <img 
          src={noticia.imagen} 
          alt={noticia.titulo}
          className="w-full md:w-48 h-40 md:h-auto object-cover"
        />
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold text-blue-900 bg-blue-100 px-2 py-1 rounded">
                {noticia.categoria}
              </span>
              <span className="text-xs text-gray-500">
                {new Date(noticia.fecha).toLocaleDateString('es-MX')}
              </span>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
              {noticia.titulo}
            </h3>
            <p className="text-gray-600 text-sm">
              {noticia.resumen}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="text-xs text-gray-500">Por {noticia.autor}</span>
            <ChevronRight size={18} className="text-blue-900" />
          </div>
        </div>
      </div>
    </article>
  );
}

// ============================================================================
// COMPONENTE: VISTA DE NOTICIA INDIVIDUAL
// ============================================================================
function VistaNoticia({ noticia, onVolver }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Botón de regreso */}
        <button 
          onClick={onVolver}
          className="flex items-center gap-2 text-blue-900 font-medium mb-6 hover:underline"
        >
          <ChevronRight size={20} className="rotate-180" />
          Volver
        </button>

        {/* Encabezado de la noticia */}
        <div className="mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-blue-900 bg-blue-100 px-3 py-1 rounded">
              {noticia.categoria}
            </span>
            <span className="text-sm text-gray-600">
              {new Date(noticia.fecha).toLocaleDateString('es-MX', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {noticia.titulo}
          </h1>
          <p className="text-lg text-gray-600">Por {noticia.autor}</p>
        </div>

        {/* Imagen principal */}
        <img 
          src={noticia.imagen} 
          alt={noticia.titulo}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        {/* Contenido principal */}
        <div className="bg-white p-6 rounded-lg mb-8 border border-gray-200">
          <div className="prose prose-sm max-w-none">
            {noticia.contenidoCompleto.split('\n\n').map((parrafo, idx) => (
              <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                {parrafo}
              </p>
            ))}
          </div>
        </div>

        {/* Fuentes */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-gray-900 mb-3">Fuentes consultadas</h3>
          <ul className="space-y-2">
            {noticia.fuentes.map((fuente, idx) => (
              <li key={idx} className="text-gray-700 text-sm flex gap-2">
                <span className="text-blue-900">•</span>
                {fuente}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// COMPONENTE: PÁGINA PRINCIPAL
// ============================================================================
function PaginaPrincipal({ onSeleccionarNoticia }) {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Información verificada para tu comunidad
          </h2>
          <p className="text-lg text-blue-100 mb-6">
            Noticias locales de Guadalajara con contexto y fuentes confiables
          </p>
          
          {/* Barra de búsqueda */}
          <div className="flex gap-2">
            <div className="flex-1 flex items-center bg-white rounded-lg px-4">
              <Search size={20} className="text-gray-500" />
              <input 
                type="text" 
                placeholder="Buscar noticias..."
                className="w-full py-3 px-2 outline-none text-gray-900"
              />
            </div>
            <button className="bg-white text-blue-900 font-medium px-6 py-3 rounded-lg hover:bg-gray-100">
              Buscar
            </button>
          </div>
        </div>
      </section>

      {/* Sección de noticias recientes */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Noticias recientes</h2>
          <p className="text-gray-600">Últimas historias verificadas de Guadalajara</p>
        </div>

        <div className="space-y-6">
          {datosNoticias.map(noticia => (
            <TarjetaNoticia 
              key={noticia.id}
              noticia={noticia}
              onClick={() => onSeleccionarNoticia(noticia.id)}
            />
          ))}
        </div>

        {/* Botón para cargar más */}
        <div className="flex justify-center mt-8">
          <button className="px-6 py-3 border-2 border-blue-900 text-blue-900 font-bold rounded-lg hover:bg-blue-900 hover:text-white transition-colors">
            Cargar más noticias
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-3">Sobre nosotros</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Acerca de Veraz</a></li>
                <li><a href="#" className="hover:text-white">Misión</a></li>
                <li><a href="#" className="hover:text-white">Equipo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Contenido</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Todas las noticias</a></li>
                <li><a href="#" className="hover:text-white">Categorías</a></li>
                <li><a href="#" className="hover:text-white">Archivo</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Términos</a></li>
                <li><a href="#" className="hover:text-white">Privacidad</a></li>
                <li><a href="#" className="hover:text-white">Contacto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Síguenos</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Facebook</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-center text-gray-400 text-sm">
              © 2026 Veraz Noticias. Información verificada para Guadalajara.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ============================================================================
// COMPONENTE PRINCIPAL: APP
// ============================================================================
export default function App() {
  const [paginaActual, setPaginaActual] = useState('inicio');
  const [noticiaSeleccionada, setNoticiaSeleccionada] = useState(null);
  const [menuAbierto, setMenuAbierto] = useState(false);

  const handleSeleccionarNoticia = (id) => {
    setNoticiaSeleccionada(id);
    setPaginaActual('detalle');
    setMenuAbierto(false);
  };

  const handleVolver = () => {
    setPaginaActual('inicio');
    setNoticiaSeleccionada(null);
  };

  const noticia = datosNoticias.find(n => n.id === noticiaSeleccionada);

  return (
    <div className="min-h-screen bg-white">
      <Header onMenuClick={() => setMenuAbierto(!menuAbierto)} />
      <Navegacion esAbierto={menuAbierto} onCerrar={() => setMenuAbierto(false)} />
      
      {paginaActual === 'inicio' && (
        <PaginaPrincipal onSeleccionarNoticia={handleSeleccionarNoticia} />
      )}
      
      {paginaActual === 'detalle' && noticia && (
        <VistaNoticia noticia={noticia} onVolver={handleVolver} />
      )}
    </div>
  );
}