import EmojiMesh from "@/components/emoji/EmojiMesh";

export default function Ticker({ items }: { items: string[] }) {
  return (
    <section className="ticker">
      <EmojiMesh
        className="ticker-icons"
        density={30000}
        emojiSize={16}
        emojis={["\u26BD\uFE0F", "\uD83C\uDFC0", "\uD83C\uDFBE", "\uD83C\uDFD0"]}
        maxSpeed={0.4}
      />
      <div className="ticker-track">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="ticker-group" aria-hidden={index > 0} key={index}>
            {items.map((item) => [
              <span key={`${index}-${item}`}>{item}</span>,
              <span className="dot" key={`${index}-${item}-dot`} />
            ])}
          </div>
        ))}
      </div>
    </section>
  );
}
