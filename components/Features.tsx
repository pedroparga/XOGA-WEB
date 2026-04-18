import type { ReactNode } from "react";

type FeaturesContent = {
  kicker: string;
  title: string;
  items: Array<{ title: string; body: string; icon: ReactNode }>;
};

export default function Features({ content }: { content: FeaturesContent }) {
  return (
    <section className="why-band">
      <div className="why-header">
        <span className="why-kicker">{content.kicker}</span>
        <h2>{content.title}</h2>
      </div>
      <div className="why-grid">
        {content.items.map((item) => (
          <article className="why-card" key={item.title}>
            <span className="why-icon" aria-hidden="true">
              {item.icon}
            </span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
