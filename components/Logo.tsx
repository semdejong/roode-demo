export function Logo({ className = "h-11 w-auto", priority = false }: { className?: string; priority?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/img/roode-logo-transparent.png"
      alt="Roode Schilderwerk Ruurlo"
      width={367}
      height={98}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
      className={className}
      style={{ maxWidth: 367, maxHeight: 98 }}
    />
  );
}
