import { useState } from "react";
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaUniversity, FaAward, FaCheck } from "react-icons/fa";

export default function Study(){
    const [hoveredItem, setHoveredItem] = useState(null);
    
    const estudios = [
        {
            tipo: "Carrera Universitaria",
            titulo: "Tecnología en Desarrollo de Software",
            institucion: "Universidad del Valle",
            periodo: "2022 - 2025",
            estado: "Finalizado",
            descripcion: "Formación integral en desarrollo de software, bases de datos, ingeniería de software y metodologías ágiles.",
            icono: <FaGraduationCap />,
            color: "from-blue-500 to-indigo-600",
            progreso: 100,
            habilidades: ["Programación", "Bases de Datos", "Ingeniería de Software", "Metodologías Ágiles"]
        },
        {
            tipo: "Certificación",
            titulo: "Desarrollo de Software",
            institucion: "Oracle",
            periodo: "2023",
            estado: "Completado",
            descripcion: "Certificación especializada en desarrollo de software",
            icono: <FaCertificate />,
            color: "from-red-500 to-orange-500",
            progreso: 100,
            habilidades: ["Oracle Database", "Java", "SQL", "Desarrollo Empresarial"]
        }
    ];

    const logros = [
        { texto: "Promedio académico destacado", icono: <FaAward /> },
        { texto: "Participación en proyectos reales", icono: <FaCheck /> },
        { texto: "Certificación internacional", icono: <FaCertificate /> }
    ];

    return(
        <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Formación Académica
                    </h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Mi trayectoria educativa y certificaciones que respaldan mi experiencia técnica
                    </p>
                </div>

                {/* Timeline de estudios */}
                <div className="relative">
                    {/* Línea temporal */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                    
                    <div className="space-y-12">
                        {estudios.map((estudio, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                }`}
                                onMouseEnter={() => setHoveredItem(index)}
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                {/* Punto en la línea temporal */}
                                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${estudio.color} border-4 border-slate-800 z-10 transition-all duration-300 ${
                                    hoveredItem === index ? 'scale-125 shadow-lg' : ''
                                }`}>
                                    <div className="flex items-center justify-center w-full h-full text-white text-sm">
                                        {estudio.icono}
                                    </div>
                                </div>

                                {/* Tarjeta de estudio */}
                                <div className={`ml-16 md:ml-0 flex-1 max-w-md transition-all duration-300 ${
                                    hoveredItem === index ? 'scale-105' : ''
                                }`}>
                                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:shadow-2xl">
                                        {/* Header de la tarjeta */}
                                        <div className="flex items-start justify-between mb-4">
                                            <div>
                                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${estudio.color} text-white mb-2`}>
                                                    {estudio.tipo}
                                                </span>
                                                <h3 className="text-xl font-bold text-white mb-1">
                                                    {estudio.titulo}
                                                </h3>
                                                <div className="flex items-center gap-2 text-slate-300 text-sm mb-2">
                                                    <FaUniversity className="text-xs" />
                                                    <span>{estudio.institucion}</span>
                                                </div>
                                                <div className="flex items-center gap-2 text-slate-400 text-sm">
                                                    <FaCalendarAlt className="text-xs" />
                                                    <span>{estudio.periodo}</span>
                                                </div>
                                            </div>
                                            
                                            {/* Estado */}
                                            <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                                                estudio.estado === 'Completado' 
                                                    ? 'bg-green-500/20 text-green-300 border border-green-400/30' 
                                                    : 'bg-blue-500/20 text-blue-300 border border-blue-400/30'
                                            }`}>
                                                {estudio.estado}
                                            </div>
                                        </div>

                                        {/* Descripción */}
                                        <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                                            {estudio.descripcion}
                                        </p>

                                        {/* Barra de progreso */}
                                        <div className="mb-4">
                                            <div className="flex justify-between items-center mb-2">
                                                <span className="text-slate-400 text-xs">Progreso</span>
                                                <span className="text-slate-300 text-xs font-medium">{estudio.progreso}%</span>
                                            </div>
                                            <div className="w-full bg-slate-700 rounded-full h-2">
                                                <div 
                                                    className={`h-2 rounded-full bg-gradient-to-r ${estudio.color} transition-all duration-500`}
                                                    style={{ width: `${estudio.progreso}%` }}
                                                ></div>
                                            </div>
                                        </div>

                                        {/* Habilidades */}
                                        <div>
                                            <h4 className="text-slate-400 text-xs font-medium uppercase tracking-wide mb-2">
                                                Áreas de enfoque
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {estudio.habilidades.map((habilidad, skillIndex) => (
                                                    <span
                                                        key={skillIndex}
                                                        className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-xs text-slate-300"
                                                    >
                                                        {habilidad}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Espaciador para centrado en desktop */}
                                <div className="hidden md:block flex-1"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Logros adicionales */}
                <div className="mt-16 bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                    <h3 className="text-2xl font-bold text-center mb-8 text-white">
                        Logros Académicos
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {logros.map((logro, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-blue-400 text-xl">
                                    {logro.icono}
                                </div>
                                <span className="text-slate-300 font-medium text-sm">
                                    {logro.texto}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Estadísticas */}
                <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    <div>
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                            3+
                        </div>
                        <div className="text-slate-400 text-sm uppercase tracking-wide">Años de estudio</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                            100%
                        </div>
                        <div className="text-slate-400 text-sm uppercase tracking-wide">Progreso total</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                            1
                        </div>
                        <div className="text-slate-400 text-sm uppercase tracking-wide">Certificación</div>
                    </div>
                    <div>
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                            2025
                        </div>
                        <div className="text-slate-400 text-sm uppercase tracking-wide">Graduación</div>
                    </div>
                </div>
            </div>
        </section>
    )
}