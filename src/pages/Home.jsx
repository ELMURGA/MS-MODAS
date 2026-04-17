import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, RotateCcw, Ruler, CreditCard } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const marqueeText = 'NUEVA COLECCIÓN · TALLAS 46–56 · ENVÍOS A TODA ESPAÑA · ESPECIAL LIQUIDACIÓN · CÓDIGO MS50 · ';

const heroSlides = [
  {
    img: '/img/hero1.jpg',
    tag: 'Nueva colección · Primavera–Verano 2026',
    title: 'Moda para\ntodas',
    sub: 'Prendas diseñadas para tallas grandes con estilo, comodidad y calidad real.',
  },
  {
    img: '/img/hero2.jpg',
    tag: 'Especial liquidación · Código MS50',
    title: '50% de\ndescuento',
    sub: 'Hasta el domingo a las 23:59h · Tallas 46–56 · Envíos a toda España.',
  },
];

export default function Home() {
  const newArrivals = products.filter(p => p.tags?.includes('novedades')).slice(0, 8);
  const outletItems = products.filter(p => p.category === 'outlet').slice(0, 4);

  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 900);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % heroSlides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + heroSlides.length) % heroSlides.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(next, 5500);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div className="bg-[#f9f7f4]">

      {/* Hero Carousel */}
      <section className="relative h-[92vh] min-h-140 overflow-hidden bg-[#0a0908]">
        {/* Slides */}
        {heroSlides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
          >
            <img
              src={slide.img}
              alt={`MS Modas slide ${i + 1}`}
              className="w-full h-full object-cover object-center"
              style={{
                transform: i === current ? 'scale(1.04)' : 'scale(1)',
                transition: 'transform 6s ease-out',
              }}
            />
            <div className="absolute inset-0 bg-black/45" />
          </div>
        ))}

        {/* Centered content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
          {/* Logo */}
          <img
            src="/img/logo.png"
            alt="MS Modas"
            className="h-14 sm:h-16 w-auto object-contain mb-8 brightness-0 invert opacity-90"
          />
          <p
            key={`tag-${current}`}
            className="text-[10px] uppercase tracking-[0.38em] opacity-60 mb-5 animate-fade-in"
          >
            {heroSlides[current].tag}
          </p>
          <h1
            key={`h-${current}`}
            className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.08] mb-6 animate-fade-in"
            style={{ whiteSpace: 'pre-line' }}
          >
            {heroSlides[current].title}
          </h1>
          <p
            key={`sub-${current}`}
            className="text-sm sm:text-base font-light opacity-75 max-w-md leading-relaxed mb-10 animate-fade-in"
          >
            {heroSlides[current].sub}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/novedades"
              className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold hover:bg-stone-100 transition-colors"
            >
              Ver novedades <ArrowRight size={13} />
            </Link>
            <Link
              to="/outlet"
              className="inline-flex items-center gap-3 border border-white/55 text-white px-8 py-4 text-[11px] uppercase tracking-[0.2em] hover:border-white hover:bg-white/10 transition-colors"
            >
              Outlet · 50% dto
            </Link>
          </div>
        </div>

        {/* Prev / Next arrows */}
        <button
          onClick={prev}
          aria-label="Anterior"
          className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="15 18 9 12 15 6" /></svg>
        </button>
        <button
          onClick={next}
          aria-label="Siguiente"
          className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-white/30 flex items-center justify-center text-white hover:bg-white/15 transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="9 18 15 12 9 6" /></svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Ir a slide ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width: i === current ? '28px' : '8px',
                height: '3px',
                backgroundColor: 'white',
                opacity: i === current ? 0.9 : 0.35,
                border: 'none',
                cursor: 'pointer',
              }}
            />
          ))}
        </div>

        {/* Slide counter */}
        <div className="absolute bottom-8 right-6 sm:right-10 z-20 text-white/40 text-[10px] tracking-[0.2em]">
          {String(current + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
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
            { icon: <Truck size={20} strokeWidth={1.5} />, title: 'Envío a toda España', sub: 'Entrega rápida y segura' },
            { icon: <RotateCcw size={20} strokeWidth={1.5} />, title: 'Devolución fácil', sub: 'Gestión sin complicaciones' },
            { icon: <Ruler size={20} strokeWidth={1.5} />, title: 'Tallas 46–56', sub: 'Moda para todas' },
            { icon: <CreditCard size={20} strokeWidth={1.5} />, title: 'Pago seguro', sub: 'Múltiples métodos' },
          ].map(v => (
            <div key={v.title}>
              <div className="flex justify-center mb-3 text-stone-400">{v.icon}</div>
              <p className="text-xs font-semibold uppercase tracking-wide text-[#0a0908] mb-1">{v.title}</p>
              <p className="text-xs text-stone-400">{v.sub}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
