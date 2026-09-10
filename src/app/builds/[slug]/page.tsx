import { notFound } from "next/navigation";
import { budgetBuilds, getBudgetBuildBySlug, useCaseLabels } from "@/data/budgetBuilds";
import { getProductBySlug } from "@/data/products";
import ProductThumb from "@/components/ProductThumb";
import BuyButton from "@/components/BuyButton";

export function generateStaticParams() {
  return budgetBuilds.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const build = getBudgetBuildBySlug(slug);
  if (!build) return {};
  return { title: build.title, description: build.summary };
}

export default async function BudgetBuildPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const build = getBudgetBuildBySlug(slug);
  if (!build) notFound();

  const components = build.componentSlugs
    .map((s) => getProductBySlug(s))
    .filter(Boolean);
  const total = components.reduce(
    (sum, p) => sum + (p ? (p.isDeal ? p.dealPrice ?? p.price : p.price) : 0),
    0
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <span className="font-mono text-[11px] uppercase tracking-wide text-copper">
        {useCaseLabels[build.useCase]}
        {build.targetBudget ? ` · Presupuesto orientativo ${build.targetBudget} €` : ""}
      </span>
      <h1 className="mt-1 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
        {build.title}
      </h1>
      <p className="mt-3 max-w-2xl text-text-muted">{build.summary}</p>

      <div className="mt-8 divide-y divide-line border-y border-line">
        {components.map(
          (p) =>
            p && (
              <div key={p.id} className="flex items-center gap-4 py-4">
                <ProductThumb category={p.category} className="h-9 w-9 shrink-0 text-text-faint" />
                <div className="flex-1">
                  <p className="font-display font-medium text-text-primary">{p.name}</p>
                  <p className="tabular text-sm text-text-muted">
                    {(p.isDeal ? p.dealPrice! : p.price).toLocaleString("es-ES", {
                      style: "currency",
                      currency: "EUR",
                    })}
                  </p>
                </div>
                <BuyButton href={p.affiliateUrl} confirmed={p.affiliateConfirmed} />
              </div>
            )
        )}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="font-display text-lg font-semibold text-text-primary">
          Precio total estimado
        </span>
        <span className="tabular text-xl font-semibold text-text-primary">
          {total.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
        </span>
      </div>

      <div className="spec-frame mt-8 p-5">
        <p className="text-sm leading-relaxed text-text-muted">{build.notes}</p>
      </div>
    </div>
  );
}
