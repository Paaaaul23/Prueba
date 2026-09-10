import Link from "next/link";
import { guides } from "@/data/guides";

export const metadata = { title: "Guías de compra" };

export default function GuiasPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-wide text-copper">
        Guías de compra
      </p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
        Resuelve tus dudas antes de comprar
      </h1>
      <p className="mt-2 text-text-muted">
        Comparativas por concepto (AMD vs Intel, DDR4 vs DDR5...) y guías
        prácticas de montaje y elección de componentes.
      </p>

      <div className="mt-10 divide-y divide-line border-t border-line">
        {guides.map((g) => (
          <Link
            key={g.slug}
            href={`/guias/${g.slug}`}
            className="group flex flex-col gap-1.5 py-6"
          >
            <h2 className="font-display text-xl font-medium text-text-primary group-hover:text-copper-bright">
              {g.title}
            </h2>
            <p className="text-sm text-text-muted">{g.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
