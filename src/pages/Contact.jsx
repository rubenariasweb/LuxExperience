import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <header className="relative h-64 flex items-center justify-center overflow-hidden">
        <img
          src="/media/horizontal1.jpg"
          alt="Contacto"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-yellow-400">
          Contáctanos
        </h1>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 flex-grow">
        {/* Formulario */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl"
        >
          <h2 className="text-2xl font-semibold mb-4">Envíanos un mensaje</h2>
          <input
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:ring-2 focus:ring-yellow-400/60 outline-none transition"
            placeholder="Nombre"
          />
          <input
            type="email"
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:ring-2 focus:ring-yellow-400/60 outline-none transition"
            placeholder="Email"
          />
          <textarea
            className="w-full p-3 rounded-lg bg-black/30 border border-white/10 focus:ring-2 focus:ring-yellow-400/60 outline-none transition"
            rows="5"
            placeholder="Mensaje"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-yellow-400/90 to-yellow-300/80 text-black font-semibold shadow-lg"
          >
            Enviar
          </motion.button>
        </motion.form>

        {/* Info de contacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center space-y-6"
        >
          <div>
            <h3 className="text-xl font-semibold text-yellow-400">Email</h3>
            <p className="text-gray-300">
              <a
                href="mailto:info@luxexperience.com"
                className="hover:text-yellow-400"
              >
                info@luxexperience.com
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-yellow-400">Dirección</h3>
            <p className="text-gray-300">Av. del Lujo 123, Madrid, España</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-yellow-400">Síguenos</h3>
            <div className="flex gap-4 mt-2">
              <a href="https://www.instagram.com/_.aariaas/" className="hover:text-yellow-400">Instagram</a>
              <a href="https://www.linkedin.com/in/ruben-arias-611647356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:text-yellow-400">LinkedIn</a>
          </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
