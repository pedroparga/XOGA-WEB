import type { Metadata } from "next";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { buildMetadata, getLangContent, type Lang } from "@/lib/site-data";

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata(lang, "faq");
}

export default async function FaqPage({
  params
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const content = getLangContent(lang).faq;

  return (
    <div className="page">
      <Header lang={lang} />
      <main className="faq-page">
        <section className="faq-hero">
          <span className="contact-kicker">{content.kicker}</span>
          <h1>{content.title}</h1>
        </section>
        <FAQ items={content.items} />
        <section className="faq-help">
          <h3>{content.helpTitle}</h3>
          <p>{content.helpBody}</p>
          <a className="cta-secondary" href={`/${lang}/contact`}>
            {content.helpCta}
          </a>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
