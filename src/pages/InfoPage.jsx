import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const pages = {
  envios: {
    title: 'Envíos y Devoluciones',
    sections: [
      {
        heading: 'Envíos',
        items: [
          { q: '¿A dónde enviáis?', a: 'Enviamos a toda España peninsular, Islas Baleares, Islas Canarias, Ceuta y Melilla. También realizamos envíos internacionales a países de la Unión Europea.' },
          { q: '¿Cuánto tarda el envío?', a: 'Los pedidos se procesan en 24–48 horas laborables. Una vez enviado, el plazo de entrega es de 2–5 días laborables para la Península, y de 5–10 días para Canarias, Ceuta y Melilla.' },
          { q: '¿Cuánto cuesta el envío?', a: 'El envío es gratuito en pedidos superiores a 30€. Para pedidos inferiores, el coste de envío es de 3,99€.' },
        ],
      },
      {
        heading: 'Devoluciones',
        items: [
          { q: '¿Puedo devolver un pedido?', a: 'Sí. Tienes 14 días naturales desde la recepción del pedido para solicitar una devolución. El producto debe estar en perfecto estado, sin usar y con todas sus etiquetas.' },
          { q: '¿Cómo hago una devolución?', a: 'Contacta con nosotros a través del formulario de contacto indicando tu número de pedido y el motivo de la devolución. Te indicaremos los pasos a seguir.' },
          { q: '¿Cuándo recibo el reembolso?', a: 'Una vez recibida y verificada la devolución, procesamos el reembolso en un plazo de 3–5 días hábiles al mismo método de pago utilizado.' },
        ],
      },
    ],
  },
  'metodos-de-pago': {
    title: 'Métodos de Pago',
    sections: [
      {
        heading: 'Formas de pago aceptadas',
        items: [
          { q: 'Tarjeta de crédito/débito', a: 'Aceptamos Visa, Mastercard y American Express. El pago se procesa de forma segura mediante encriptación SSL.' },
          { q: 'PayPal', a: 'Puedes pagar cómodamente con tu cuenta PayPal de forma rápida y segura.' },
          { q: 'Transferencia bancaria', a: 'También aceptamos pago por transferencia bancaria. El pedido se procesará una vez confirmada la recepción del pago.' },
          { q: 'Bizum', a: 'Aceptamos pagos mediante Bizum para mayor comodidad de nuestros clientes españoles.' },
        ],
      },
      {
        heading: 'Seguridad',
        items: [
          { q: '¿Son seguros mis datos?', a: 'Sí. Todos los datos de pago se transmiten cifrados mediante protocolo SSL. No almacenamos datos de tarjetas en nuestros servidores.' },
        ],
      },
    ],
  },
  'aviso-legal': {
    title: 'Aviso Legal',
    sections: [
      {
        heading: 'Información general',
        items: [
          { q: 'Titular del sitio web', a: 'MS Modas es el titular y responsable del sitio web msmodas.com.' },
          { q: 'Actividad', a: 'Venta online de moda y complementos para tallas grandes.' },
          { q: 'Dominio', a: 'msmodas.com' },
        ],
      },
      {
        heading: 'Propiedad intelectual',
        items: [
          { q: 'Contenidos del sitio', a: 'Todos los contenidos del sitio web (textos, imágenes, diseños, logos) son propiedad de MS Modas o de sus licenciantes. Queda prohibida su reproducción total o parcial sin autorización previa por escrito.' },
        ],
      },
    ],
  },
  'politica-de-cookies': {
    title: 'Política de Cookies',
    sections: [
      {
        heading: '¿Qué son las cookies?',
        items: [
          { q: 'Definición', a: 'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestra web. Nos ayudan a mejorar tu experiencia de navegación.' },
        ],
      },
      {
        heading: 'Tipos de cookies que utilizamos',
        items: [
          { q: 'Cookies técnicas', a: 'Necesarias para el funcionamiento de la web (sesión, carrito de compras). No pueden desactivarse.' },
          { q: 'Cookies analíticas', a: 'Nos permiten analizar el uso de la web de forma anónima para mejorar nuestros servicios.' },
          { q: 'Cookies de personalización', a: 'Permiten recordar tus preferencias (idioma, región, etc.) para ofrecerte una mejor experiencia.' },
        ],
      },
    ],
  },
  'terminos-y-condiciones': {
    title: 'Términos y Condiciones',
    sections: [
      {
        heading: 'Condiciones generales de compra',
        items: [
          { q: 'Aceptación', a: 'Al realizar una compra en msmodas.com, el cliente acepta las presentes condiciones generales de venta.' },
          { q: 'Precios', a: 'Todos los precios mostrados en la web incluyen IVA. Los gastos de envío se especifican en el proceso de compra antes de la confirmación del pedido.' },
          { q: 'Disponibilidad', a: 'Los productos están sujetos a disponibilidad de stock. En caso de rotura de stock, nos pondremos en contacto contigo para ofrecerte alternativas o el reembolso completo.' },
        ],
      },
      {
        heading: 'Protección de datos',
        items: [
          { q: 'Datos personales', a: 'Los datos personales proporcionados serán tratados conforme a nuestra Política de Privacidad y a la normativa vigente de protección de datos (RGPD).' },
        ],
      },
    ],
  },
};

export default function InfoPage({ page }) {
  const data = pages[page];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#f9f7f4] flex flex-col items-center justify-center gap-4 text-center px-4">
        <h2 className="font-serif text-3xl">Página no encontrada</h2>
        <Link to="/" className="text-xs uppercase tracking-widest underline underline-offset-4 text-stone-400">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-[#f9f7f4] min-h-screen">
      <div className="bg-[#0a0908] text-white py-20 text-center">
        <p className="text-[10px] uppercase tracking-[0.35em] opacity-50 mb-3">MS Modas</p>
        <h1 className="font-serif text-4xl sm:text-5xl">{data.title}</h1>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {data.sections.map(section => (
          <div key={section.heading} className="mb-12">
            <h2 className="font-serif text-2xl text-[#0a0908] mb-6 pb-4 border-b border-stone-200">
              {section.heading}
            </h2>
            <div className="space-y-6">
              {section.items.map(item => (
                <div key={item.q}>
                  <h3 className="text-sm font-semibold text-[#0a0908] mb-2">{item.q}</h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="border-t border-stone-200 pt-8 mt-12">
          <p className="text-xs text-stone-400 mb-4">
            ¿Tienes alguna duda? Contacta con nosotros.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] border-b border-black pb-0.5 hover:text-stone-500 hover:border-stone-500 transition-colors"
          >
            Ir a contacto <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </div>
  );
}
