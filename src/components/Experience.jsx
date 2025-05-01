const proyectos = [
    {
      titulo: "Nicelook",
      imagen: '../assets/Nicelook.png', // asegúrate de tener esta imagen en `public/assets/`
      descripcion: "Desarrollo del backend de una aplicación web completa parala gestión integral de la peluquería Stylos (Palmira). UtilizandoPython, Django y PostgreSQL, construí una API RESTful robusta para gestionar el calendario de citas, el inventario deproductos, la nómina de empleados y los reportes financieros",
    },
    {
      titulo: "Afh-metalmecanico",
      imagen: '../assets/afh.png',
      descripcion: "Sistema web para la empresa AFH-Metalmecanicos, trabaje en la construccionde una API RESTful, para el manejo del inventariado de herramientas y un sistema completo de solicitudes de retiro de herramientas (creando archivos pdf)",
    },
    {
      titulo: "Sistema para bomberos",
      imagen: '../assets/bomberitos.png',
      descripcion: "Participe del desarrollo de una aplicacion para los bomberos de mi ciudad, donde se lleva el registro de horas trabajadas por cada bombero, se registran por medio de qr o huellas digitales (se uso Springboot como micro servicio para el sistema de huella digital)",
    },
  ];

  export default function Experience(){
    return(
        <section className="px-6 py-8 bg-blue-50">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6 text-center">Experiencia y Proyectos</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-blue-800">{proyecto.titulo}</h3>
              <p className="text-gray-700 mt-2">{proyecto.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    );
  }