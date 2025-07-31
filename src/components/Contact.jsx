import { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaMapMarkerAlt, FaCopy, FaCheck } from "react-icons/fa";

export default function Contact() {
  const [copiedItem, setCopiedItem] = useState(null);

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      label: "Teléfono",
      value: "+57 3245770426",
      displayValue: "+57 324 577 0426",
      href: "tel:+573245770426",
      color: "from-green-400 to-emerald-500",
      copyable: true
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "sebastianscarpetta19@gmail.com",
      displayValue: "sebastianscarpetta19@gmail.com",
      href: "mailto:sebastianscarpetta19@gmail.com",
      color: "from-red-400 to-pink-500",
      copyable: true
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/sebastian-scarpetta-developer",
      displayValue: "sebastian-scarpetta-developer",
      href: "https://www.linkedin.com/in/sebastian-scarpetta-developer",
      color: "from-blue-500 to-blue-600",
      copyable: false
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Ubicación",
      value: "Palmira, Valle del Cauca, Colombia",
      displayValue: "Palmira, Valle del Cauca",
      href: null,
      color: "from-purple-400 to-purple-600",
      copyable: false
    }
  ];

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(index);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Contacto
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y colaborar contigo
          </p>
        </div>

        {/* Tarjetas de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 flex-1">
                  {/* Icono con gradiente */}
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${contact.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-xl">
                      {contact.icon}
                    </div>
                  </div>

                  {/* Información */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-slate-400 text-sm font-medium uppercase tracking-wide mb-1">
                      {contact.label}
                    </h3>
                    {contact.href ? (
                      <a
                        href={contact.href}
                        target={contact.href.startsWith('http') ? "_blank" : undefined}
                        rel={contact.href.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="text-white hover:text-blue-300 transition-colors duration-300 font-medium truncate block"
                      >
                        {contact.displayValue}
                      </a>
                    ) : (
                      <span className="text-white font-medium block truncate">
                        {contact.displayValue}
                      </span>
                    )}
                  </div>
                </div>

                {/* Botón de copiar */}
                {contact.copyable && (
                  <button
                    onClick={() => copyToClipboard(contact.value, index)}
                    className="ml-4 p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-300 hover:scale-110 group"
                    title="Copiar al portapapeles"
                  >
                    {copiedItem === index ? (
                      <FaCheck className="text-green-400 text-sm" />
                    ) : (
                      <FaCopy className="text-slate-300 group-hover:text-white text-sm" />
                    )}
                  </button>
                )}
              </div>

              {/* Indicador de copiado */}
              {copiedItem === index && (
                <div className="mt-3 text-green-400 text-sm font-medium animate-pulse">
                  ✓ Copiado al portapapeles
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-4 text-white">
            ¿Listo para trabajar juntos?
          </h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            Estoy disponible para proyectos freelance, colaboraciones o oportunidades de trabajo full-time. 
            No dudes en contactarme para discutir tu próximo proyecto.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sebastianscarpetta19@gmail.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              <FaEnvelope />
              Enviar Email
            </a>
            
            <a
              href="https://www.linkedin.com/in/sebastian-scarpetta-developer"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              <FaLinkedin />
              Conectar en LinkedIn
            </a>
          </div>
        </div>

        {/* Disponibilidad */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/30 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 font-medium">
              Disponible para nuevos proyectos
            </span>
          </div>
        </div>

        {/* Tiempo de respuesta */}
        <div className="mt-8 text-center text-slate-400 text-sm">
          <p>Tiempo de respuesta promedio: 24 horas</p>
        </div>
      </div>
    </section>
  );
}
