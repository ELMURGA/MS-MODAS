import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { User, Package, Heart, LogOut, ChevronRight } from 'lucide-react';

export default function MiCuenta() {
  const [tab, setTab] = useState('perfil');
  const [isLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <div className="bg-[#f9f7f4] min-h-screen">
        <div className="bg-[#0a0908] text-white py-20 text-center">
          <p className="text-[10px] uppercase tracking-[0.35em] opacity-50 mb-3">MS Modas</p>
          <h1 className="font-serif text-4xl sm:text-5xl">Mi Cuenta</h1>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Login */}
            <div className="bg-white p-8">
              <h2 className="font-serif text-2xl text-[#0a0908] mb-2">Iniciar sesión</h2>
              <p className="text-stone-400 text-sm mb-7">Accede a tu cuenta para ver tus pedidos y gestionar tus datos.</p>
              <form onSubmit={e => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full border border-stone-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1.5">Contraseña</label>
                  <input
                    type="password"
                    className="w-full border border-stone-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                    placeholder="••••••••"
                  />
                </div>
                <div className="flex items-center justify-between pt-1">
                  <button type="button" className="text-xs text-stone-400 hover:text-black transition-colors underline underline-offset-4">
                    ¿Olvidaste tu contraseña?
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#0a0908] text-white py-4 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-stone-800 transition-colors"
                >
                  Iniciar sesión
                </button>
              </form>
            </div>

            {/* Register */}
            <div className="bg-white p-8">
              <h2 className="font-serif text-2xl text-[#0a0908] mb-2">Crear cuenta</h2>
              <p className="text-stone-400 text-sm mb-7">Regístrate para acceder a ofertas exclusivas y gestionar tus compras fácilmente.</p>
              <form onSubmit={e => e.preventDefault()} className="space-y-4">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1.5">Nombre completo</label>
                  <input
                    type="text"
                    className="w-full border border-stone-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1.5">Email</label>
                  <input
                    type="email"
                    className="w-full border border-stone-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-stone-400 mb-1.5">Contraseña</label>
                  <input
                    type="password"
                    className="w-full border border-stone-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                    placeholder="Mínimo 8 caracteres"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full border border-[#0a0908] text-[#0a0908] py-4 text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#0a0908] hover:text-white transition-colors"
                >
                  Crear cuenta
                </button>
              </form>
            </div>
          </div>

          {/* Benefits */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { icon: Package, title: 'Historial de pedidos', desc: 'Consulta el estado de tus compras en tiempo real' },
              { icon: Heart, title: 'Lista de deseos', desc: 'Guarda tus prendas favoritas para comprar después' },
              { icon: User, title: 'Datos guardados', desc: 'No vuelvas a escribir tu dirección en cada compra' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white p-6 text-center">
                <Icon size={22} className="text-stone-300 mx-auto mb-3" />
                <p className="text-sm font-medium text-[#0a0908] mb-1">{title}</p>
                <p className="text-xs text-stone-400 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
