import { useState, useEffect } from "react";
import { FaCode, FaRocket, FaHeart} from "react-icons/fa";
import perfil from '../assets/perfil.jpg';

export default function Header(){
    const [currentRole, setCurrentRole] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    
    
    const roles = [
        "Desarrollador Full Stack",
        "Desarrollador Backend",
        "Desarrollador Frontend",
        "Desarrollador web"
    ];

    const skills = [
        { icon: <FaCode />, text: "Desarrollo Full Stack" },
        { icon: <FaRocket />, text: "Soluciones Escalables" },
        { icon: <FaHeart />, text: "Código Limpio" }
    ];

    // Animación de roles rotativos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Animación de aparición
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return(
        <header className='bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20 px-4 min-h-screen flex items-center relative overflow-hidden'>
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Columna izquierda - Información */}
                    <div className={`flex-1 text-center lg:text-left transition-all duration-1000 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                        {/* Saludo */}
                        <div className="mb-6">
                            <span className="inline-block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-medium text-lg mb-2">
                                👋 Hola, soy
                            </span>
                        </div>

                        {/* Nombre */}
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                                Sebastian Hernandez
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Scarpetta
                            </span>
                        </h1>

                        {/* Rol rotativo */}
                        <div className="mb-6 h-12 flex items-center justify-center lg:justify-start">
                            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
                                <span className="text-slate-300 text-lg font-medium transition-all duration-500">
                                    {roles[currentRole]}
                                </span>
                            </div>
                        </div>

                        {/* Descripción */}
                        <p className='text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0'>
                            Mi enfoque se centra en desarrollar <span className="text-blue-400 font-medium">soluciones eficientes</span>, 
                            <span className="text-purple-400 font-medium"> escalables</span> y de 
                            <span className="text-green-400 font-medium"> alta calidad</span>, utilizando 
                            tecnologías modernas y las mejores prácticas de la industria.
                        </p>

                        {/* Skills destacadas */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                            {skills.map((skill, index) => (
                                <div 
                                    key={index}
                                    className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                                >
                                    <span className="text-blue-400">{skill.icon}</span>
                                    <span className="text-slate-300 text-sm font-medium">{skill.text}</span>
                                </div>
                            ))}
                        </div>

                    </div>

                    {/* Columna derecha - Imagen */}
                    <div className={`flex-shrink-0 transition-all duration-1000 delay-300 ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                        <div className="relative">
                            {/* Imagen principal */}
                            <div className="relative group">
                                <img
                                    src={perfil}
                                    alt='Sebastian Hernandez Scarpetta - Desarrollador Full Stack'
                                    className='w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-white/20 shadow-2xl transition-all duration-300 group-hover:scale-105'
                                />
                                
                                {/* Anillo de gradiente animado */}
                                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 p-1 animate-spin-slow opacity-75">
                                    <div className="w-full h-full rounded-full bg-slate-800"></div>
                                </div>
                                
                                {/* Efectos de partículas */}
                                <div className="absolute -inset-4 opacity-30">
                                    <div className="absolute top-0 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                                    <div className="absolute top-1/4 right-0 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                                    <div className="absolute bottom-1/4 left-0 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
                                    <div className="absolute bottom-0 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                                </div>
                            </div>

                            {/* Estado de disponibilidad */}
                            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500/20 border border-green-400/30 rounded-full px-4 py-2 backdrop-blur-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-green-300 font-medium text-sm">
                                        Disponible para proyectos
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* CSS personalizado para animaciones */}
            <style jsx>{`
                @keyframes spin-slow {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .animate-spin-slow {
                    animation: spin-slow 8s linear infinite;
                }
            `}</style>
        </header>
    )
}