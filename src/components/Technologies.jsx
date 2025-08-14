import { useState, useEffect } from "react";
import { FaReact, FaPython, FaDocker, FaDatabase, FaJava, FaAmazon, FaNodeJs, FaGithub, FaFlask, FaHtml5, FaAngular } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiKotlin, SiDjango, SiNextui} from "react-icons/si";

export default function Technologies(){
    const [hoveredTech, setHoveredTech] = useState(null);
    const [visibleTechs, setVisibleTechs] = useState([]);

    const tecnologias = [
        { 
            nombre: "JavaScript", 
            icono: <SiJavascript />, 
            color: "from-yellow-400 to-yellow-600",
            categoria: "Frontend"
        },
        { 
            nombre: "Python", 
            icono: <FaPython />, 
            color: "from-blue-400 to-green-400",
            categoria: "Backend"
        },
        { 
            nombre: "Kotlin", 
            icono: <SiKotlin />, 
            color: "from-purple-400 to-pink-400",
            categoria: "Mobile"
        },
        { 
            nombre: "React", 
            icono: <FaReact />, 
            color: "from-cyan-400 to-blue-500",
            categoria: "Frontend"
        },
        { 
            nombre: "Tailwind CSS", 
            icono: <SiTailwindcss />, 
            color: "from-teal-400 to-cyan-500",
            categoria: "Frontend"
        },
        { 
            nombre: "Django", 
            icono: <SiDjango />, 
            color: "from-green-600 to-green-700",
            categoria: "Backend"
        },
        { 
            nombre: "Docker", 
            icono: <FaDocker />, 
            color: "from-blue-500 to-blue-600",
            categoria: "DevOps"
        },
        { 
            nombre: "Bases de datos", 
            descripcion: "PostgreSQL, SQLite, MariaDB, MongoDB",
            icono: <FaDatabase />, 
            color: "from-gray-500 to-gray-700",
            categoria: "Database"
        },
        {
            nombre: "Java - SpringBoot", 
            icono: <FaJava/>, 
            color: "from-orange-500 to-red-500",
            categoria: "Backend"
        },
        {
            nombre: "AWS - EC2", 
            icono: <FaAmazon/>, 
            color: "from-orange-400 to-yellow-500",
            categoria: "Cloud"
        },
        {
            nombre: "Node.js", 
            icono: <FaNodeJs/>, 
            color: "from-green-500 to-green-600",
            categoria: "Backend"
        },
        {
            nombre: "GitHub", 
            icono: <FaGithub/>, 
            color: "from-gray-700 to-gray-900",
            categoria: "Tools"
        },
        {
            nombre: "HTML5", 
            icono: <FaHtml5/>, 
            color: "from-orange-500 to-red-600",
            categoria: "Frontend"
        },
        {
            nombre: "Flask", 
            icono: <FaFlask/>, 
            color: "from-gray-600 to-gray-800",
            categoria: "Backend"
        },
        {
            nombre: "Angular", 
            icono: <FaAngular/>, 
            color: "from-red-500 to-red-700",
            categoria: "Frontend"
        },
        {
            nombre: 'Next.js',
            icono: <SiNextui/>,
            color: "from-blue-500 to-blue-700",
            categoria: "Frontend"
        }
    ];

    // Animación de aparición progresiva
    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleTechs(prev => {
                if (prev.length < tecnologias.length) {
                    return [...prev, prev.length];
                }
                return prev;
            });
        }, 100);

        return () => clearInterval(timer);
    }, []);

    const categorias = [...new Set(tecnologias.map(tech => tech.categoria))];

    return (
        <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 px-4 min-h-screen flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Tecnologías y Herramientas
                    </h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-8">
                        Stack tecnológico que manejo para desarrollar soluciones completas y escalables
                    </p>
                    
                    {/* Filtros por categoría */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {categorias.map((categoria) => (
                            <span
                                key={categoria}
                                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm text-slate-300"
                            >
                                {categoria}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Grid de tecnologías */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {tecnologias.map((tecnologia, idx) => (
                        <div
                            key={idx}
                            className={`group relative bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer transform ${
                                visibleTechs.includes(idx) 
                                    ? 'translate-y-0 opacity-100' 
                                    : 'translate-y-8 opacity-0'
                            }`}
                            style={{ 
                                transitionDelay: `${idx * 50}ms`,
                                background: hoveredTech === idx 
                                    ? `linear-gradient(135deg, ${tecnologia.color.split(' ')[1]} 0%, ${tecnologia.color.split(' ')[3]} 100%)` 
                                    : undefined
                            }}
                            onMouseEnter={() => setHoveredTech(idx)}
                            onMouseLeave={() => setHoveredTech(null)}
                        >
                            {/* Icono con efecto de brillo */}
                            <div className="relative mb-4">
                                <div className={`text-4xl md:text-5xl transition-all duration-300 ${
                                    hoveredTech === idx ? 'text-white scale-110' : 'text-slate-300'
                                }`}>
                                    {tecnologia.icono}
                                </div>
                                
                                {/* Efecto de brillo animado */}
                                <div className={`absolute inset-0 bg-gradient-to-r ${tecnologia.color} opacity-0 group-hover:opacity-20 rounded-full blur-xl transition-opacity duration-300`}></div>
                            </div>

                            {/* Nombre de la tecnología */}
                            <h3 className={`font-semibold text-sm md:text-base mb-2 transition-colors duration-300 ${
                                hoveredTech === idx ? 'text-white' : 'text-slate-200'
                            }`}>
                                {tecnologia.nombre}
                            </h3>

                            {/* Descripción adicional si existe */}
                            {tecnologia.descripcion && (
                                <p className={`text-xs transition-colors duration-300 ${
                                    hoveredTech === idx ? 'text-slate-100' : 'text-slate-400'
                                }`}>
                                    {tecnologia.descripcion}
                                </p>
                            )}

                            {/* Badge de categoría */}
                            <div className={`absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                                hoveredTech === idx 
                                    ? 'bg-white/20 text-white' 
                                    : 'bg-white/10 text-slate-400'
                            }`}>
                                {tecnologia.categoria}
                            </div>

                            {/* Efecto de partículas en hover */}
                            <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                                <div className={`absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                                    hoveredTech === idx ? 'animate-ping' : ''
                                }`} style={{
                                    top: '20%',
                                    left: '80%',
                                    animationDelay: '0s'
                                }}></div>
                                <div className={`absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                                    hoveredTech === idx ? 'animate-ping' : ''
                                }`} style={{
                                    top: '70%',
                                    left: '10%',
                                    animationDelay: '0.5s'
                                }}></div>
                                <div className={`absolute w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                                    hoveredTech === idx ? 'animate-ping' : ''
                                }`} style={{
                                    top: '30%',
                                    left: '20%',
                                    animationDelay: '1s'
                                }}></div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Estadísticas */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                            {tecnologias.filter(t => t.categoria === 'Frontend').length}
                        </div>
                        <div className="text-slate-400 text-sm uppercase tracking-wide">Frontend</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                            {tecnologias.filter(t => t.categoria === 'Backend').length}
                        </div>
                        <div className="text-slate-400 text-sm uppercase tracking-wide">Backend</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                            {tecnologias.filter(t => ['Database', 'Cloud', 'DevOps'].includes(t.categoria)).length}
                        </div>
                        <div className="text-slate-400 text-sm uppercase tracking-wide">Infraestructura</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                            {tecnologias.length}
                        </div>
                        <div className="text-slate-400 text-sm uppercase tracking-wide">Total</div>
                    </div>
                </div>
            </div>
        </section>
    );
}