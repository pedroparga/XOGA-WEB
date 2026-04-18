import PhoneMockup from "@/components/PhoneMockup";

type HeroContent = {
  title: string;
  description: string;
  downloadLabel: string;
  buttons: string[];
  images: { src: string; alt: string; className: string }[];
};

export default function Hero({ content }: { content: HeroContent }) {
  return (
    <section className="hero">
      <section className="hero-copy">
        <h1 dangerouslySetInnerHTML={{ __html: content.title }} />
        <p>{content.description}</p>
        <p className="download-label">{content.downloadLabel}</p>
        <div className="hero-actions">
          {content.buttons.map((label) => (
            <button className="store-btn" type="button" key={label}>
              {label}
            </button>
          ))}
        </div>
      </section>
      <section className="hero-visual" aria-hidden="true">
        <div className="iphones-container">
          {content.images.map((image, index) => (
            <PhoneMockup key={image.src} className={image.className} image={image} priority={index === 0} />
          ))}
        </div>
      </section>
    </section>
  );
}
