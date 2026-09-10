import { notFound } from "next/navigation";
import { guides, getGuideBySlug } from "@/data/guides";
import { getProductBySlug } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return { title: guide.title, description: guide.excerpt };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const related = (guide.relatedProductSlugs ?? [])
    .map((s) => getProductBySlug(s))
    .filter(Boolean);

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
        {guide.title}
      </h1>
      <p className="mt-3 text-text-muted">{guide.excerpt}</p>
      <div className="trace-divider my-8" />
      <div className="space-y-5">
        {guide.content.map((p, i) => (
          <p key={i} className="leading-relaxed text-text-primary/90">
            {p}
          </p>
        ))}
      </div>

      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="font-display text-lg font-semibold text-text-primary">
            Productos relacionados
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {related.map((p) => p && <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      )}
    </article>
  );
}
