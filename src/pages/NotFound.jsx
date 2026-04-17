import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#f9f7f4] flex flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-[10px] uppercase tracking-[0.35em] text-stone-400">MS Modas</p>
      <h1 className="font-serif text-7xl sm:text-9xl text-stone-200">404</h1>
      <div>
        <h2 className="font-serif text-2xl text-[#0a0908] mb-2">Página no encontrada</h2>
        <p className="text-stone-400 text-sm">La página que buscas no existe o ha sido movida.</p>
      </div>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-[#0a0908] text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors"
      >
        Volver al inicio <ArrowRight size={12} />
      </Link>
    </div>
  );
}
