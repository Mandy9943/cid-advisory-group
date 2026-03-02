"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "@/lib/constants";

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-[8vh] px-[6vw]"
      style={{ background: "#F6F7F9" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Header */}
          <div className="lg:sticky lg:top-24 lg:self-start anim-fade-up">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#B8B9F3]/20 flex items-center justify-center">
                <HelpCircle className="w-5 h-5 text-[#0B0F17]" />
              </div>
              <span className="font-mono-label text-[#4A5568]">AYUDA</span>
            </div>
            <h2 className="text-[clamp(28px,3vw,40px)] text-[#0B0F17] font-black mb-3">
              Preguntas Frecuentes
            </h2>
            <p className="text-[#4A5568] text-[clamp(14px,1.1vw,17px)]">
              Respuestas claras para que tomes decisiones con confianza.
            </p>
          </div>

          {/* Right Accordion */}
          <div className="lg:col-span-2 space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="faq-item glass-light panel-radius overflow-hidden anim-fade-up anim-stagger"
                style={{ "--i": index } as React.CSSProperties}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#0B0F17]/5 transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[#0B0F17] font-semibold pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#4A5568] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-48" : "max-h-0"
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
