import PhoneMockup from "@/components/PhoneMockup";

type ShowcaseContent = {
  kicker: string;
  title: string;
  description: string;
  images: { src: string; alt: string; className: string }[];
};

export default function Showcase({ content }: { content: ShowcaseContent }) {
  return (
    <section className="showcase-band">
      <div className="showcase-inner">
        <div className="showcase-visual" aria-hidden="true">
          <div className="iphones-container showcase-phones">
            {content.images.map((image) => (
              <PhoneMockup className={image.className} image={image} key={image.src} />
            ))}
          </div>
        </div>
        <div className="showcase-copy">
          <span className="showcase-kicker">{content.kicker}</span>
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
      </div>
    </section>
  );
}
