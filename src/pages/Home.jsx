import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { EXPERIENCES } from '../data.js'
import { Plane, Gem, Wine } from "lucide-react"

export default function Home({ addToCart=()=>{} }){
  const highlights = EXPERIENCES.filter(e=>e.highlight)
  return (
    <div>
      <header className='relative h-screen flex items-center justify-center overflow-hidden'>
        <video className='absolute inset-0 w-full h-full object-cover brightness-75' src='/media/hero.mp4' autoPlay muted loop />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/70'></div>
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className='relative z-10 text-center px-6'>
          <h1 className='text-4xl md:text-6xl font-extrabold'>Descubre <span className='text-yellow-400'>experiencias únicas</span></h1>
          <p className='mt-4 max-w-2xl mx-auto text-gray-200/80'>Momentos curados de lujo — desde jets privados hasta spas exclusivos.</p>
          <Link to='/catalogo' className='mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-yellow-400/90 to-yellow-300/80 text-black font-semibold px-6 py-3 rounded-xl shadow-2xl ring-1 ring-yellow-400/40 hover:brightness-105 transition'>Explorar catálogo</Link>
        </motion.div>
      </header>

      <main className='max-w-6xl mx-auto px-6 -mt-28 relative z-10'>

<section className="grid grid-cols-1 md:grid-cols-3 gap-6">
  {[
    { label: "Viajes", desc: "Jets privados, yates, escapadas exclusivas", icon: Plane },
    { label: "Bienestar", desc: "Spas, retiros y experiencias mindfulness", icon: Gem },
    { label: "Gastronomía", desc: "Cenas privadas, chefs y catas únicas", icon: Wine }
  ].map((c, i) => {
    const Icon = c.icon
    return (
      <motion.div
        key={c.label}
        whileHover={{ y: -5, scale: 1.02 }}
        className="group bg-gradient-to-br from-black/50 to-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-xl"
      >
        <div className="mb-3 text-yellow-400">
          <Icon className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <div className="text-sm text-gray-300 uppercase tracking-wide">
          {c.label}
        </div>
        <div className="mt-2 text-xl font-semibold">Experiencias {c.label}</div>
        <p className="mt-3 text-sm text-gray-400">{c.desc}</p>
      </motion.div>
    )
  })}
</section>



        <section className='mt-12'>
          <h2 className='text-2xl font-semibold mb-6'>Destacadas</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {highlights.map(e=>(
              <article key={e.id} className='rounded-2xl overflow-hidden relative shadow-2xl border border-white/5'>
                <img src={e.images[0]} alt={e.title} className='w-full h-56 object-cover'/>
                <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/60'></div>
                <div className='p-6 relative z-10 flex items-center justify-between'>
                  <div>
                    <div className='text-lg font-semibold'>{e.title}</div>
                    <div className='text-sm text-gray-300'>{e.location}</div>
                  </div>
                  <div className='text-right'>
                    <div className='text-yellow-400 font-bold'>€{e.price}</div>
                    <div className='text-sm text-gray-400'>{e.duration}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

          


      </main>
    </div>
  )
}
