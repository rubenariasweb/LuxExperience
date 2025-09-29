import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { EXPERIENCES } from '../data.js'
import { motion } from 'framer-motion'

export default function ExperienceDetail({ addToCart=()=>{} }){
  const { id } = useParams()
  const item = EXPERIENCES.find(e=>e.id===id)
  if(!item) return <div className='p-8'>Experiencia no encontrada. <Link to='/catalogo' className='text-yellow-400'>Volver al catálogo</Link></div>
  const related = EXPERIENCES.filter(e=>e.category===item.category && e.id!==item.id).slice(0,3)
  return (
    <div className='max-w-6xl mx-auto px-6 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div>
          <div className='rounded-xl overflow-hidden'>
            <motion.img initial={{ opacity:0 }} animate={{ opacity:1 }} src={item.images[0]} className='w-full h-96 object-cover' alt={item.title}/>
          </div>
          <div className='mt-4 flex gap-3'>
            {item.images.map((img,i)=>(<img key={i} src={img} className='w-24 h-16 object-cover rounded-md'/>))}
          </div>
        </div>
        <div>
          <h1 className='text-3xl font-bold'>{item.title}</h1>
          <div className='mt-2 text-gray-300'>{item.location} • {item.duration}</div>
          <div className='mt-4 text-yellow-400 text-2xl font-semibold'>€{item.price}</div>
          <p className='mt-6 text-gray-200'>{item.description}</p>
          <div className='mt-8 flex items-center gap-4'>
            <button onClick={()=>addToCart(item)} className='px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold'>Añadir al carrito</button>
            <button onClick={()=>{ addToCart(item); window.location.href='/catalogo' }} className='px-6 py-3 rounded-xl border border-white/5'>Reservar ahora</button>
          </div>
        </div>
      </div>

      <section className='mt-12'>
        <h2 className='text-2xl font-semibold mb-4'>Experiencias relacionadas</h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
          {related.map(r=>(
            <div key={r.id} className='rounded-xl overflow-hidden glass p-0 border border-white/5'>
              <img src={r.images[0]} className='w-full h-40 object-cover'/>
              <div className='p-4'><div className='font-semibold'>{r.title}</div><div className='text-sm text-gray-400 mt-1'>€{r.price}</div></div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
