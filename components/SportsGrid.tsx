import EmojiMesh from "@/components/emoji/EmojiMesh";

type SportsContent = {
  kicker: string;
  title: string;
  note: string;
  items: Array<{ title: string; emoji: string }>;
};

export default function SportsGrid({ content }: { content: SportsContent }) {
  return (
    <section className="sports-band">
      <div className="sports-header">
        <span className="sports-kicker">{content.kicker}</span>
        <h2>{content.title}</h2>
      </div>
      <div className="sports-grid">
        {content.items.map((item) => (
          <article className="sports-card" key={item.title}>
            <EmojiMesh className="sports-bg" density={26000} emojiSize={22} emojis={[item.emoji]} maxSpeed={0.18} />
            <div className="sports-content">
              <h3>{item.title}</h3>
            </div>
          </article>
        ))}
      </div>
      <p className="sports-note">{content.note}</p>
    </section>
  );
}
