import Navbar from "../components/NavBar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">
        {/* Encabezado */}
        <div className="opacity-0 animate-fade-in-up animation-delay-0">
          <h1 className="text-4xl font-bold mb-4">Hola, soy Pablo Ossandón</h1>
          <p className="text-gray-600 text-lg">
            Desarrollador de software enfocado en soluciones web modernas. Esta prueba fue una gran oportunidad para demostrar habilidades técnicas bajo presión.
          </p>
        </div>

        {/* Bloque de Comentarios tipo blog */}
        <div className="opacity-0 animate-fade-in-up animation-delay-200">
          <div className="bg-gray-900 text-green-400 font-mono rounded p-6 text-sm leading-relaxed shadow-md">
            <p>// Prueba Técnica ONEAPP</p>
            <p>// Se desarrolló una solución fullstack con Express para el backend y Next.js para el frontend.</p>
            <p>// Se usaron tecnologías como TailwindCSS, TypeScript, Recharts y validación de datos.</p>
            <p>// El backend cuenta con endpoints para crear, consultar, y obtener estadísticas de respuestas.</p>
            <p>// En el frontend se implementó un dashboard funcional con gráficos y tablas dinámicas.</p>
            <p>// Por tiempos, se optó por una sola tabla de datos (respuestas), pero es extensible.</p>
            <p>// La prueba fue entretenida y un muy buen desafío técnico.</p>
          </div>
        </div>

        {/* Contacto */}
        <div className="opacity-0 animate-fade-in-up animation-delay-400">
          <h2 className="text-2xl font-semibold mb-4">Mis datos de contacto</h2>
          <div className="flex items-center gap-4 mb-2">
            <FaGithub className="text-xl text-gray-700" />
            <a
              href="https://github.com/pabloossandon88"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/pabloossandon88
            </a>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <FaLinkedin className="text-xl text-blue-700" />
            <a
              href="https://linkedin.com/in/pabloossandon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/pabloossandon
            </a>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <HiOutlineMail className="text-xl text-red-600" />
            <a
              href="mailto:pabloossandon88@gmail.com"
              className="text-gray-800 hover:underline"
            >
              pabloossandon88@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
