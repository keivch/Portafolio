import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaExternalLinkAlt, FaEye, FaTimes } from "react-icons/fa";
import nicelook from "../assets/niceloook.png";
import bomberos from "../assets/bomberos.png";
import afh from "../assets/afh2.png";

// Simulando las imágenes con placeholders coloridos

const proyectos = [
  {
    titulo: "Nicelook",
    imagen: nicelook,
    descripcion:
      "Desarrollo del backend de una aplicación web completa para la gestión integral de la peluquería Stylos (Palmira). Utilizando Python, Django y PostgreSQL, construí una API RESTful robusta para gestionar el calendario de citas, el inventario de productos, la nómina de empleados y los reportes financieros.",
    link: 'https://github.com/juanpalacios20/backend_nicelook.git',
    tecnologias: ['Python', 'Django', 'PostgreSQL', 'API REST']
  },
  {
    titulo: "Afh-metalmecanico",
    imagen: afh,
    descripcion:
      "Diseño de base de datos y desarrollo de API RESTful para la gestión de inventario de herramientas y solicitudes de retiro, incluyendo generación de archivos PDF. Implementación de módulos para creación de cotizaciones, finanzas y reportes financieros.",
    link: 'https://github.com/keivch/Back_Afh.git',
    tecnologias: ['API REST', 'Base de datos', 'PDF', 'Gestión de inventario']
  },
  {
    titulo: "Sistema para bomberos",
    imagen: bomberos,
    descripcion:
      "Participé en el desarrollo de una aplicación para los bomberos de mi ciudad. El sistema registra horas trabajadas por bombero mediante QR o huella digital (se usó Spring Boot como microservicio para el sistema de huella digital).",
    link: 'https://github.com/Skx18/bomberos_flask.git',
    tecnologias: ['Spring Boot', 'Flask', 'QR', 'Biometría']
  },
];

export default function Experience() {
  const [actual, setActual] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const siguiente = () => setActual((prev) => (prev + 1) % proyectos.length);
  const anterior = () =>
    setActual((prev) => (prev - 1 + proyectos.length) % proyectos.length);

  const abrirModal = (imagen) => {
    setModalImage(imagen);
    setShowModal(true);
  };

  const cerrarModal = () => {
    setShowModal(false);
    setModalImage(null);
  };

  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 px-4 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header mejorado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Experiencia y Proyectos
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Explora algunos de mis proyectos más destacados y las tecnologías que he utilizado
          </p>
        </div>

        {/* Carrusel principal */}
        <div className="relative">
          {/* Navegación móvil en la parte superior */}
          <div className="flex justify-between items-center mb-8 md:hidden">
            <button 
              onClick={anterior} 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <FaChevronLeft className="text-xl" />
            </button>
            
            <div className="flex space-x-2">
              {proyectos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActual(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === actual ? 'bg-blue-400 scale-125' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={siguiente} 
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110"
            >
              <FaChevronRight className="text-xl" />
            </button>
          </div>

          {/* Contenedor principal del carrusel */}
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* Botón anterior (desktop) */}
            <button 
              onClick={anterior} 
              className="hidden md:flex bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110"
            >
              <FaChevronLeft className="text-2xl" />
            </button>

            {/* Tarjeta del proyecto */}
            <div className="w-full max-w-5xl">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <div className="flex flex-col lg:flex-row">
                  {/* Imagen */}
                  <div className="lg:w-1/2 relative group">
                    <img
                      src={proyectos[actual].imagen}
                      alt={proyectos[actual].titulo}
                      className="w-full h-64 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button
                        onClick={() => abrirModal(proyectos[actual].imagen)}
                        className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                      >
                        <FaEye className="text-xl" />
                      </button>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="lg:w-1/2 p-8 lg:p-10">
                    <h3 className="text-2xl lg:text-3xl font-bold mb-4 text-white">
                      {proyectos[actual].titulo}
                    </h3>
                    
                    <p className="text-slate-300 text-base lg:text-lg leading-relaxed mb-6">
                      {proyectos[actual].descripcion}
                    </p>

                    {/* Tecnologías */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">
                        Tecnologías utilizadas
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {proyectos[actual].tecnologias.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 rounded-full px-3 py-1 text-sm text-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Link del proyecto */}
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-slate-400 uppercase tracking-wide">
                        Repositorio
                      </h4>
                      <a 
                        href={proyectos[actual].link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        Ver en GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Botón siguiente (desktop) */}
            <button 
              onClick={siguiente} 
              className="hidden md:flex bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-4 transition-all duration-300 hover:scale-110"
            >
              <FaChevronRight className="text-2xl" />
            </button>
          </div>

          {/* Indicadores (desktop) */}
          <div className="hidden md:flex justify-center mt-8 space-x-3">
            {proyectos.map((_, index) => (
              <button
                key={index}
                onClick={() => setActual(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === actual 
                    ? 'bg-gradient-to-r from-blue-400 to-purple-400 scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={cerrarModal}
              className="absolute -top-4 -right-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-3 transition-all duration-300 hover:scale-110 z-10"
            >
              <FaTimes className="text-xl text-white" />
            </button>
            <img
              src={modalImage}
              alt="Imagen ampliada"
              className="max-w-full max-h-full rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}