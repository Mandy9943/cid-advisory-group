import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cidadvisorygroup.com"),
  title: {
    default:
      "CID Advisory Group | Reparación de Crédito y Formación de Negocios",
    template: "%s | CID Advisory Group",
  },
  description:
    "Servicios expertos de reparación de crédito y formación de negocios. Mejora tu puntaje crediticio, forma tu LLC y construye tu futuro financiero con asesoría personalizada. Consulta gratuita.",
  keywords: [
    "reparación de crédito",
    "credit repair",
    "formación de negocios",
    "crear LLC",
    "asesoría financiera",
    "CID Advisory Group",
    "mejorar puntaje de crédito",
    "formación de empresas",
    "consultoría empresarial",
  ],
  authors: [{ name: "CID Advisory Group" }],
  creator: "CID Advisory Group",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_US",
    url: "/",
    siteName: "CID Advisory Group",
    title: "CID Advisory Group | Reparación de Crédito y Formación de Negocios",
    description:
      "Mejora tu puntaje crediticio, forma tu LLC y construye tu futuro financiero con asesoría personalizada.",
    images: [
      { url: "/logo.png", width: 512, height: 512, alt: "CID Advisory Group" },
    ],
  },
  twitter: {
    card: "summary",
    title: "CID Advisory Group | Reparación de Crédito y Formación de Negocios",
    description:
      "Mejora tu crédito y lanza tu negocio con asesoría experta. Consulta gratuita.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${montserrat.variable} ${ibmPlexMono.variable}`}
    >
      <head>
        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html:
                ".anim-fade-up,.anim-fade-left,.anim-fade-right,.hero-bg,.hero-text,.hero-card,.hero-word{opacity:1!important;transform:none!important;animation:none!important}",
            }}
          />
        </noscript>
      </head>
      <body>{children}</body>
    </html>
  );
}
