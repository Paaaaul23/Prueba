import Link from "next/link";
import { ArrowRight, SlidersHorizontal, Scale } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { getDeals, getFeaturedProducts, getNewArrivals } from "@/data/products";
import { categories } from "@/data/categories";

export default function Home() {
  const featured = getFeaturedProducts();
  const deals = getDeals();
  const newArrivals = getNewArrivals();
  const componentCats = categories.filter((c) => c.group === "componentes");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      {/* Hero */}
      <section className="grid gap-10 border-b border-line pb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-copper">
            Comparativas de hardware · Amazon España
          </p>
          <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.1] text-text-primary sm:text-5xl">
            Elige cada pieza de tu PC sabiendo exactamente por qué.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-text-muted">
            Fichas técnicas completas, comparador lado a lado y un
            configurador que avisa de incompatibilidades antes de que
            compres. Sin listas genéricas: cada componente, analizado.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/comparador"
              className="inline-flex items-center gap-2 bg-copper px-5 py-3 text-sm font-semibold text-bg-base transition-colors hover:bg-copper-bright"
            >
              <Scale size={16} /> Abrir comparador
            </Link>
            <Link
              href="/configurador"
              className="inline-flex items-center gap-2 border border-line-strong px-5 py-3 text-sm font-semibold text-text-primary transition-colors hover:border-copper hover:text-copper-bright"
            >
              <SlidersHorizontal size={16} /> Configurar mi PC
            </Link>
          </div>
        </div>
        <div className="spec-frame p-6">
          <p className="font-mono text-[11px] uppercase tracking-wide text-text-faint">
            Categorías
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
            {componentCats.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/categoria/${c.slug}`}
                  className="flex items-center justify-between text-sm text-text-muted transition-colors hover:text-copper-bright"
                >
                  {c.namePlural}
                  <ArrowRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Destacados */}
      <section className="mt-16">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            Destacados
          </h2>
          <Link href="/categoria/cpu" className="text-sm text-copper-bright hover:underline">
            Ver todo
          </Link>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Ofertas */}
      {deals.length > 0 && (
        <section className="mt-16">
          <div className="flex items-end justify-between">
            <h2 className="font-display text-2xl font-semibold text-text-primary">
              Ofertas activas
            </h2>
            <Link href="/ofertas" className="text-sm text-copper-bright hover:underline">
              Ver todas
            </Link>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {deals.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* Novedades */}
      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          Novedades en el catálogo
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {newArrivals.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* Builds por presupuesto */}
      <section className="mt-16 spec-frame p-8">
        <h2 className="font-display text-2xl font-semibold text-text-primary">
          ¿No sabes por dónde empezar?
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-text-muted">
          Consulta nuestras configuraciones de PC recomendadas por
          presupuesto y por tipo de uso: gaming, edición de vídeo,
          programación, IA u oficina.
        </p>
        <Link
          href="/builds"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-copper-bright hover:underline"
        >
          Ver configuraciones recomendadas <ArrowRight size={14} />
        </Link>
      </section>
    </div>
  );
}
