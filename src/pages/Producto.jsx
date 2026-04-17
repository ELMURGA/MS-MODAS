import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Heart, Package, RotateCcw, Shield } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function Producto() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = products.find(p => p.slug === slug);

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#f9f7f4] flex flex-col items-center justify-center gap-4 text-center px-4">
        <h2 className="font-serif text-3xl">Producto no encontrado</h2>
        <Link to="/" className="text-xs uppercase tracking-widest underline underline-offset-4 text-stone-500">
          Volver al inicio
        </Link>
      </div>
    );
  }

  const related = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  const handleAddToCart = () => {
    const size = selectedSize || product.sizes[0];
    const color = selectedColor || product.colors[0];
    addToCart(product, size, color);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-[#f9f7f4] min-h-screen">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex items-center gap-2 text-[11px] text-stone-400 uppercase tracking-wide">
          <Link to="/" className="hover:text-black transition-colors">Inicio</Link>
          <span>/</span>
          <Link to={`/${product.category}`} className="hover:text-black transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-stone-700">{product.name}</span>
        </div>
      </div>

      {/* Product detail */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <div className="relative bg-stone-100 aspect-3/4 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              onError={e => {
                e.target.src = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800';
              }}
            />
            {discount && (
              <span className="absolute top-4 left-4 bg-red-600 text-white text-[10px] px-3 py-1.5 uppercase tracking-widest font-bold">
                -{discount}%
              </span>
            )}
          </div>

          {/* Info */}
          <div className="py-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mb-3">{product.category}</p>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#0a0908] mb-4 leading-tight">{product.name}</h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-semibold text-[#0a0908]">{product.price.toFixed(2)}€</span>
              {product.oldPrice && (
                <>
                  <span className="text-lg text-stone-400 line-through">{product.oldPrice.toFixed(2)}€</span>
                  <span className="bg-red-50 text-red-600 text-xs px-2 py-0.5 font-medium">-{discount}%</span>
                </>
              )}
            </div>

            <p className="text-sm text-stone-500 leading-relaxed mb-8 border-t border-b border-stone-100 py-6">
              {product.description}
            </p>

            {/* Material */}
            <div className="mb-5">
              <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-1">Material</p>
              <p className="text-sm text-stone-700">{product.material}</p>
            </div>

            {/* Color selector */}
            <div className="mb-5">
              <div className="flex items-center justify-between mb-2">
                <p className="text-[10px] uppercase tracking-widest text-stone-400">Color</p>
                {selectedColor && <span className="text-xs text-stone-500">{selectedColor}</span>}
              </div>
              <div className="flex flex-wrap gap-2">
                {product.colors.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-3 py-1.5 text-xs border transition-colors ${
                      selectedColor === color
                        ? 'bg-[#0a0908] text-white border-[#0a0908]'
                        : 'border-stone-200 text-stone-600 hover:border-[#0a0908]'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-widest text-stone-400 mb-2">Talla</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 text-xs border transition-colors ${
                      selectedSize === size
                        ? 'bg-[#0a0908] text-white border-[#0a0908]'
                        : 'border-stone-200 text-stone-600 hover:border-[#0a0908]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex gap-3 mb-8">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 text-[11px] uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all ${
                  added
                    ? 'bg-green-600 text-white'
                    : 'bg-[#0a0908] text-white hover:bg-stone-800'
                }`}
              >
                <ShoppingBag size={14} />
                {added ? '¡Añadido!' : 'Añadir a la bolsa'}
              </button>
              <button className="w-14 border border-stone-200 flex items-center justify-center text-stone-400 hover:text-red-500 hover:border-red-200 transition-colors">
                <Heart size={16} />
              </button>
            </div>

            {/* Guarantees */}
            <div className="space-y-3 border-t border-stone-100 pt-6">
              {[
                { icon: Package, text: 'Envío a toda España' },
                { icon: RotateCcw, text: 'Devoluciones gratuitas' },
                { icon: Shield, text: 'Pago 100% seguro' },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-xs text-stone-400">
                  <Icon size={14} className="shrink-0" />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-24">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#0a0908] mb-10 text-center">También te puede gustar</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
