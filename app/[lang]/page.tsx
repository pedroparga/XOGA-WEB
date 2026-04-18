import type { Metadata } from "next";
import CTA from "@/components/CTA";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import SportsGrid from "@/components/SportsGrid";
import Steps from "@/components/Steps";
import Ticker from "@/components/Ticker";
import { buildMetadata, getLangContent, type Lang } from "@/lib/site-data";

export async function generateStaticParams() {
  return [{ lang: "es" }, { lang: "en" }];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata(lang, "home");
}

export default async function HomePage({
  params
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const content = getLangContent(lang);

  return (
    <div className="page">
      <Header lang={lang} />
      <main>
        <Hero content={content.home.hero} />
        <Ticker items={content.home.ticker} />
        <Features content={content.home.why} />
        <Showcase content={content.home.showcase} />
        <SportsGrid content={content.home.sports} />
        <CTA lang={lang} content={content.home.cta} />
        <Steps content={content.home.steps} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
