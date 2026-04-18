/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"]
  },
  async redirects() {
    return [
      { source: "/", destination: "/es", permanent: true },
      { source: "/index.html", destination: "/es", permanent: true },
      { source: "/index-en.html", destination: "/en", permanent: true },
      { source: "/sobre-nosotros.html", destination: "/es/about", permanent: true },
      { source: "/about-en.html", destination: "/en/about", permanent: true },
      { source: "/contacto.html", destination: "/es/contact", permanent: true },
      { source: "/contact-en.html", destination: "/en/contact", permanent: true },
      { source: "/preguntas-frecuentes.html", destination: "/es/faq", permanent: true },
      { source: "/faq-en.html", destination: "/en/faq", permanent: true },
      { source: "/politica-de-privacidad.html", destination: "/es/legal#privacy-policy", permanent: true },
      { source: "/privacy-en.html", destination: "/en/legal#privacy-policy", permanent: true },
      { source: "/aviso-legal.html", destination: "/es/legal#legal-notice", permanent: true },
      { source: "/legal-en.html", destination: "/en/legal#legal-notice", permanent: true },
      { source: "/politica-de-cookies.html", destination: "/es/legal#cookie-policy", permanent: true },
      { source: "/cookies-en.html", destination: "/en/legal#cookie-policy", permanent: true }
    ];
  }
};

export default nextConfig;
