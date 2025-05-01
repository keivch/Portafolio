import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="bg-white py-8 px-6 text-center">
      <h2 className="text-2xl font-semibold text-[#253237]  mb-6">Contacto</h2>
      <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center text-[#253237] text-lg">
        <div className="flex items-center gap-2">
          <FaPhoneAlt />
          <span>+57 3245770426</span> 
        </div>
        <div className="flex items-center gap-2">
          <FaEnvelope />
          <span>sebastianscarpetta19@gmail.com</span> 
        </div>
        <div className="flex items-center gap-2">
          <FaLinkedin />
          <a
            href="https://www.linkedin.com/in/sebastian-scarpetta-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-blue-600 transition-colors"
          >
            linkedin.com/in/sebastian-scarpetta-developer
          </a>
        </div>
      </div>
    </section>
  );
}
