export default function Technologies(){
    const categorias = {
        "Lenguajes de Programación": ["JavaScript", "Python", "Kotlin", "Java", "C++"],
        "Bases de Datos": ["SQLite", "PostgreSQL", "MySQL", "MongoDB"], 
        "Otras Tecnologías": ["React", "Tailwind CSS", "Django", "Flask", "Docker", "AWS EC2", "Redis", "Git", "SpringBoot"],
      };

      return(
        <section className="px-6 py-8 bg-white text-center">
      <h2 className="text-2xl font-semibold text-blue-700 mb-6">Tecnologías que Manejo</h2>

      <div className="grid gap-8 md:grid-cols-3 text-left">
        {Object.entries(categorias).map(([titulo, items]) => (
          <div key={titulo}>
            <h3 className="text-xl font-bold text-blue-800 mb-2">{titulo}</h3>
            <ul className="space-y-2">
              {items.map((item) => (
                <li key={item} className="bg-blue-100 text-blue-900 px-4 py-1 rounded-md inline-block">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

      )
    
}