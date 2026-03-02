"use client";

import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: '¿Cuánto tiempo toma ver resultados?',
    answer: 'La mayoría de nuestros clientes comienzan a ver mejoras en sus puntajes de crédito dentro de los primeros 30 a 90 días. Sin embargo, cada caso es único y depende de la complejidad de tu historial crediticio.',
  },
  {
    question: '¿Pueden eliminar reportes negativos?',
    answer: 'Trabajamos para disputar errores e inexactitudes en tu reporte de crédito. Si un reporte negativo es preciso y verificable, no podemos eliminarlo, pero te ayudaremos a construir estrategias para mitigar su impacto.',
  },
  {
    question: '¿Qué incluye la formación de negocio?',
    answer: 'Incluye la creación de tu LLC o Corporación, solicitud de EIN, apertura de cuenta bancaria empresarial, diseño de logo, correo electrónico profesional, y configuración de presencia digital básica.',
  },
  {
    question: '¿Hay contratos forzosos?',
    answer: 'No. Todos nuestros planes son mensuales y puedes cancelar en cualquier momento sin penalizaciones. Creemos en ganarnos tu confianza mes a mes con resultados.',
  },
  {
    question: '¿Cómo sé qué plan necesito?',
    answer: 'Durante tu consulta gratuita, evaluaremos tu situación específica y te recomendaremos el plan que mejor se adapte a tus objetivos financieros y empresariales.',
  },
  {
    question: '¿Ofrecen garantía?',
    answer: 'No podemos garantizar resultados específicos porque cada caso es diferente. Sin embargo, garantizamos nuestro compromiso de trabajar diligentemente en tu caso y mantenerte informado durante todo el proceso.',
  },
];

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const header = headerRef.current;
    const accordion = accordionRef.current;

    if (!section || !header || !accordion) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(header,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }
      );

      // Accordion items stagger animation
      const items = accordion.querySelectorAll('.faq-item');
      gsap.fromTo(items,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.08 }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-[8vh] px-[6vw]"
      style={{ background: '#F6F7F9' }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Header - Sticky on desktop */}
          <div ref={headerRef} className="lg:sticky lg:top-24 lg:self-start" style={{ opacity: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#B8B9F3]/20 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-[#0B0F17]" />
              </div>
              <span className="font-mono-label text-[#4A5568]">
                AYUDA
              </span>
            </div>
            <h2 className="text-[clamp(28px,3vw,40px)] text-[#0B0F17] font-black mb-3">
              Preguntas Frecuentes
            </h2>
            <p className="text-[#4A5568] text-[clamp(14px,1.1vw,17px)]">
              Respuestas claras para que tomes decisiones con confianza.
            </p>
          </div>

          {/* Right Accordion */}
          <div ref={accordionRef} className="lg:col-span-2 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item glass-light panel-radius overflow-hidden"
                style={{ opacity: 0 }}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#0B0F17]/5 transition-colors"
                >
                  <span className="text-[#0B0F17] font-semibold pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4A5568] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-48' : 'max-h-0'
                  }`}
                >
                  <p className="px-5 pb-5 text-[#4A5568] text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
