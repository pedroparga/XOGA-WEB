import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { buildMetadata, getLangContent, type Lang } from "@/lib/site-data";

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata(lang, "legal");
}

export default async function LegalPage({
  params
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const content = getLangContent(lang).legal;

  return (
    <div className="page">
      <Header lang={lang} />
      <main className="privacy-page">
        <section className="privacy-hero">
          <span className="contact-kicker">{content.kicker}</span>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </section>
        {content.documents.map((document) => (
          <section className="privacy-section" id={document.id} key={document.id}>
            <h3>{document.title}</h3>
            {document.intro ? <p>{document.intro}</p> : null}
            {document.sections.map((section) => (
              <div className="legal-block" key={section.title}>
                <h4>{section.title}</h4>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.items ? (
                  <ul className="privacy-list">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </section>
        ))}
      </main>
      <Footer lang={lang} />
    </div>
  );
}
