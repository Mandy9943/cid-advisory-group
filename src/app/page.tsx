import {
  COMPANY_NAME,
  EMAIL,
  faqs,
  INSTAGRAM_URL,
  SITE_URL,
  TIKTOK_URL,
} from "@/lib/constants";
import BusinessServices from "@/sections/BusinessServices";
import Contact from "@/sections/Contact";
import CreditServices from "@/sections/CreditServices";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Navigation from "@/sections/Navigation";
import Philosophy from "@/sections/Philosophy";
import Process from "@/sections/Process";
import Testimonials from "@/sections/Testimonials";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FinancialService",
      name: COMPANY_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description:
        "Servicios expertos de reparación de crédito y formación de negocios en Miami, FL.",
      telephone: "+1-786-491-8308",
      email: EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Miami",
        addressRegion: "FL",
        addressCountry: "US",
      },
      areaServed: { "@type": "Country", name: "US" },
      serviceType: [
        "Reparación de Crédito",
        "Formación de LLC",
        "Asesoría Empresarial",
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      sameAs: [TIKTOK_URL, INSTAGRAM_URL],
      priceRange: "$$",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative">
        <div className="noise-overlay" />
        <Navigation />

        <main className="relative">
          <Hero />
          <div id="servicios">
            <CreditServices />
          </div>
          <BusinessServices />
          <div id="proceso">
            <Process />
          </div>
          <Philosophy />

          <div id="testimonios">
            <Testimonials />
          </div>
          <div id="faq">
            <FAQ />
          </div>
          <div id="contacto">
            <Contact />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
