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
  return buildMetadata(lang, "about");
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const content = getLangContent(lang).about;

  return (
    <div className="page">
      <Header lang={lang} />
      <main className="about-page">
        <section className="about-hero">
          <div className="about-hero-copy">
            <span className="about-kicker">{content.kicker}</span>
            <h1>{content.title}</h1>
            <h2>{content.subtitle}</h2>
            <p>{content.intro}</p>
          </div>
        </section>

        <section className="about-section">
          <h3>{content.story.title}</h3>
          {content.story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>

        <section className="about-section">
          <h3>{content.drive.title}</h3>
          <div className="about-split">
            <div>
              <h4>{content.drive.missionTitle}</h4>
              <p>{content.drive.mission}</p>
            </div>
            <div>
              <h4>{content.drive.visionTitle}</h4>
              <p>{content.drive.vision}</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h3>{content.valuesTitle}</h3>
          <div className="values-grid">
            {content.values.map((value) => (
              <article className="values-card" key={value.title}>
                <h4>{value.title}</h4>
                <p>{value.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section">
          <h3>{content.forWhoTitle}</h3>
          <div className="who-list">
            {content.forWho.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
