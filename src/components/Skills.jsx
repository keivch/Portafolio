export default function OtrasSkills() {
    const skills = {
      "Metodologías / Trabajo en Equipo": ["Scrum", "Trabajo colaborativo", "Resolución de conflictos"],
      "Habilidades Blandas": ["Comunicación efectiva", "Proactividad", "Responsabilidad", "Adaptabilidad"],
    };
  
    return (
      <section className="px-6 py-8 bg-blue-50 text-center">
        <h2 className="text-2xl font-semibold text-blue-700 mb-6">Otras Habilidades</h2>
        <div className="grid gap-8 md:grid-cols-2 text-left">
          {Object.entries(skills).map(([categoria, items]) => (
            <div key={categoria}>
              <h3 className="text-xl font-bold text-blue-800 mb-2">{categoria}</h3>
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
    );
  }