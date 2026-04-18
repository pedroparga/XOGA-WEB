import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { buildMetadata, getLangContent, type Lang } from "@/lib/site-data";

export async function generateMetadata({
  params
}: {
  params: Promise<{ lang: Lang }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return buildMetadata(lang, "contact");
}

export default async function ContactPage({
  params
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const content = getLangContent(lang).contact;

  return (
    <div className="page">
      <Header lang={lang} />
      <main className="contact-page">
        <section className="contact-hero">
          <span className="contact-kicker">{content.kicker}</span>
          <h1>{content.title}</h1>
          <p>{content.description}</p>
        </section>

        <section className="contact-main">
          <div className="contact-form">
            <h2>{content.formTitle}</h2>
            <p>{content.formDescription}</p>
            <ContactForm lang={lang} content={content.form} />
          </div>
          <div className="contact-side">
            <h3>{content.sidebarTitle}</h3>
            <p>Email: xogaapp@gmail.com</p>
            <p>
              {content.socialLabel}{" "}
              <a href="https://www.instagram.com/xogaapp" target="_blank" rel="noreferrer">
                Instagram
              </a>{" "}
              / TikTok
            </p>
          </div>
        </section>

        <section className="contact-support">
          <h3>{content.supportTitle}</h3>
          <p>{content.supportBody}</p>
          <a className="cta-secondary" href="#top">
            {content.supportCta}
          </a>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
