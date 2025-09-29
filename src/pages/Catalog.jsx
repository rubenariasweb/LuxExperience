import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { EXPERIENCES } from "../data.js";

export default function Catalog({ addToCart = () => {} }) {
  const [category, setCategory] = useState("All");
  const [visible, setVisible] = useState(9);
  const categories = ["All", ...Array.from(new Set(EXPERIENCES.map((e) => e.category)))];
  const filtered = EXPERIENCES.filter((e) => category === "All" || e.category === category);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Hero / Header */}
      <div className="relative rounded-2xl overflow-hidden mb-10">
        <img
          src="/media/horizontal1.jpg"
          alt="Catálogo experiencias"
          className="w-full h-64 object-cover brightness-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-wide"
          >
            Catálogo de Experiencias
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-3 max-w-2xl text-gray-200"
          >
            Explora una selección única de experiencias premium diseñadas para quienes buscan lujo,
            exclusividad y momentos inolvidables.
          </motion.p>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-white">Explora por categoría</h2>
        <div className="flex items-center gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-lg p-2 bg-black/50 border border-white/10 text-sm"
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.slice(0, visible).map((e) => (
          <motion.div
            key={e.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden glass border border-white/5 shadow-lg"
          >
            <img src={e.images[0]} className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-semibold text-lg">{e.title}</div>
                  <div className="text-sm text-gray-400">
                    {e.location} • {e.duration}
                  </div>
                </div>
                <div className="text-right font-bold text-yellow-400">€{e.price}</div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Link
                  to={"/experiencia/" + e.id}
                  className="text-sm px-3 py-2 border border-white/5 rounded-lg hover:bg-white/10 transition"
                >
                  Detalles
                </Link>
                <button
                  onClick={() => addToCart(e)}
                  className="text-sm px-3 py-2 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
                >
                  Reservar
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Botón cargar más */}
      <div className="mt-8 text-center">
        {visible < filtered.length ? (
          <button
            onClick={() => setVisible((v) => v + 6)}
            className="px-6 py-3 rounded-full bg-black/40 ring-1 ring-white/5 hover:bg-white/10 transition"
          >
            Cargar más
          </button>
        ) : (
          <div className="text-sm text-gray-400">No hay más resultados</div>
        )}
      </div>
    </div>
  );
}
