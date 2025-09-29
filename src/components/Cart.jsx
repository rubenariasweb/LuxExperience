import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX } from 'react-icons/fi'

export default function Cart({ items=[], remove=()=>{} }){
  const [open, setOpen] = useState(false)
  return (
    <div className='fixed right-4 bottom-6 z-40'>
     <div className='fixed right-4 bottom-6 z-[100]'>
  <button 
    onClick={()=>setOpen(o=>!o)} 
    className='bg-yellow-400 text-black px-4 py-2 rounded-full shadow-md'
  >
    {open ? "Cerrar carrito" : `Carrito (${items.length})`}
  </button>
</div>


      <AnimatePresence>
      {open && (
        <motion.aside initial={{ x:300 }} animate={{ x:0 }} exit={{ x:300 }} className='fixed right-0 top-0 h-full w-full sm:w-96 bg-gradient-to-b from-gray-900 to-black p-6 z-50'>
          <div className='flex items-center justify-between mb-4'><div className='font-semibold text-lg'>Tu carrito</div><button onClick={()=>setOpen(false)}><FiX/></button></div>
          <div className='space-y-3 overflow-y-auto max-h-[60vh] pb-6'>{items.length===0? <div className='text-gray-400'>Carrito vacío</div> : items.map((it,idx)=>(
            <div key={idx} className='flex items-center gap-3 p-3 rounded-xl bg-black/30 border border-white/5'>
              <img src={it.images?.[0]||'/media/placeholder.jpg'} className='w-16 h-12 object-cover rounded-md'/>
              <div className='flex-1'><div className='font-semibold'>{it.title}</div><div className='text-sm text-gray-400'>€{it.price}</div></div>
              <button className='text-sm text-red-400' onClick={()=>remove(idx)}>Eliminar</button>
            </div>
          ))}</div>
          <div className='mt-6'><div className='flex items-center justify-between text-gray-300 mb-4'><div>Total</div><div className='font-semibold'>€{items.reduce((s,i)=>s+(i.price||0),0)}</div></div><button className='w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-semibold'>Finalizar reserva</button></div>
        </motion.aside>
      )}
      </AnimatePresence>
    </div>
  )
}
