"use client";

import { useState } from "react";
import Navbar from "../../components/NavBar";
import {checkIfEmailExists, sendFormData} from "../../services/api";


export default function FormPage() {
  const [email, setEmail] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [motivation, setMotivation] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [emailFormatError, setEmailFormatError] = useState("");
  const [emailExistsError, setEmailExistsError] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const [checkingEmail, setCheckingEmail] = useState(false);
  

  // Valida formato simple de email
  const validateEmailFormat = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  // Al perder foco, validar email formato y existencia
  const handleEmailBlur = async () => {
    setEmailFormatError("");
    setEmailExistsError("");
    setEmailValid(false);
  
    const emailToCheck = email.trim();
    if (!emailToCheck) return;
  
    if (!validateEmailFormat(emailToCheck)) {
      setEmailFormatError("Formato de email inválido.");
      return;
    }
  
    setCheckingEmail(true);
    try {
      const exists = await checkIfEmailExists(emailToCheck);
  
      // Verifica que no haya cambiado el email mientras validabas
      if (emailToCheck !== email.trim()) return;
  
      if (exists) {
        setEmailExistsError("Este email ya fue registrado.");
        setEmailValid(false);
      } else {
        setEmailValid(true);
      }
    } catch (err) {
      if (emailToCheck === email.trim()) {
        setEmailExistsError("No se pudo validar el email.");
        setEmailValid(false);
      }
    } finally {
      if (emailToCheck === email.trim()) {
        setCheckingEmail(false);
      }
    }
  };
  


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // Validación final antes de enviar
    if (!email || !validateEmailFormat(email)) {
      setError("Por favor ingresa un email válido.");
      return;
    }
    if (emailExistsError) {
      setError(emailExistsError);
      return;
    }
    if (!motivation.trim()) {
      setError("Por favor escribe tu motivación.");
      return;
    }

    try {
      await sendFormData({ email, language, motivation });
      setSuccess("¡Respuesta enviada correctamente!");
      setEmail("");
      setLanguage("es");
      setMotivation("");
      setEmailValid(false);
    } catch (err: any) {
      setError(err.message || "Error al enviar el formulario.");
    }
  };

  return (
    <>
      <Navbar />
      <main className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md mt-10">
        <h1 className="text-2xl font-bold mb-6 text-center">Formulario</h1>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>
        )}
        {success && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4">{success}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5" noValidate>
          <label className="block">
            <span className="text-gray-700 font-semibold">Correo electrónico</span>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailFormatError("");
                setEmailExistsError("");
                setError("");
              }}
              onBlur={handleEmailBlur}
              placeholder="ejemplo@correo.com"
              className={`mt-1 block w-full px-4 py-2 border rounded-md focus:ring-2 focus:outline-none ${
                emailFormatError || emailExistsError
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-300 focus:ring-blue-400"
              }`}
              required
            />
            {checkingEmail && (
              <p className="text-sm text-gray-500 mt-1">Validando email...</p>
            )}
            {emailFormatError && (
              <p className="text-sm text-red-600 mt-1">{emailFormatError}</p>
            )}
            {emailExistsError && (
              <p className="text-sm text-red-600 mt-1">{emailExistsError}</p>
            )}
          </label>

          <label className="block">
            <span className="text-gray-700 font-semibold">¿Cuál es tu lenguaje de programación favorito?</span>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            >
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="java">Java</option>
              <option value="c#">C#</option>
              <option value="otro">Otro</option>
            </select>
          </label>

          <label className="block">
            <span className="text-gray-700 font-semibold">¿Qué te motivó a aplicar a esta posición?</span>
            <textarea
              value={motivation}
              onChange={(e) => setMotivation(e.target.value)}
              placeholder="Escribe tu respuesta aquí..."
              rows={4}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </label>

          <button
            type="submit"
            disabled={!emailValid || checkingEmail || !!emailFormatError}
            className={`w-full py-2 rounded-md font-semibold text-white transition ${
              !emailValid || checkingEmail || emailFormatError
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Enviar
          </button>
        </form>
      </main>
    </>
  );
}
