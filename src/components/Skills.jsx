import { FaUsers, FaLightbulb, FaComments, FaHandshake } from "react-icons/fa";
import { MdGroups, MdPsychologyAlt } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";

export default function Skills() {
  const skills = [
    {
      categoria: "Metodologías / Trabajo en Equipo",
      habilidades: [
        { nombre: "Scrum", icono: <MdGroups /> },
        { nombre: "Trabajo colaborativo", icono: <GiTeamIdea /> },
        { nombre: "Resolución de conflictos", icono: <MdPsychologyAlt /> },
      ],
    },
    {
      categoria: "Habilidades Blandas",
      habilidades: [
        { nombre: "Comunicación efectiva", icono: <FaComments /> },
        { nombre: "Proactividad", icono: <FaLightbulb /> },
        { nombre: "Responsabilidad", icono: <FaUsers /> },
        { nombre: "Adaptabilidad", icono: <FaHandshake /> },
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-20 px-4 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Otras Habilidades
          </h2>
          <p className="text-slate-300 text-lg max-w-xl mx-auto">
            Conjunto de habilidades interpersonales y metodológicas que aplico en entornos colaborativos.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {skills.map(({ categoria, habilidades }, idx) => (
            <div
              key={categoria}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {categoria}
              </h3>
              <ul className="space-y-4">
                {habilidades.map(({ nombre, icono }, iconIdx) => (
                  <li key={nombre} className="flex items-center gap-4 text-base sm:text-lg text-slate-300 group-hover:text-white transition-colors duration-300">
                    <div className="text-2xl p-2 rounded-full bg-white/10 text-white/80 group-hover:scale-110 transition-transform duration-300">
                      {icono}
                    </div>
                    <span>{nombre}</span>
                  </li>
                ))}
              </ul>

              {/* Partículas decorativas */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl pointer-events-none">
                <div className="absolute w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" style={{ top: "15%", left: "85%" }} />
                <div className="absolute w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" style={{ top: "70%", left: "20%" }} />
                <div className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping" style={{ top: "30%", left: "50%" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


