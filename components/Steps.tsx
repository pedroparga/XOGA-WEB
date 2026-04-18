import type { ReactNode } from "react";

type StepsContent = {
  kicker: string;
  title: string;
  anchorId: string;
  items: Array<{ title: string; body: string; number: string; icon: ReactNode }>;
};

export default function Steps({ content }: { content: StepsContent }) {
  return (
    <section className="feature-band" id={content.anchorId}>
      <div className="feature-header">
        <span className="feature-kicker">{content.kicker}</span>
        <h2>{content.title}</h2>
      </div>
      <div className="steps-grid">
        {content.items.map((item) => (
          <article className="step-card" key={item.number}>
            <div className="step-top">
              <span className="step-number">{item.number}</span>
              <span className="step-icon" aria-hidden="true">
                {item.icon}
              </span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
