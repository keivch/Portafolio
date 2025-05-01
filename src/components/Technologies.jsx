import { FaReact, FaPython, FaDocker, FaDatabase, FaJava, FaAmazon, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiKotlin, SiDjango} from "react-icons/si";

export default function Technologies(){
    const tecnologias = [
        { nombre: "JavaScript", icono: <SiJavascript /> },
        { nombre: "Python", icono: <FaPython /> },
        { nombre: "Kotlin", icono: <SiKotlin /> },
        { nombre: "React", icono: <FaReact /> },
        { nombre: "Tailwind CSS", icono: <SiTailwindcss /> },
        { nombre: "Django", icono: <SiDjango /> },
        { nombre: "Docker", icono: <FaDocker /> },
        { nombre: "Bases de datos (Postgrest, SQLite, MariaDB, MongoDB)", icono: <FaDatabase /> },
        {nombre: "Java - SpringBoot", icono: <FaJava/> },
        {nombre: "AWS - EC2", icono: <FaAmazon/>},
        {nombre: "NodeJs", icono: <FaNodeJs/>}
      ];
      return (
        <section className=" text-white py-8 px-6">
          <h2 className="text-2xl text-[#253237]  font-semibold text-center mb-6">Tecnologías y lenguajes que Manejo</h2>
          <ul className="space-y-4 max-w-md mx-auto text-[#253237]">
            {tecnologias.map((tecnologia, idx) => (
              <li key={idx} className="flex items-center gap-3 text-lg">
                <span className="text-xl">{tecnologia.icono}</span>
                {tecnologia.nombre}
              </li>
            ))}
          </ul>
        </section>
      );
    
}