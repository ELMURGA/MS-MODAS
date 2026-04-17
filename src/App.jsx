import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import Producto from './pages/Producto';
import Carrito from './pages/Carrito';
import Contacto from './pages/Contacto';
import MiCuenta from './pages/MiCuenta';
import InfoPage from './pages/InfoPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/novedades" element={<CategoryPage category="novedades" />} />
              <Route path="/conjuntos" element={<CategoryPage category="conjuntos" />} />
              <Route path="/camisetas" element={<CategoryPage category="camisetas" />} />
              <Route path="/vestidos" element={<CategoryPage category="vestidos" />} />
              <Route path="/pantalones" element={<CategoryPage category="pantalones" />} />
              <Route path="/outlet" element={<CategoryPage category="outlet" />} />
              <Route path="/producto/:slug" element={<Producto />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/mi-cuenta" element={<MiCuenta />} />
              <Route path="/envios" element={<InfoPage page="envios" />} />
              <Route path="/metodos-de-pago" element={<InfoPage page="metodos-de-pago" />} />
              <Route path="/aviso-legal" element={<InfoPage page="aviso-legal" />} />
              <Route path="/politica-de-cookies" element={<InfoPage page="politica-de-cookies" />} />
              <Route path="/terminos-y-condiciones" element={<InfoPage page="terminos-y-condiciones" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
