"use client";

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Search, Target, BookOpen, Wallet, TrendingUp } from 'lucide-react';

const services = [
  { icon: Search, text: 'Análisis personalizado de crédito' },
  { icon: Target, text: 'Estrategias especializadas' },
  { icon: BookOpen, text: 'Recursos educativos' },
  { icon: Wallet, text: 'Gestión de deudas' },
];

export default function CreditServices() {
  const sectionRef = useRef<HTMLElement>(null);
  const whitePanelRef = useRef<HTMLDivElement>(null);
  const miniPanelRef = useRef<HTMLDivElement>(null);
  const bulletsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const whitePanel = whitePanelRef.current;
    const miniPanel = miniPanelRef.current;
    const bullets = bulletsRef.current;

    if (!section || !whitePanel || !miniPanel || !bullets) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // White panel from left
      tl.fromTo(whitePanel,
        { x: '-60vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 },
        0
      );

      // Bullets stagger
      const bulletItems = bullets.querySelectorAll('.bullet-item');
      tl.fromTo(bulletItems,
        { x: '-6vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.08 },
        0.3
      );

      // Mini panel from right
      tl.fromTo(miniPanel,
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 },
        0
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/credit_couple_documents.jpg"
          alt="Professionals reviewing documents"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0B0F17]/50 via-transparent to-[#0B0F17]/40" />
      </div>

      {/* Left White Info Panel */}
      <div
        ref={whitePanelRef}
        className="absolute glass-light panel-radius p-6 md:p-8"
        style={{
          left: '6vw',
          top: '18vh',
          width: 'clamp(320px, 40vw, 520px)',
          opacity: 0
        }}
      >
        <span className="font-mono-label text-[#4A5568] block mb-4">
          ANÁLISIS Y ESTRATEGIA
        </span>

        <h2 className="text-[clamp(28px,3.2vw,44px)] text-[#0B0F17] font-black mb-4 leading-[1.05]">
          Servicios de Reparación de Crédito
        </h2>

        <p className="text-[#4A5568] text-[clamp(14px,1.1vw,17px)] leading-relaxed mb-6">
          Evaluamos tu historial, identificamos errores y construimos un plan para mejorar tu puntaje.
        </p>

        <div ref={bulletsRef} className="space-y-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bullet-item flex items-center gap-3 p-3 rounded-xl bg-[#0B0F17]/5 hover:bg-[#0B0F17]/10 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-[#B8B9F3]/20 flex items-center justify-center flex-shrink-0">
                <service.icon className="w-4 h-4 text-[#0B0F17]" />
              </div>
              <span className="text-[#0B0F17] font-medium text-sm">{service.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right-bottom Dark Mini Panel */}
      <div
        ref={miniPanelRef}
        className="absolute glass-dark panel-radius p-6 hidden md:block"
        style={{
          right: '6vw',
          bottom: '10vh',
          width: 'clamp(280px, 34vw, 420px)',
          opacity: 0
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[#B8B9F3]/20 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-[#B8B9F3]" />
          </div>
          <h3 className="text-[#F6F7F9] font-bold text-lg">Resultados medibles</h3>
        </div>
        <p className="text-[#A9B1C0] text-sm leading-relaxed">
          Seguimiento mensual y ajustes para mantener el progreso. Nuestros clientes ven mejoras en promedio en 45 días.
        </p>
      </div>
    </section>
  );
}
