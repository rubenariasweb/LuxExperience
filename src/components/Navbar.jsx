import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiShoppingCart, FiSun } from 'react-icons/fi'

export default function Navbar({ cartCount=0 }){
  const loc = useLocation()
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <Link to="/" className="font-bold text-2xl tracking-wide">
            Lux<span className="text-yellow-400">Experience</span>
          </Link>
          
          {/* Links */}
          <div className="hidden md:flex gap-6 text-base font-medium tracking-wide">
            <Link
              to="/"
              className={loc.pathname==='/' 
                ? 'text-yellow-400'
                : 'hover:text-yellow-400 transition'}
            >
              Inicio
            </Link>
            <Link
              to="/catalogo"
              className={loc.pathname==='/catalogo' 
                ? 'text-yellow-400'
                : 'hover:text-yellow-400 transition'}
            >
              Catálogo
            </Link>
            <Link
              to="/faq"
              className={loc.pathname==='/faq' 
                ? 'text-yellow-400'
                : 'hover:text-yellow-400 transition'}
            >
              FAQ
            </Link>
            <Link
              to="/contacto"
              className={loc.pathname==='/contacto' 
                ? 'text-yellow-400'
                : 'hover:text-yellow-400 transition'}
            >
              Contacto
            </Link>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4">
            {/* Boton Claro/Oscuro
          <button className="p-2 rounded-lg hover:bg-white/5 transition">
            <FiSun className="w-5 h-5" />
          </button>
          */}
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
        </div>
      </div>
    </nav>
  )
}
