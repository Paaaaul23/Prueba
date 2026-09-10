import Link from "next/link";
import { budgetBuilds, useCaseLabels } from "@/data/budgetBuilds";

export const metadata = { title: "PCs recomendados por presupuesto y uso" };

export default function BuildsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-wide text-copper">
        Configuraciones recomendadas
      </p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
        PCs recomendados por presupuesto y uso
      </h1>
      <p className="mt-2 max-w-2xl text-text-muted">
        Listas de componentes ya pensadas y comprobadas para que no tengas
        que montar la tuya desde cero.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {budgetBuilds.map((b) => (
          <Link key={b.slug} href={`/builds/${b.slug}`} className="spec-frame block p-5">
            <span className="font-mono text-[11px] uppercase tracking-wide text-copper">
              {useCaseLabels[b.useCase]}
              {b.targetBudget ? ` · ${b.targetBudget} €` : ""}
            </span>
            <h2 className="mt-1 font-display text-lg font-medium text-text-primary">
              {b.title}
            </h2>
            <p className="mt-2 text-sm text-text-muted">{b.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
