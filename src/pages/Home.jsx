import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const marqueeText = 'NUEVA COLECCIÓN · TALLAS 46–56 · ENVÍOS A TODA ESPAÑA · ESPECIAL LIQUIDACIÓN · CÓDIGO MS50 · ';

export default function Home() {
  const newArrivals = products.filter(p => p.tags?.includes('novedades')).slice(0, 8);
  const outletItems = products.filter(p => p.category === 'outlet').slice(0, 4);

  return (
    <div className="bg-[#f9f7f4]">

      {/* Hero */}
      <section className="relative h-[92vh] min-h-140 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop"
          alt="MS Modas Colección"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/55 via-black/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-full flex items-center">
          <div className="max-w-lg text-white">
            <p className="text-[10px] uppercase tracking-[0.35em] mb-5 opacity-80">
              Colección Primavera–Verano 2026
            </p>
            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Moda para<br />todas
            </h1>
            <p className="text-base sm:text-lg font-light opacity-85 leading-relaxed mb-3">
              Prendas diseñadas para tallas grandes con estilo, comodidad y calidad real.
            </p>
            <p className="text-sm opacity-60 mb-10 tracking-wide">Tallas 46–56 · Envíos a toda España</p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/novedades"
                className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-stone-100 transition-colors"
              >
                Ver novedades <ArrowRight size={14} />
              </Link>
              <Link
                to="/outlet"
                className="inline-flex items-center gap-3 border border-white/60 text-white px-8 py-4 text-[11px] uppercase tracking-[0.2em] hover:border-white hover:bg-white/10 transition-colors"
              >
                Outlet 50% dto
              </Link>
            </div>
          </div>
        </div>
        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <div className="w-px h-10 bg-white animate-pulse" />
        </div>
      </section>

      {/* Marquee */}
      <div className="bg-[#0a0908] overflow-hidden py-4">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array(8).fill(marqueeText).map((t, i) => (
            <span key={i} className="text-white text-[10px] tracking-[0.22em] uppercase mx-8 opacity-80">{t}</span>
          ))}
        </div>
      </div>

      {/* Category showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.28em] text-stone-400 mb-2">Explorar</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#0a0908]">Categorías</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: 'Conjuntos', path: '/conjuntos', img: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=900', span: 'lg:col-span-2 lg:row-span-2 sm:h-[500px]' },
            { label: 'Camisetas', path: '/camisetas', img: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=600' },
            { label: 'Vestidos', path: '/vestidos', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600' },
            { label: 'Pantalones', path: '/pantalones', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=600' },
            { label: 'Outlet', path: '/outlet', img: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=600', outlet: true },
          ].map(cat => (
            <Link
              key={cat.path}
              to={cat.path}
              className={`relative overflow-hidden group cursor-pointer block h-64 ${cat.span || ''}`}
            >
              <img
                src={cat.img}
                alt={cat.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className={`font-serif text-white text-xl mb-1 ${cat.span ? 'text-2xl sm:text-3xl' : ''}`}>{cat.label}</h3>
                <span className={`text-[9px] uppercase tracking-[0.22em] font-medium flex items-center gap-2 ${cat.outlet ? 'text-red-300' : 'text-white/70 group-hover:text-white'} transition-colors`}>
                  {cat.outlet ? '¡Hasta 50% dto!' : 'Comprar ahora'} <ArrowRight size={10} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-stone-400 mb-2">Recién llegado</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0a0908]">Novedades</h2>
            </div>
            <Link
              to="/novedades"
              className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] border-b border-black pb-0.5 hover:text-stone-500 hover:border-stone-500 transition-colors"
            >
              Ver todo <ArrowRight size={11} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {newArrivals.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
          <div className="mt-12 text-center sm:hidden">
            <Link to="/novedades" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest border-b border-black pb-0.5">
              Ver todo <ArrowRight size={11} />
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial banner */}
      <section className="relative h-[60vh] min-h-95 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop"
          alt="Editorial"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-6">
          <p className="text-[10px] uppercase tracking-[0.35em] mb-4 opacity-70">Especial liquidación</p>
          <h2 className="font-serif text-4xl sm:text-6xl mb-4">50% de descuento</h2>
          <p className="text-sm opacity-75 mb-8 max-w-md">En toda la web con el código MS50. Válido hasta el domingo a las 23:59h.</p>
          <Link
            to="/outlet"
            className="inline-flex items-center gap-3 border border-white px-8 py-4 text-[10px] uppercase tracking-[0.22em] hover:bg-white hover:text-black transition-colors"
          >
            Ir al outlet <ArrowRight size={12} />
          </Link>
        </div>
      </section>

      {/* Outlet preview */}
      <section className="bg-[#f9f7f4] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[10px] uppercase tracking-[0.28em] text-stone-400 mb-2">Hasta 50% dto.</p>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#0a0908]">Outlet</h2>
            </div>
            <Link to="/outlet" className="hidden sm:flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] border-b border-black pb-0.5 hover:text-stone-500 hover:border-stone-500 transition-colors">
              Ver todo <ArrowRight size={11} />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
            {outletItems.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="border-t border-stone-200 bg-white py-12">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: '🚚', title: 'Envío a toda España', sub: 'Entrega rápida y segura' },
            { icon: '↩️', title: 'Devolución fácil', sub: 'Gestión sin complicaciones' },
            { icon: '👗', title: 'Tallas 46–56', sub: 'Moda para todas' },
            { icon: '💳', title: 'Pago seguro', sub: 'Múltiples métodos' },
          ].map(v => (
            <div key={v.title}>
              <div className="text-2xl mb-3">{v.icon}</div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0a0908] mb-1">{v.title}</p>
              <p className="text-xs text-stone-400">{v.sub}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
