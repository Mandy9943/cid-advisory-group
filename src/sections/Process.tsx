"use client";

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ClipboardCheck, Lightbulb, Repeat, Clock } from 'lucide-react';

const steps = [
  { number: '01', icon: ClipboardCheck, text: 'Evaluación integral' },
  { number: '02', icon: Lightbulb, text: 'Estrategia personalizada' },
  { number: '03', icon: Repeat, text: 'Ejecución y seguimiento' },
];

export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);
  const whitePanelRef = useRef<HTMLDivElement>(null);
  const miniPanelRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const whitePanel = whitePanelRef.current;
    const miniPanel = miniPanelRef.current;
    const stepsEl = stepsRef.current;

    if (!section || !whitePanel || !miniPanel || !stepsEl) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // White panel from left
      tl.fromTo(whitePanel,
        { x: '-60vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 },
        0
      );

      // Steps stagger down
      const stepItems = stepsEl.querySelectorAll('.step-item');
      tl.fromTo(stepItems,
        { y: 18, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
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
          src="/process_desk_call.jpg"
          alt="Professional on phone call"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0B0F17]/50 via-transparent to-[#0B0F17]/40" />
      </div>

      {/* Center-left White Panel */}
      <div
        ref={whitePanelRef}
        className="absolute glass-light panel-radius p-6 md:p-8"
        style={{
          left: '6vw',
          top: '18vh',
          width: 'clamp(320px, 44vw, 540px)',
          opacity: 0
        }}
      >
        <span className="font-mono-label text-[#4A5568] block mb-4">
          PROCESO
        </span>

        <h2 className="text-[clamp(28px,3.2vw,44px)] text-[#0B0F17] font-black mb-4 leading-[1.05]">
          Cómo Funciona
        </h2>

        <p className="text-[#4A5568] text-[clamp(14px,1.1vw,17px)] leading-relaxed mb-6">
          Un enfoque claro: diagnóstico, plan, acción y seguimiento.
        </p>

        <div ref={stepsRef} className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-item flex items-center gap-4 p-4 rounded-xl bg-[#0B0F17]/5 hover:bg-[#0B0F17]/10 transition-colors"
            >
              <span className="text-[#B8B9F3] font-mono text-lg font-bold">
                {step.number}
              </span>
              <div className="w-10 h-10 rounded-lg bg-[#B8B9F3]/20 flex items-center justify-center flex-shrink-0">
                <step.icon className="w-5 h-5 text-[#0B0F17]" />
              </div>
              <span className="text-[#0B0F17] font-semibold">{step.text}</span>
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
            <Clock className="w-5 h-5 text-[#B8B9F3]" />
          </div>
          <h3 className="text-[#F6F7F9] font-bold text-lg">Tiempo estimado</h3>
        </div>
        <p className="text-[#A9B1C0] text-sm leading-relaxed">
          La mayoría de clientes ven cambios en 30–90 días. Los resultados varían según la complejidad de cada caso.
        </p>
      </div>
    </section>
  );
}
