import { Star, Quote } from "lucide-react";
import AnimateOnView from "@/components/AnimateOnView";

const testimonials = [
  {
    name: "María G.",
    role: "Cliente de Reparación de Crédito",
    quote:
      "Estoy muy contenta con los resultados que obtuve. El servicio fue rápido, el trato fue excelente y sentí que realmente se preocuparon por mi caso. Recomiendo mucho Trust Credit Business!",
    rating: 5,
  },
  {
    name: "Carlos R.",
    role: "Emprendedor",
    quote:
      "En 60 días vi cambios reales en mi puntaje. No solo repararon mi crédito, sino que me ayudaron a entender cómo mantenerlo saludable.",
    rating: 5,
  },
  {
    name: "Ana T.",
    role: "Dueña de Negocio",
    quote:
      "Me ayudaron a formar mi LLC y organizar mis finanzas. El proceso fue smooth y siempre estuvieron disponibles para responder mis preguntas.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <AnimateOnView>
      <section
        className="relative w-full py-[8vh] px-[6vw]"
        style={{ background: "#F6F7F9" }}
      >
        <div className="mb-10 anim-fade-up">
          <span className="font-mono-label text-[#4A5568] block mb-3">
            TESTIMONIOS
          </span>
          <h2 className="text-[clamp(32px,3.6vw,52px)] text-[#0B0F17] font-black mb-3">
            Reseñas de Clientes
          </h2>
          <p className="text-[#4A5568] text-[clamp(14px,1.1vw,18px)] max-w-xl">
            Historias reales de quienes transformaron su crédito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="testimonial-card glass-light panel-radius p-6 hover:-translate-y-1.5 transition-transform duration-300 anim-fade-up anim-stagger"
              style={{ "--i": index } as React.CSSProperties}
            >
              <div className="flex items-center gap-1 mb-4" aria-label={`${testimonial.rating} de 5 estrellas`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-[#B8B9F3] text-[#B8B9F3]"
                  />
                ))}
              </div>

              <div className="relative mb-4">
                <Quote className="absolute -top-2 -left-1 w-6 h-6 text-[#B8B9F3]/30" />
                <blockquote className="text-[#0B0F17] text-sm leading-relaxed pl-4">
                  {testimonial.quote}
                </blockquote>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#0B0F17]/10">
                <div className="w-10 h-10 rounded-full bg-[#B8B9F3]/20 flex items-center justify-center">
                  <span className="text-[#0B0F17] font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-[#0B0F17] font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-[#4A5568] text-xs">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </AnimateOnView>
  );
}
