"use client";

import { Mail, MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/17864918308';
const CALENDLY_URL = 'https://calendly.com/cidadvisorygroup-info/nueva-reunion';
const TIKTOK_URL = 'https://www.tiktok.com/@yoan_cid';

const footerLinks = {
  servicios: [
    { label: 'Reparación de Crédito', href: '#servicios' },
    { label: 'Formación de LLC/Corp', href: '#servicios' },
    { label: 'Asesoría Empresarial', href: '#servicios' },
  ],
  navegacion: [
    { label: 'Proceso', href: '#proceso' },
    { label: 'Testimonios', href: '#testimonios' },
    { label: 'Preguntas Frecuentes', href: '#faq' },
    { label: 'Contacto', href: '#contacto' },
  ],
};

const stats = [
  { value: '5,000+', label: 'Clientes Satisfechos' },
  { value: '98%', label: 'Tasa de Éxito' },
  { value: '15+', label: 'Años de Experiencia' },
  { value: '24h', label: 'Tiempo de Respuesta' },
];

export default function Footer() {
  return (
    <footer className="w-full" style={{ background: '#0B0F17' }}>
      {/* Stats Banner */}
      <div className="border-b border-[#F6F7F9]/10">
        <div className="px-[6vw] py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-[#B8B9F3] font-black text-3xl md:text-4xl mb-1">{stat.value}</p>
                <p className="text-[#A9B1C0] text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="px-[6vw] py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#B8B9F3]/20 flex items-center justify-center overflow-hidden">
                  <img src="/logo.png" alt="CID Advisory Group" className="w-8 h-8 object-contain" />
                </div>
                <div>
                  <span className="text-[#F6F7F9] font-bold text-lg block">CID ADVISORY GROUP</span>
                  <span className="text-[#A9B1C0] text-xs">Tu futuro financiero, nuestro compromiso</span>
                </div>
              </div>

              <p className="text-[#A9B1C0] text-sm leading-relaxed mb-6">
                Ayudamos a individuos y empresarios a construir un futuro financiero sólido mediante reparación de crédito, formación de negocios y asesoría empresarial integral.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#B8B9F3]/20 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-[#B8B9F3]" />
                  </div>
                  <span className="text-[#F6F7F9] text-sm group-hover:text-[#B8B9F3] transition-colors">+1 (786) 491-8308</span>
                </a>
                <a href="mailto:info@cidadvisorygroup.com" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-[#B8B9F3]/20 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-[#B8B9F3]" />
                  </div>
                  <span className="text-[#F6F7F9] text-sm group-hover:text-[#B8B9F3] transition-colors">info@cidadvisorygroup.com</span>
                </a>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#B8B9F3]/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-[#B8B9F3]" />
                  </div>
                  <span className="text-[#F6F7F9] text-sm">Miami, FL</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#B8B9F3]/20 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#B8B9F3]" />
                  </div>
                  <span className="text-[#F6F7F9] text-sm">Lun - Vie: 9am - 6pm EST</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 rounded-lg bg-[#F6F7F9]/5 flex items-center justify-center hover:bg-[#B8B9F3]/20 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#A9B1C0]" />
                </a>
                <a
                  href={TIKTOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="w-10 h-10 rounded-lg bg-[#F6F7F9]/5 flex items-center justify-center hover:bg-[#B8B9F3]/20 transition-colors"
                >
                  <svg className="w-4 h-4 text-[#A9B1C0]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.71a8.19 8.19 0 004.76 1.52V6.79a4.85 4.85 0 01-1-.1z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-[#F6F7F9] font-semibold mb-4 text-sm uppercase tracking-wider">Servicios</h4>
                <ul className="space-y-2">
                  {footerLinks.servicios.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-[#A9B1C0] text-sm hover:text-[#B8B9F3] transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-[#F6F7F9] font-semibold mb-4 text-sm uppercase tracking-wider">Navegación</h4>
                <ul className="space-y-2">
                  {footerLinks.navegacion.map((link, index) => (
                    <li key={index}>
                      <a href={link.href} className="text-[#A9B1C0] text-sm hover:text-[#B8B9F3] transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA Column */}
            <div className="lg:col-span-3">
              <h4 className="text-[#F6F7F9] font-semibold mb-4 text-sm uppercase tracking-wider">Contáctanos</h4>
              <p className="text-[#A9B1C0] text-sm mb-6">
                Agenda tu consulta gratuita o escríbenos por WhatsApp para comenzar a transformar tu futuro financiero.
              </p>

              <div className="space-y-3">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center text-sm py-3 block"
                >
                  Agendar consulta
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center text-sm py-3 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#F6F7F9]/10">
        <div className="px-[6vw] py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#A9B1C0] text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} CID Advisory Group. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-[#F6F7F9]/5">
        <div className="px-[6vw] py-4">
          <p className="text-[#A9B1C0]/50 text-xs text-center max-w-4xl mx-auto">
            CID Advisory Group no garantiza resultados específicos. Los resultados varían según cada situación individual.
            La información proporcionada es solo para fines educativos y no constituye asesoramiento legal, financiero o de inversión.
            Consulta con un profesional calificado antes de tomar decisiones financieras importantes.
          </p>
        </div>
      </div>
    </footer>
  );
}
