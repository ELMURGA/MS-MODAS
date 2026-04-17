import React, { useState } from 'react';
import { Mail, Clock, Send } from 'lucide-react';

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z" />
  </svg>
);

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', asunto: '', email: '', mensaje: '' });
  const [sent, setSent] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-[#f9f7f4] min-h-screen">
      {/* Header */}
      <div className="bg-[#0a0908] text-white py-20 text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] opacity-50 mb-3">MS Modas</p>
        <h1 className="font-serif text-4xl sm:text-5xl">Contacto</h1>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

          {/* Info */}
          <div className="lg:col-span-2">
            <h2 className="font-serif text-2xl text-[#0a0908] mb-8">Estamos aquí para ayudarte</h2>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-8 h-8 border border-stone-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={14} className="text-stone-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Horario de atención</p>
                  <p className="text-sm text-stone-700">Lunes a viernes: 9:00–18:00h</p>
                  <p className="text-sm text-stone-700">Sábados: 10:00–14:00h</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 border border-stone-200 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail size={14} className="text-stone-400" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-stone-400 mb-1">Email</p>
                  <p className="text-sm text-stone-700">info@msmodas.com</p>
                </div>
              </div>
            </div>

            <div className="border-t border-stone-200 pt-8">
              <p className="text-xs uppercase tracking-[0.22em] text-stone-400 mb-4">Redes sociales</p>
              <div className="flex gap-3">
                {[
                  { href: 'https://www.facebook.com/share/1A6eV5hXpK/', icon: <FacebookIcon />, label: 'Facebook' },
                  { href: 'https://www.instagram.com/msmodas.com_', icon: <InstagramIcon />, label: 'Instagram' },
                  { href: 'https://www.tiktok.com/@ms_modas', icon: <TikTokIcon />, label: 'TikTok' },
                ].map(s => (
                  <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label}
                    className="w-9 h-9 border border-stone-200 flex items-center justify-center text-stone-400 hover:text-black hover:border-black transition-colors">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {sent ? (
              <div className="bg-white p-10 text-center">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  <Send size={22} className="text-green-500" />
                </div>
                <h3 className="font-serif text-2xl text-[#0a0908] mb-3">¡Mensaje enviado!</h3>
                <p className="text-stone-400 text-sm max-w-xs mx-auto">
                  Nos pondremos en contacto contigo en el menor tiempo posible. ¡Gracias!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 space-y-5">
                <h3 className="font-serif text-xl text-[#0a0908] mb-2">Envíanos un mensaje</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.22em] text-stone-400 mb-1.5">
                      Nombre *
                    </label>
                    <input
                      name="nombre"
                      required
                      value={form.nombre}
                      onChange={handleChange}
                      className="w-full border border-stone-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors bg-transparent"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.22em] text-stone-400 mb-1.5">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className="w-full border border-stone-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors bg-transparent"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.22em] text-stone-400 mb-1.5">
                    Asunto *
                  </label>
                  <input
                    name="asunto"
                    required
                    value={form.asunto}
                    onChange={handleChange}
                    className="w-full border border-stone-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors bg-transparent"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.22em] text-stone-400 mb-1.5">
                    Mensaje *
                  </label>
                  <textarea
                    name="mensaje"
                    required
                    rows={5}
                    value={form.mensaje}
                    onChange={handleChange}
                    className="w-full border border-stone-200 px-4 py-3 text-sm outline-none focus:border-black transition-colors bg-transparent resize-none"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0a0908] text-white py-4 text-[11px] uppercase tracking-[0.22em] font-medium hover:bg-stone-800 transition-colors flex items-center justify-center gap-2"
                >
                  Enviar mensaje <Send size={13} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
