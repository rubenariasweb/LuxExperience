import React, { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import ExperienceDetail from './pages/ExperienceDetail.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Cart from './components/Cart.jsx'

export default function App() {
  const [cartItems, setCartItems] = useState([])
  function addToCart(item) { setCartItems(s => [...s, item]) }
  function removeFromCart(idx) { setCartItems(s => s.filter((_, i) => i !== idx)) }

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col'>
      <Navbar cartCount={cartItems.length} />
      <Cart items={cartItems} remove={removeFromCart} />

      <main className='pt-24 flex-grow'>
        <Routes>
          <Route path='/' element={<Home addToCart={addToCart} />} />
          <Route path='/catalogo' element={<Catalog addToCart={addToCart} />} />
          <Route path='/experiencia/:id' element={<ExperienceDetail addToCart={addToCart} />} />
          <Route path='/faq' element={<FAQ />} />
          <Route path='/contacto' element={<Contact />} />
          <Route path='*' element={<Home addToCart={addToCart} />} />
        </Routes>
      </main>

      {/* ✅ Footer mejorado */}
      <footer className="border-t border-white/10 bg-black/40 backdrop-blur-md">
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
          © {new Date().getFullYear()} LuxExperience — Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}
