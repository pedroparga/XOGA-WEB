type CTAContent = {
  title: string;
  cta: string;
};

export default function CTA({
  lang,
  content
}: {
  lang: "es" | "en";
  content: CTAContent;
}) {
  return (
    <section className="cta-band">
      <div className="cta-inner">
        <div className="cta-copy">
          <h2>{content.title}</h2>
        </div>
        <div className="cta-actions">
          <a className="cta-primary" href={`/${lang}#top`}>
            {content.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
