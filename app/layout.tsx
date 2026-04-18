import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://xogaapp.es"),
  title: "XOGA",
  description: "XOGA is the app to organize games, create tournaments and play sports near you.",
  applicationName: "XOGA",
  alternates: {
    canonical: "/es"
  },
  openGraph: {
    type: "website",
    siteName: "XOGA",
    images: [{ url: "/imagenes/og-xoga.webp", width: 1200, height: 630, alt: "XOGA" }]
  },
  twitter: {
    card: "summary_large_image",
    images: ["/imagenes/og-xoga.webp"]
  },
  icons: {
    icon: "/imagenes/logoOscuroSinFondo.png"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#061a22",
  viewportFit: "cover"
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
