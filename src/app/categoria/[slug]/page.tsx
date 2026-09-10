import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { categories, getCategory } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const products = getProductsByCategory(slug);
  const siblingCats = categories.filter((c) => c.group === category.group);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <nav className="mb-6 flex flex-wrap gap-2">
        {siblingCats.map((c) => (
          <Link
            key={c.slug}
            href={`/categoria/${c.slug}`}
            className={`border px-3 py-1.5 text-xs font-mono uppercase tracking-wide transition-colors ${
              c.slug === category.slug
                ? "border-copper text-copper-bright"
                : "border-line text-text-muted hover:border-line-strong hover:text-text-primary"
            }`}
          >
            {c.namePlural}
          </Link>
        ))}
      </nav>

      <h1 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
        {category.namePlural}
      </h1>
      <p className="mt-2 max-w-2xl text-text-muted">{category.description}</p>

      {products.length > 1 && (
        <Link
          href={`/comparador?categoria=${category.slug}`}
          className="mt-5 inline-flex items-center gap-2 border border-line-strong px-4 py-2 text-sm font-semibold text-text-primary transition-colors hover:border-copper hover:text-copper-bright"
        >
          Comparar {category.namePlural.toLowerCase()}
        </Link>
      )}

      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.length === 0 && (
          <p className="text-text-muted">
            Todavía no hay productos publicados en esta categoría. Pásame
            enlaces de afiliado de {category.namePlural.toLowerCase()} y los
            añadimos.
          </p>
        )}
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
