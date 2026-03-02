"use client";

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Check, Star, ArrowRight } from 'lucide-react';

const plans = [
  {
    name: 'Reparación de Crédito',
    price: '$99',
    period: '/mes',
    description: 'Para quienes quieren mejorar su puntaje y sanear su historial.',
    features: [
      'Análisis completo de crédito',
      'Estrategia personalizada',
      'Disputas de reportes negativos',
      'Seguimiento mensual',
      'Soporte por email',
    ],
    cta: 'Comenzar',
    featured: false,
  },
  {
    name: 'Negocio + Crédito',
    price: '$199',
    period: '/mes',
    description: 'El paquete completo: repara tu crédito y lanza tu negocio.',
    features: [
      'Todo lo de Reparación de Crédito',
      'Formación de LLC/Corp',
      'Solicitud de EIN',
      'Diseño de logo básico',
      'Sitio web profesional',
      'Asesoría empresarial',
    ],
    cta: 'Comenzar',
    featured: true,
  },
  {
    name: 'Asesoría Empresarial',
    price: '$299',
    period: '/mes',
    description: 'Para empresarios que necesitan soporte avanzado y crecimiento.',
    features: [
      'Todo lo de Negocio + Crédito',
      'Automatización de procesos',
      'CRM y embudos de ventas',
      'Estrategia de marketing',
      'Soporte prioritario 24/7',
      'Reuniones mensuales',
    ],
    cta: 'Comenzar',
    featured: false,
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const cards = cardsRef.current;

    if (!section || !header || !cards) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(header,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );

      // Cards stagger animation
      const cardItems = cards.querySelectorAll('.pricing-card');
      gsap.fromTo(cardItems,
        { y: 28, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.15 }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-[8vh] px-[6vw]"
      style={{ background: '#0B0F17' }}
    >
      <div ref={headerRef} className="text-center mb-12" style={{ opacity: 0 }}>
        <span className="font-mono-label text-[#A9B1C0] block mb-3">
          PRECIOS
        </span>
        <h2 className="text-[clamp(32px,3.6vw,52px)] text-[#F6F7F9] font-black mb-3">
          Planes y Precios
        </h2>
        <p className="text-[#A9B1C0] text-[clamp(14px,1.1vw,18px)] max-w-xl mx-auto">
          Elige el que se ajuste a tu meta.
        </p>
      </div>

      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`pricing-card panel-radius p-6 hover:-translate-y-1.5 transition-transform duration-300 ${
              plan.featured
                ? 'bg-[#F6F7F9]/10 border-2 border-[#B8B9F3]'
                : 'bg-[#F6F7F9]/5 border border-[#F6F7F9]/10'
            }`}
            style={{ opacity: 0 }}
          >
            {plan.featured && (
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-4 h-4 text-[#B8B9F3] fill-[#B8B9F3]" />
                <span className="text-[#B8B9F3] font-mono text-xs uppercase tracking-wider">
                  Más Popular
                </span>
              </div>
            )}

            <h3 className="text-[#F6F7F9] font-bold text-xl mb-2">{plan.name}</h3>
            <p className="text-[#A9B1C0] text-sm mb-4">{plan.description}</p>

            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-[#F6F7F9] font-black text-4xl">{plan.price}</span>
              <span className="text-[#A9B1C0] text-sm">{plan.period}</span>
            </div>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-[#B8B9F3] flex-shrink-0 mt-0.5" />
                  <span className="text-[#A9B1C0] text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-200 ${
              plan.featured
                ? 'bg-[#B8B9F3] text-[#0B0F17] hover:bg-[#a8a9e3]'
                : 'bg-transparent text-[#F6F7F9] border border-[#F6F7F9]/30 hover:bg-[#F6F7F9]/10'
            }`}>
              {plan.cta}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <p className="text-center text-[#A9B1C0] text-sm mt-8">
        Sin contratos de largo plazo. Cancela cuando quieras.
      </p>
    </section>
  );
}
