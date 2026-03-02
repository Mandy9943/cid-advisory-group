"use client";

import Navigation from "@/sections/Navigation";
import Hero from "@/sections/Hero";
import CreditServices from "@/sections/CreditServices";
import BusinessServices from "@/sections/BusinessServices";
import Process from "@/sections/Process";
import Philosophy from "@/sections/Philosophy";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <div className="relative">
      {/* Noise Overlay */}
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        {/* Pinned Sections */}
        <Hero />
        <div id="servicios">
          <CreditServices />
        </div>
        <BusinessServices />
        <div id="proceso">
          <Process />
        </div>
        <Philosophy />

        {/* Flowing Sections */}
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
  );
}
