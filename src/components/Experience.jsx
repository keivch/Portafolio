import nicelook from "../assets/niceloook.png";
import bomberos from "../assets/bomberos.png";
import afh from "../assets/afh2.png";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const proyectos = [
  {
    titulo: "Nicelook",
    imagen: nicelook,
    descripcion:
      "Desarrollo del backend de una aplicación web completa para la gestión integral de la peluquería Stylos (Palmira). Utilizando Python, Django y PostgreSQL, construí una API RESTful robusta para gestionar el calendario de citas, el inventario de productos, la nómina de empleados y los reportes financieros.",
      link: 'https://github.com/juanpalacios20/backend_nicelook.git'
  },
  {
    titulo: "Afh-metalmecanico",
    imagen: afh,
    descripcion:
      "Sistema web para la empresa AFH-Metalmecánicos. Trabajé en la construcción de una API RESTful para el manejo del inventariado de herramientas y un sistema completo de solicitudes de retiro de herramientas, incluyendo generación de archivos PDF.",
      link: 'https://github.com/keivch/Back_Afh.git'
  },
  {
    titulo: "Sistema para bomberos",
    imagen: bomberos,
    descripcion:
      "Participé en el desarrollo de una aplicación para los bomberos de mi ciudad. El sistema registra horas trabajadas por bombero mediante QR o huella digital (se usó Spring Boot como microservicio para el sistema de huella digital).",
      link: 'https://github.com/Skx18/bomberos_flask.git'
  },
];

export default function Experience() {
  const [actual, setActual] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const siguiente = () => setActual((prev) => (prev + 1) % proyectos.length);
  const anterior = () =>
    setActual((prev) => (prev - 1 + proyectos.length) % proyectos.length);

  return (
    <section className="bg-[#5C6B73] text-white py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-8">
        Experiencia y Proyectos
      </h2>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <button onClick={anterior} className="text-3xl hover:text-[#E0E1DD]">
          <FaChevronLeft />
        </button>

        <div className="flex flex-col md:flex-row items-center bg-white text-[#253237] rounded-xl overflow-hidden shadow-lg w-full">
          <img
            src={proyectos[actual].imagen}
            alt={proyectos[actual].titulo}
            className="w-full md:w-[500px] h-auto max-h-[350px] object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => {
              setModalImage(proyectos[actual].imagen);
              setShowModal(true);
            }}
          />
          <div className="p-6 max-w-xl">
            <h3 className="text-xl font-bold mb-2">
              {proyectos[actual].titulo}
            </h3>
            <p className="text-base">{proyectos[actual].descripcion}</p>
            <h4 className="font-semibold">Link:</h4>
            <a href={proyectos[actual].link} target="_blank" className="underline hover:text-blue-600 transition-colors">{proyectos[actual].link}</a>
          </div>
        </div>

        <button onClick={siguiente} className="text-3xl hover:text-[#E0E1DD]">
          <FaChevronRight />
        </button>
      </div>
      {showModal && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    onClick={() => setShowModal(false)}
  >
    <img
      src={modalImage}
      alt="Imagen ampliada"
      className="max-w-full max-h-full rounded-lg shadow-xl"
    />
  </div>
)}
    </section>
  );
}
