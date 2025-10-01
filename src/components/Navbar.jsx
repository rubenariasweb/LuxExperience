import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiShoppingCart, FiSun, FiMenu, FiX } from 'react-icons/fi'

export default function Navbar({ cartCount = 0 }) {
  const loc = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { to: '/', label: 'Inicio' },
    { to: '/catalogo', label: 'Catálogo' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contacto', label: 'Contacto' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="font-bold text-2xl tracking-wide">
            Lux<span className="text-yellow-400">Experience</span>
          </Link>
        </div>

        {/* Links - desktop */}
        <div className="hidden md:flex gap-6 text-base font-medium tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={
                loc.pathname === link.to
                  ? 'text-yellow-400'
                  : 'hover:text-yellow-400 transition'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Link
            to="/catalogo"
            className="relative p-2 rounded-lg hover:bg-white/5 transition"
          >
            <FiShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs px-1 rounded">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Botón hamburguesa solo en móviles */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md px-6 py-4 space-y-4 text-lg font-medium tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)} // cerrar al hacer clic
              className={
                loc.pathname === link.to
                  ? 'block text-yellow-400'
                  : 'block hover:text-yellow-400 transition'
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}

