import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, product.sizes[0], product.colors[0]);
  };

  return (
    <Link to={`/producto/${product.slug}`} className="group block">
      <div className="relative overflow-hidden bg-stone-100 aspect-3/4 mb-4">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          onError={e => {
            e.target.src =
              'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800';
          }}
        />

        {/* Badges */}
        {discount && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-[9px] px-2 py-1 uppercase tracking-widest font-bold">
            -{discount}%
          </span>
        )}
        {!discount && product.tags?.includes('novedades') && (
          <span className="absolute top-3 left-3 bg-[#0a0908] text-white text-[9px] px-2 py-1 uppercase tracking-widest">
            Nuevo
          </span>
        )}

        {/* Quick add */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button
            onClick={handleAdd}
            className="w-full bg-[#0a0908] text-white py-3.5 text-[9px] uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag size={11} />
            Añadir a la bolsa
          </button>
        </div>
      </div>

      <h3 className="text-[13px] text-stone-800 font-medium mb-1 leading-snug">{product.name}</h3>
      <div className="flex items-center gap-2">
        <span className="text-[13px] font-semibold text-stone-900">{product.price.toFixed(2)}€</span>
        {product.oldPrice && (
          <span className="text-[12px] text-stone-400 line-through">{product.oldPrice.toFixed(2)}€</span>
        )}
      </div>
    </Link>
  );
}
