import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    q: "¿Cómo reservo?",
    a: "Selecciona la experiencia y pulsa 'Reservar'. Aparecerá en tu carrito."
  },
  {
    q: "¿Puedo personalizar?",
    a: "Sí, contáctanos mediante el formulario y te responderemos."
  },
  {
    q: "¿Hay cancelación?",
    a: "Demo ficticia — políticas a definir en versión real."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Hero / Header */}
      <div className="relative rounded-2xl overflow-hidden mb-10">
       <img
  src="/media/spa1.jpg"
  alt="Preguntas frecuentes"
  loading="lazy"
  className="w-full h-52 object-cover brightness-50"
/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-bold"
          >
            Preguntas Frecuentes
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-2 max-w-xl text-gray-200 text-sm"
          >
            Encuentra respuestas rápidas a las dudas más comunes sobre nuestras experiencias.
          </motion.p>
        </div>
      </div>

      {/* Accordion FAQ */}
      <div className="space-y-4">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="p-4 rounded-xl bg-black/40 border border-white/5 cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <div className="flex justify-between items-center">
                <strong className="text-white">{item.q}</strong>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-300"
                >
                  <FiChevronDown />
                </motion.div>
              </div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-300 mt-2"
                  >
                    {item.a}
                  </motion.div>
                )}
              </AnimatePresence>

              
            </div>
          );
        })}
        
      </div>
      
    </div>
  );
}
