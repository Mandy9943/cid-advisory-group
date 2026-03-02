import Image from "next/image";
import { ArrowRight, MessageCircle, CheckCircle } from "lucide-react";
import { WHATSAPP_URL, CALENDLY_URL } from "@/lib/constants";

const benefits = [
  "Consulta gratuita",
  "Sin contratos forzosos",
  "Resultados en 30-90 días",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen w-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-bg">
        <Image
          src="/hero_professional_laptop.jpg"
          alt="Profesional trabajando en reparación de crédito en Miami"
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "65% 30%" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17]/70 via-[#0B0F17]/40 to-[#0B0F17]/50" />
      </div>

      {/* Left-bottom Text Block */}
      <div
        className="absolute glass-dark panel-radius p-6 md:p-8 hero-text"
        style={{
          left: "6vw",
          bottom: "10vh",
          width: "clamp(320px, 50vw, 640px)",
        }}
      >
        <div className="flex items-center gap-2 mb-4">
          <Image
            src="/logo.png"
            alt="CID Advisory Group"
            width={24}
            height={24}
            className="object-contain"
          />
          <span className="font-mono-label text-[#B8B9F3]">
            CID ADVISORY GROUP
          </span>
        </div>

        <h1 className="text-[clamp(32px,4.5vw,64px)] text-[#F6F7F9] font-black mb-4 leading-[1.05]">
          <span
            className="hero-word inline-block"
            style={{ "--i": 0 } as React.CSSProperties}
          >
            Revitaliza
          </span>{" "}
          <span
            className="hero-word inline-block"
            style={{ "--i": 1 } as React.CSSProperties}
          >
            Tu
          </span>{" "}
          <span
            className="hero-word inline-block"
            style={{ "--i": 2 } as React.CSSProperties}
          >
            Crédito
          </span>{" "}
          <span
            className="hero-word inline-block text-gradient"
            style={{ "--i": 3 } as React.CSSProperties}
          >
            Hoy.
          </span>
        </h1>

        <p className="text-[#A9B1C0] text-[clamp(14px,1.1vw,18px)] leading-relaxed mb-6">
          Servicios expertos de reparación de crédito y formación de negocios
          adaptados a tus necesidades. Construimos tu futuro financiero paso a
          paso.
        </p>

        <div className="flex flex-wrap gap-3 mb-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-[#B8B9F3]" />
              <span className="text-[#A9B1C0] text-xs">{benefit}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            Obtén tu consulta gratis
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-1"
          >
            WhatsApp
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Top-right Floating Card */}
      <div
        className="absolute glass-light panel-radius p-6 hidden lg:block hero-card"
        style={{
          right: "6vw",
          top: "18vh",
          width: "clamp(280px, 28vw, 380px)",
        }}
      >
        <div className="flex items-start gap-3">
          <div className="w-12 h-12 rounded-full bg-[#B8B9F3]/20 flex items-center justify-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="CID"
              width={28}
              height={28}
              className="object-contain"
            />
          </div>
          <div>
            <p className="text-[#0B0F17] font-bold text-base mb-1">
              Evaluación gratuita
            </p>
            <p className="text-[#4A5568] text-sm leading-relaxed">
              Descubre qué está afectando tu crédito y recibe un plan
              personalizado sin costo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
