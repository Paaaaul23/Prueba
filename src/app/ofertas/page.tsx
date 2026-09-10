import { getDeals } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export const metadata = { title: "Ofertas" };

export default function OfertasPage() {
  const deals = getDeals();
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-wide text-copper">
        Ofertas
      </p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
        Productos con buen precio ahora mismo
      </h1>
      <p className="mt-2 max-w-2xl text-text-muted">
        Componentes que en este momento tienen un precio especialmente
        competitivo respecto a su valor habitual.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {deals.length === 0 && (
          <p className="text-text-muted">No hay ofertas activas ahora mismo.</p>
        )}
        {deals.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}
