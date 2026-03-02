"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";

const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Proceso", href: "#proceso" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        aria-label="Navegación principal"
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B0F17]/90 backdrop-blur-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="px-[6vw] flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3" aria-label="Inicio">
            <div className="w-10 h-10 rounded-lg bg-[#B8B9F3]/20 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.png"
                alt="CID Advisory Group"
                width={28}
                height={28}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-sm hidden sm:block text-[#F6F7F9]">
              CID ADVISORY GROUP
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium transition-colors hover:text-[#B8B9F3] text-[#A9B1C0]"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-sm py-2.5 px-4 flex items-center gap-2"
            >
              Consulta gratis
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg bg-[#F6F7F9]/10 flex items-center justify-center"
            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[#F6F7F9]" />
            ) : (
              <Menu className="w-5 h-5 text-[#F6F7F9]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[99] bg-[#0B0F17] transition-transform duration-300 lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.href)}
              className="text-[#F6F7F9] text-2xl font-bold hover:text-[#B8B9F3] transition-colors"
              tabIndex={isMobileMenuOpen ? 0 : -1}
            >
              {link.label}
            </button>
          ))}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 flex items-center gap-2"
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            Consulta gratis
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </>
  );
}
