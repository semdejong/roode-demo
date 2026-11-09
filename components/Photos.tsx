export function JeroenPhoto() {
  return (
    <figure className="w-full max-w-[332px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/jeroen-bus-2013.jpg"
        width={332}
        height={184}
        alt="Jeroen Roode bij zijn bus en aanhanger."
        decoding="async"
        className="h-auto w-full max-w-[332px]"
      />
      <figcaption className="mt-2 font-mono text-[12px] leading-snug text-muted">
        Jeroen Roode bij de bus en aanhanger, 2013.
      </figcaption>
    </figure>
  );
}

export function GlasPhoto({ className = "max-w-[380px]" }: { className?: string }) {
  return (
    <figure className={`w-full ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/glas-in-lood-paneel.jpg"
        width={1500}
        height={2000}
        alt="Glas-in-loodpaneel met een amberkleurige rand, wit glas en een paarsgroen midden, op de werkbank."
        decoding="async"
        className={`h-auto w-full ${className}`}
      />
      <figcaption className="mt-2 font-mono text-[12px] leading-snug text-muted">
        Glas in lood, op de werkbank.
      </figcaption>
    </figure>
  );
}
