import Image from "next/image";
import { Building2, Landmark, Globe, Cpu, Rocket } from "lucide-react";
import AnimateOnView from "@/components/AnimateOnView";

const services = [
  { icon: Building2, text: "Formación de LLC / Corp" },
  { icon: Landmark, text: "Configuración bancaria y marca" },
  { icon: Globe, text: "Presencia digital y sitio web" },
  { icon: Cpu, text: "Automatización y herramientas" },
];

export default function BusinessServices() {
  return (
    <AnimateOnView>
      <section className="relative min-h-screen w-screen overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="/business_lobby_laptop.jpg"
            alt="Profesional en oficina trabajando en formación de negocios"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F17]/50 via-transparent to-[#0B0F17]/40" />
        </div>

        {/* Right White Info Panel */}
        <div
          className="absolute glass-light panel-radius p-6 md:p-8 anim-fade-right"
          style={{
            right: "6vw",
            top: "18vh",
            width: "clamp(320px, 40vw, 520px)",
          }}
        >
          <span className="font-mono-label text-[#4A5568] block mb-4">
            FORMACIÓN DE EMPRESAS
          </span>

          <h2 className="text-[clamp(28px,3.2vw,44px)] text-[#0B0F17] font-black mb-4 leading-[1.05]">
            Formación de Negocios
          </h2>

          <p className="text-[#4A5568] text-[clamp(14px,1.1vw,17px)] leading-relaxed mb-6">
            Desde la LLC hasta la marca: te ayudamos a lanzar con estructura y
            profesionalismo.
          </p>

          <div className="space-y-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="bullet-item flex items-center gap-3 p-3 rounded-xl bg-[#0B0F17]/5 hover:bg-[#0B0F17]/10 transition-colors anim-fade-up anim-stagger"
                style={{ "--i": index } as React.CSSProperties}
              >
                <div className="w-8 h-8 rounded-lg bg-[#B8B9F3]/20 flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-4 h-4 text-[#0B0F17]" />
                </div>
                <span className="text-[#0B0F17] font-medium text-sm">
                  {service.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Left-bottom Dark Mini Panel */}
        <div
          className="absolute glass-dark panel-radius p-6 hidden md:block anim-fade-left"
          style={{
            left: "6vw",
            bottom: "10vh",
            width: "clamp(280px, 34vw, 420px)",
          }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[#B8B9F3]/20 flex items-center justify-center">
              <Rocket className="w-5 h-5 text-[#B8B9F3]" />
            </div>
            <h3 className="text-[#F6F7F9] font-bold text-lg">
              Crecimiento con soporte
            </h3>
          </div>
          <p className="text-[#A9B1C0] text-sm leading-relaxed">
            Asesoría continua para escalar sin perder control. Te acompañamos
            desde el día uno.
          </p>
        </div>
      </section>
    </AnimateOnView>
  );
}
