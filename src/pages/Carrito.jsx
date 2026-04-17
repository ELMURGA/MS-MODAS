import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Carrito() {
  const { cart, removeFromCart, updateQuantity, total, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#f9f7f4] flex flex-col items-center justify-center gap-6 px-4 text-center">
        <ShoppingBag size={48} className="text-stone-200" />
        <div>
          <h2 className="font-serif text-3xl text-[#0a0908] mb-2">Tu bolsa está vacía</h2>
          <p className="text-stone-400 text-sm mb-8">Explora nuestra colección y añade tus prendas favoritas.</p>
        </div>
        <Link
          to="/novedades"
          className="inline-flex items-center gap-2 bg-[#0a0908] text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] hover:bg-stone-800 transition-colors"
        >
          Explorar colección <ArrowRight size={12} />
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f9f7f4] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl text-[#0a0908]">Mi bolsa</h1>
          <button
            onClick={clearCart}
            className="text-xs text-stone-400 hover:text-black transition-colors uppercase tracking-wide underline underline-offset-4"
          >
            Vaciar bolsa
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Items */}
          <div className="lg:col-span-2 space-y-0">
            {cart.map(item => (
              <div key={item.key} className="flex gap-5 py-6 border-b border-stone-200 last:border-0">
                <Link to={`/producto/${item.slug}`} className="shrink-0">
                  <div className="w-24 h-32 bg-stone-100 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      onError={e => { e.target.src = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400'; }}
                    />
                  </div>
                </Link>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-2 mb-1">
                    <Link to={`/producto/${item.slug}`} className="font-medium text-sm text-[#0a0908] hover:text-stone-600 transition-colors leading-snug">
                      {item.name}
                    </Link>
                    <button onClick={() => removeFromCart(item.key)} className="text-stone-300 hover:text-red-500 transition-colors shrink-0">
                      <Trash2 size={14} />
                    </button>
                  </div>
                  <p className="text-xs text-stone-400 mb-1">{item.color} · {item.size}</p>
                  <p className="text-xs text-stone-400 mb-4">{item.material}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-0 border border-stone-200">
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-black transition-colors"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-black transition-colors"
                      >
                        <Plus size={12} />
                      </button>
                    </div>
                    <span className="font-semibold text-sm text-[#0a0908]">
                      {(item.price * item.quantity).toFixed(2)}€
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 sticky top-24">
              <h2 className="text-xs uppercase tracking-[0.22em] font-medium mb-6 pb-4 border-b border-stone-100">
                Resumen del pedido
              </h2>
              <div className="space-y-3 mb-6">
                {cart.map(item => (
                  <div key={item.key} className="flex justify-between text-sm text-stone-500">
                    <span className="truncate mr-2">{item.name} ×{item.quantity}</span>
                    <span className="shrink-0">{(item.price * item.quantity).toFixed(2)}€</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-stone-100 pt-4 mb-2">
                <div className="flex justify-between text-sm text-stone-500">
                  <span>Envío</span>
                  <span className="text-green-600 font-medium">Gratis</span>
                </div>
              </div>

              <div className="border-t border-stone-200 pt-4 mb-6">
                <div className="flex justify-between items-baseline">
                  <span className="text-sm font-medium uppercase tracking-wide">Total</span>
                  <span className="text-xl font-semibold text-[#0a0908]">{total.toFixed(2)}€</span>
                </div>
              </div>

              {/* Promo code */}
              <div className="mb-5">
                <div className="flex border border-stone-200 focus-within:border-black transition-colors">
                  <input
                    type="text"
                    placeholder="Código descuento"
                    className="flex-1 px-3 py-2.5 text-xs bg-transparent outline-none text-stone-700 placeholder-stone-400"
                  />
                  <button className="px-3 text-[10px] uppercase tracking-widest text-stone-500 hover:text-black transition-colors border-l border-stone-200">
                    Aplicar
                  </button>
                </div>
                <p className="text-[10px] text-stone-400 mt-1.5">Prueba con el código <strong>MS50</strong></p>
              </div>

              <button className="w-full bg-[#0a0908] text-white py-4 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2">
                Finalizar compra <ArrowRight size={13} />
              </button>

              <Link to="/novedades" className="block text-center mt-4 text-[10px] uppercase tracking-widest text-stone-400 hover:text-black transition-colors underline underline-offset-4">
                Seguir comprando
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
