import Link from "next/link";

const nav = [
  { href: "/categoria/cpu", label: "Componentes" },
  { href: "/categoria/monitor", label: "Periféricos" },
  { href: "/comparador", label: "Comparador" },
  { href: "/configurador", label: "Configurador" },
  { href: "/builds", label: "PCs recomendados" },
  { href: "/guias", label: "Guías" },
  { href: "/ofertas", label: "Ofertas" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg-base/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-1.5 shrink-0">
          <span className="font-display text-xl font-semibold tracking-tight text-text-primary">
            Zócalo
          </span>
          <span className="font-mono text-xs text-copper">/PC</span>
        </Link>
        <nav className="hidden flex-1 items-center gap-6 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-text-muted transition-colors hover:text-text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/comparador"
          className="hidden shrink-0 border border-copper px-4 py-2 text-sm font-medium text-copper-bright transition-colors hover:bg-copper hover:text-bg-base sm:inline-block"
        >
          Comparar piezas
        </Link>
      </div>
      <nav className="flex gap-4 overflow-x-auto border-t border-line px-4 py-2 text-sm text-text-muted lg:hidden">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="shrink-0 whitespace-nowrap">
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
