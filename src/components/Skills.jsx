import { FaUsers, FaLightbulb, FaComments, FaHandshake } from "react-icons/fa";
import { MdGroups, MdPsychologyAlt } from "react-icons/md";
import { GiTeamIdea } from "react-icons/gi";

export default function Skills() {
  const skills = [
    { categoria: "Metodologías / Trabajo en Equipo", habilidades: [
      { nombre: "Scrum", icono: <MdGroups /> },
      { nombre: "Trabajo colaborativo", icono: <GiTeamIdea /> },
      { nombre: "Resolución de conflictos", icono: <MdPsychologyAlt /> },
    ]},
    { categoria: "Habilidades Blandas", habilidades: [
      { nombre: "Comunicación efectiva", icono: <FaComments /> },
      { nombre: "Proactividad", icono: <FaLightbulb /> },
      { nombre: "Responsabilidad", icono: <FaUsers /> },
      { nombre: "Adaptabilidad", icono: <FaHandshake /> },
    ]},
  ];

  return (
    <section className="bg-[#5C6B73] text-white py-8 px-6">
      <h2 className="text-2xl font-semibold text-center mb-6">Otras Habilidades</h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
        {skills.map(({ categoria, habilidades }) => (
          <div key={categoria}>
            <h3 className="text-xl font-bold mb-4">{categoria}</h3>
            <ul className="space-y-4">
              {habilidades.map(({ nombre, icono }) => (
                <li key={nombre} className="flex items-center gap-3 text-lg">
                  <span className="text-xl">{icono}</span>
                  {nombre}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
