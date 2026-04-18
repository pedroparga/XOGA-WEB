export default function FAQ({
  items
}: {
  items: Array<{ question: string; answer: string }>;
}) {
  return (
    <section className="faq-list">
      {items.map((item) => (
        <details className="faq-item" key={item.question}>
          <summary>{item.question}</summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </section>
  );
}
