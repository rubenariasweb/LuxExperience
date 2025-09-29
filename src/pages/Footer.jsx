import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-black/40 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold text-yellow-400">LuxExperience</h3>
          <p className="mt-2 text-sm text-gray-400">
            Experiencias únicas de lujo en todo el mundo.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
            Navegación
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/catalogo" className="hover:text-yellow-400">Catálogo</Link></li>
            <li><Link to="/faq" className="hover:text-yellow-400">FAQ</Link></li>
            <li><Link to="/contacto" className="hover:text-yellow-400">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
            Síguenos
          </h4>
          <div className="mt-3 flex gap-4 text-sm">
            <a href="https://www.instagram.com/_.aariaas/" className="hover:text-yellow-400">Instagram</a>
            <a href="https://www.linkedin.com/in/ruben-arias-611647356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:text-yellow-400">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-sm text-gray-500">
        © 2025 LuxExperience — Todos los derechos reservados.
      </div>
    </footer>
  );
}
