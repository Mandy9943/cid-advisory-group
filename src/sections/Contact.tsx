"use client";

import { useRef, useEffect, useState } from "react";
import { Phone, Mail, Clock, MapPin, ArrowRight, MessageCircle } from "lucide-react";
import {
  WHATSAPP_URL,
  CALENDLY_URL,
  EMAIL,
  PHONE_DISPLAY,
} from "@/lib/constants";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.classList.add("in-view");
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola, soy ${formData.name}.\n\n${formData.message}\n\nEmail: ${formData.email}${formData.phone ? `\nTeléfono: ${formData.phone}` : ""}`
    );
    window.open(`${WHATSAPP_URL}?text=${text}`, "_blank");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-[8vh] px-[6vw]"
      style={{ background: "#0B0F17" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Form Panel */}
          <div className="glass-light panel-radius p-6 md:p-8 anim-fade-left">
            <span className="font-mono-label text-[#4A5568] block mb-3">
              CONTACTO
            </span>
            <h2 className="text-[clamp(28px,3vw,40px)] text-[#0B0F17] font-black mb-3">
              Hablemos
            </h2>
            <p className="text-[#4A5568] text-[clamp(14px,1.1vw,17px)] mb-6">
              Cuéntanos tu situación. Al enviar, se abrirá WhatsApp con tu
              mensaje.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#0B0F17] text-sm font-medium mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0F17]/5 border border-[#0B0F17]/10 text-[#0B0F17] placeholder-[#4A5568]/50 focus:outline-none focus:border-[#B8B9F3] focus:ring-2 focus:ring-[#B8B9F3]/20 transition-all"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label className="block text-[#0B0F17] text-sm font-medium mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0F17]/5 border border-[#0B0F17]/10 text-[#0B0F17] placeholder-[#4A5568]/50 focus:outline-none focus:border-[#B8B9F3] focus:ring-2 focus:ring-[#B8B9F3]/20 transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label className="block text-[#0B0F17] text-sm font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0F17]/5 border border-[#0B0F17]/10 text-[#0B0F17] placeholder-[#4A5568]/50 focus:outline-none focus:border-[#B8B9F3] focus:ring-2 focus:ring-[#B8B9F3]/20 transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-[#0B0F17] text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[#0B0F17]/5 border border-[#0B0F17]/10 text-[#0B0F17] placeholder-[#4A5568]/50 focus:outline-none focus:border-[#B8B9F3] focus:ring-2 focus:ring-[#B8B9F3]/20 transition-all resize-none"
                  placeholder="Cuéntanos sobre tu situación..."
                />
              </div>

              <button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                Enviar por WhatsApp
                <MessageCircle className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Details */}
          <div className="space-y-6 anim-fade-right">
            <div className="glass-dark panel-radius p-6">
              <h3 className="text-[#F6F7F9] font-bold text-lg mb-4">
                Información de Contacto
              </h3>

              <address className="space-y-4 not-italic">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#B8B9F3]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#B8B9F3]" />
                  </div>
                  <div>
                    <p className="text-[#A9B1C0] text-sm">WhatsApp</p>
                    <p className="text-[#F6F7F9] font-medium group-hover:text-[#B8B9F3] transition-colors">
                      {PHONE_DISPLAY}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-start gap-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#B8B9F3]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#B8B9F3]" />
                  </div>
                  <div>
                    <p className="text-[#A9B1C0] text-sm">Correo</p>
                    <p className="text-[#F6F7F9] font-medium group-hover:text-[#B8B9F3] transition-colors">
                      {EMAIL}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#B8B9F3]/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-[#B8B9F3]" />
                  </div>
                  <div>
                    <p className="text-[#A9B1C0] text-sm">Horario</p>
                    <p className="text-[#F6F7F9] font-medium">
                      Lun - Vie: 9am - 6pm
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#B8B9F3]/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-[#B8B9F3]" />
                  </div>
                  <div>
                    <p className="text-[#A9B1C0] text-sm">Ubicación</p>
                    <p className="text-[#F6F7F9] font-medium">Miami, FL</p>
                  </div>
                </div>
              </address>
            </div>

            <div className="glass-dark panel-radius p-6">
              <h3 className="text-[#F6F7F9] font-bold text-lg mb-3">
                Agenda una consulta gratuita
              </h3>
              <p className="text-[#A9B1C0] text-sm mb-4">
                Reserva un espacio en nuestro calendario y hablemos sobre tu
                situación.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 w-fit"
              >
                Agendar consulta
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
