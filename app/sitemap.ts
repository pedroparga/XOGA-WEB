import type { MetadataRoute } from "next";

const routes = ["/es", "/es/about", "/es/contact", "/es/faq", "/es/legal", "/en", "/en/about", "/en/contact", "/en/faq", "/en/legal"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://xogaapp.es${route}`,
    lastModified: new Date("2026-04-18")
  }));
}
