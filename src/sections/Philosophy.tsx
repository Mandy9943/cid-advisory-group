"use client";

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { Users } from 'lucide-react';

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const whitePanelRef = useRef<HTMLDivElement>(null);
  const miniPanelRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const whitePanel = whitePanelRef.current;
    const miniPanel = miniPanelRef.current;
    const quote = quoteRef.current;

    if (!section || !whitePanel || !miniPanel || !quote) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // White panel from right
      tl.fromTo(whitePanel,
        { x: '60vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 },
        0
      );

      // Quote fade in
      tl.fromTo(quote,
        { y: 10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        0.4
      );

      // Mini panel from left
      tl.fromTo(miniPanel,
        { x: '-60vw', opacity: 0 },
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
          src="/trust_handshake.jpg"
          alt="Business handshake"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17]/50 via-transparent to-[#0B0F17]/40" />
      </div>

      {/* Right White Info Panel */}
      <div
        ref={whitePanelRef}
        className="absolute glass-light panel-radius p-6 md:p-8"
        style={{
          right: '6vw',
          top: '18vh',
          width: 'clamp(320px, 40vw, 520px)',
          opacity: 0
        }}
      >
        <span className="font-mono-label text-[#4A5568] block mb-4">
          NUESTRA FILOSOFÍA
        </span>

        <h2 className="text-[clamp(28px,3.2vw,44px)] text-[#0B0F17] font-black mb-4 leading-[1.05]">
          Toma el Control de Tu Futuro Financiero
        </h2>

        <p className="text-[#4A5568] text-[clamp(14px,1.1vw,17px)] leading-relaxed mb-6">
          Reconstruimos tu crédito con orientación experta y atención personalizada para un futuro más sólido.
        </p>

        <p
          ref={quoteRef}
          className="text-[#0B0F17] font-semibold text-lg italic border-l-4 border-[#B8B9F3] pl-4"
          style={{ opacity: 0 }}
        >
          "Crédito que puedes reconstruir. Confianza que puedes sentir."
        </p>
      </div>

      {/* Left-bottom Dark Mini Panel */}
      <div
        ref={miniPanelRef}
        className="absolute glass-dark panel-radius p-6 hidden md:block"
        style={{
          left: '6vw',
          bottom: '10vh',
          width: 'clamp(280px, 34vw, 420px)',
          opacity: 0
        }}
      >
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-full bg-[#B8B9F3]/20 flex items-center justify-center">
            <Users className="w-5 h-5 text-[#B8B9F3]" />
          </div>
          <h3 className="text-[#F6F7F9] font-bold text-lg">Enfoque personal</h3>
        </div>
        <p className="text-[#A9B1C0] text-sm leading-relaxed">
          Porque cada cliente importa. Progreso real, sin atajos. Tratamos tu caso como si fuera el nuestro.
        </p>
      </div>
    </section>
  );
}
