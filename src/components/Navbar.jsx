import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Search, Menu, X, User } from 'lucide-react';
import { useCart } from '../context/CartContext';

const navLinks = [
  { label: 'Novedades', path: '/novedades' },
  { label: 'Conjuntos', path: '/conjuntos' },
  { label: 'Camisetas', path: '/camisetas' },
  { label: 'Vestidos', path: '/vestidos' },
  { label: 'Pantalones', path: '/pantalones' },
  { label: 'Outlet', path: '/outlet', accent: true },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-[#0a0908] text-white text-center py-2.5 text-[10px] tracking-[0.2em] uppercase">
        <span className="opacity-70">Especial liquidación&nbsp;&nbsp;·&nbsp;&nbsp;</span>
        <span className="font-semibold">50% dto. en toda la web</span>
        <span className="opacity-70">&nbsp;&nbsp;·&nbsp;&nbsp;Tallas 42–56</span>
      </div>

      {/* Main Nav */}
      <nav
        className={`sticky top-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-white border-stone-200 shadow-[0_1px_20px_rgba(0,0,0,0.06)]'
            : 'bg-white/96 backdrop-blur-sm border-stone-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-17">

            {/* Mobile: hamburger left */}
            <div className="flex items-center lg:hidden w-10">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-1 text-stone-500 hover:text-black transition-colors"
              >
                {isMenuOpen ? <X size={21} /> : <Menu size={21} />}
              </button>
            </div>

            {/* Logo — centered on mobile, left on desktop */}
            <Link
              to="/"
              className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 lg:left-auto"
            >
              <img
                src="/img/logo.png"
                alt="MS Modas"
                className="h-8 w-auto object-contain select-none"
              />
            </Link>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center space-x-0.5">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 text-[11px] font-medium tracking-[0.18em] uppercase transition-colors relative group ${
                    link.accent
                      ? 'text-red-600 hover:text-red-700'
                      : location.pathname === link.path
                      ? 'text-black'
                      : 'text-stone-500 hover:text-black'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-4 right-4 h-px bg-black transition-transform origin-left ${
                      location.pathname === link.path && !link.accent
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </Link>
              ))}
            </div>

            {/* Right icons */}
            <div className="flex items-center space-x-3 lg:space-x-4 w-10 lg:w-auto justify-end">
              <button
                onClick={() => setSearchOpen(v => !v)}
                className="hidden sm:block text-stone-500 hover:text-black transition-colors p-1"
                aria-label="Buscar"
              >
                <Search size={17} />
              </button>
              <Link
                to="/mi-cuenta"
                className="hidden sm:block text-stone-500 hover:text-black transition-colors p-1"
                aria-label="Mi cuenta"
              >
                <User size={17} />
              </Link>
              <Link
                to="/carrito"
                className="text-stone-600 hover:text-black relative p-1 transition-colors"
                aria-label="Carrito"
              >
                <ShoppingBag size={17} />
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-1.5 bg-[#0a0908] text-white text-[9px] w-4.25 h-4.25 rounded-full flex items-center justify-center font-medium">
                    {count}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <div className="border-t border-stone-100 bg-white px-4 py-3 animate-fade-in">
            <div className="max-w-lg mx-auto flex items-center gap-3">
              <Search size={15} className="text-stone-300 shrink-0" />
              <input
                autoFocus
                type="text"
                placeholder="Buscar productos..."
                className="flex-1 text-sm outline-none text-stone-800 placeholder-stone-400 bg-transparent py-1"
              />
              <button onClick={() => setSearchOpen(false)}>
                <X size={15} className="text-stone-400 hover:text-black transition-colors" />
              </button>
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-stone-100 bg-white animate-fade-in">
            <div className="py-2 px-6">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between py-3.5 text-[11px] font-medium tracking-[0.18em] uppercase border-b border-stone-50 last:border-0 ${
                    link.accent ? 'text-red-600' : 'text-stone-700 hover:text-black'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-6 pt-4 pb-2">
                <Link to="/mi-cuenta" className="text-stone-400 text-xs hover:text-black transition-colors tracking-wide uppercase">Mi Cuenta</Link>
                <Link to="/contacto" className="text-stone-400 text-xs hover:text-black transition-colors tracking-wide uppercase">Contacto</Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
