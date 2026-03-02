"use client";

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/17864918308';
const CALENDLY_URL = 'https://calendly.com/cidadvisorygroup-info/nueva-reunion';

const benefits = [
  'Consulta gratuita',
  'Sin contratos forzosos',
  'Resultados en 30-90 días',
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textBlockRef = useRef<HTMLDivElement>(null);
  const floatingCardRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const textBlock = textBlockRef.current;
    const floatingCard = floatingCardRef.current;
    const headline = headlineRef.current;

    if (!section || !bg || !textBlock || !floatingCard || !headline) return;

    const ctx = gsap.context(() => {
      // Load animation timeline
      const loadTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Background fade in
      loadTl.fromTo(bg,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1.2 }
      );

      // Text block slide from left
      loadTl.fromTo(textBlock,
        { x: '-12vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.9 },
        '-=0.7'
      );

      // Headline words stagger
      const words = headline.querySelectorAll('.word');
      loadTl.fromTo(words,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.05 },
        '-=0.5'
      );

      // Floating card slide from right
      loadTl.fromTo(floatingCard,
        { x: '12vw', opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      );

    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0 }}
      >
        <img
          src="/hero_professional_laptop.jpg"
          alt="Professional working"
          className="w-full h-full object-cover"
          style={{ objectPosition: '65% 30%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17]/70 via-[#0B0F17]/40 to-[#0B0F17]/50" />
      </div>

      {/* Left-bottom Text Block */}
      <div
        ref={textBlockRef}
        className="absolute glass-dark panel-radius p-6 md:p-8"
        style={{
          left: '6vw',
          bottom: '10vh',
          width: 'clamp(320px, 50vw, 640px)',
          opacity: 0
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <img src="/logo.png" alt="CID Advisory Group" className="w-6 h-6 object-contain" />
          <span className="font-mono-label text-[#B8B9F3]">
            CID ADVISORY GROUP
          </span>
        </div>

        <h1
          ref={headlineRef}
          className="text-[clamp(32px,4.5vw,64px)] text-[#F6F7F9] font-black mb-4 leading-[1.05]"
        >
          <span className="word inline-block">Revitaliza</span>{' '}
          <span className="word inline-block">Tu</span>{' '}
          <span className="word inline-block">Crédito</span>{' '}
          <span className="word inline-block text-gradient">Hoy.</span>
        </h1>

        <p className="text-[#A9B1C0] text-[clamp(14px,1.1vw,18px)] leading-relaxed mb-6">
          Servicios expertos de reparación de crédito y formación de negocios adaptados a tus necesidades. Construimos tu futuro financiero paso a paso.
        </p>

        {/* Benefits */}
        <div className="flex flex-wrap gap-3 mb-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#B8B9F3]" />
              <span className="text-[#A9B1C0] text-xs">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center gap-2">
            Obtén tu consulta gratis
            <ArrowRight className="w-4 h-4" />
          </a>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center gap-1">
            WhatsApp
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Top-right Floating Card */}
      <div
        ref={floatingCardRef}
        className="absolute glass-light panel-radius p-6 hidden lg:block"
        style={{
          right: '6vw',
          top: '18vh',
          width: 'clamp(280px, 28vw, 380px)',
          opacity: 0
        }}
      >
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-[#B8B9F3]/20 flex items-center justify-center flex-shrink-0">
            <img src="/logo.png" alt="CID" className="w-7 h-7 object-contain" />
          </div>
          <div>
            <p className="text-[#0B0F17] font-bold text-base mb-1">
              Evaluación gratuita
            </p>
            <p className="text-[#4A5568] text-sm leading-relaxed">
              Descubre qué está afectando tu crédito y recibe un plan personalizado sin costo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
