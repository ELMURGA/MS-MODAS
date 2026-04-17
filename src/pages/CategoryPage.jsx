import React, { useState, useMemo } from 'react';
import { SlidersHorizontal, X } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import { products, categoryMeta } from '../data/products';

export default function CategoryPage({ category }) {
  const [sortBy, setSortBy] = useState('default');
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeColor, setActiveColor] = useState('');

  const meta = categoryMeta[category] || {
    title: category.charAt(0).toUpperCase() + category.slice(1),
    subtitle: '',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070',
  };

  const filtered = useMemo(() => {
    let list =
      category === 'novedades'
        ? products.filter(p => p.tags?.includes('novedades'))
        : products.filter(p => p.category === category);

    if (activeColor) {
      list = list.filter(p => p.colors.some(c => c.toLowerCase().includes(activeColor.toLowerCase())));
    }

    if (sortBy === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sortBy === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [category, sortBy, activeColor]);

  const allColors = useMemo(() => {
    const set = new Set();
    (category === 'novedades'
      ? products.filter(p => p.tags?.includes('novedades'))
      : products.filter(p => p.category === category)
    ).forEach(p => p.colors.forEach(c => set.add(c)));
    return [...set];
  }, [category]);

  return (
    <div className="bg-[#f9f7f4] min-h-screen">
      {/* Category hero */}
      <div className="relative h-64 sm:h-80 overflow-hidden">
        <img
          src={meta.image}
          alt={meta.title}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-[10px] uppercase tracking-[0.35em] mb-3 opacity-70">MS Modas</p>
          <h1 className="font-serif text-4xl sm:text-5xl mb-2">{meta.title}</h1>
          {meta.subtitle && (
            <p className="text-sm opacity-70 max-w-md">{meta.subtitle}</p>
          )}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-8 pb-5 border-b border-stone-200">
          <p className="text-xs text-stone-400 uppercase tracking-wide">
            {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setFilterOpen(v => !v)}
              className="flex items-center gap-2 text-xs uppercase tracking-wide text-stone-500 hover:text-black transition-colors"
            >
              <SlidersHorizontal size={14} /> Filtros
            </button>
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="text-xs uppercase tracking-wide text-stone-500 bg-transparent border-none outline-none cursor-pointer hover:text-black transition-colors"
            >
              <option value="default">Ordenar</option>
              <option value="price-asc">Precio: menor a mayor</option>
              <option value="price-desc">Precio: mayor a menor</option>
              <option value="name">Nombre</option>
            </select>
          </div>
        </div>

        {/* Filter panel */}
        {filterOpen && (
          <div className="bg-white border border-stone-100 p-6 mb-8 animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs uppercase tracking-widest font-medium">Color</h3>
              {activeColor && (
                <button
                  onClick={() => setActiveColor('')}
                  className="flex items-center gap-1 text-xs text-stone-400 hover:text-black transition-colors"
                >
                  <X size={12} /> Limpiar
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {allColors.map(color => (
                <button
                  key={color}
                  onClick={() => setActiveColor(activeColor === color ? '' : color)}
                  className={`px-3 py-1.5 text-xs border transition-colors ${
                    activeColor === color
                      ? 'bg-black text-white border-black'
                      : 'border-stone-200 text-stone-600 hover:border-black hover:text-black'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-stone-400">
            <p className="text-lg mb-2">No se encontraron productos</p>
            <button onClick={() => { setActiveColor(''); setSortBy('default'); }} className="text-xs uppercase tracking-widest underline underline-offset-4">
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
            {filtered.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </div>
  );
}
