export function RuledRows({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="mt-8 border-t border-foreground/20">
      {items.map((item) => (
        <div key={item.title} className="grid gap-2 border-b border-foreground/20 py-5 md:grid-cols-12 md:gap-8">
          <h3 className="text-[1.25rem] md:col-span-4">{item.title}</h3>
          <p className="md:col-span-8">{item.text}</p>
        </div>
      ))}
    </div>
  );
}
