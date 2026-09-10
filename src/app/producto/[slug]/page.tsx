import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, XCircle, Users } from "lucide-react";
import { products, getProductBySlug } from "@/data/products";
import { getCategory } from "@/data/categories";
import RatingStars from "@/components/RatingStars";
import BuyButton from "@/components/BuyButton";
import ProductThumb from "@/components/ProductThumb";
import RadarScoreChart from "@/components/RadarScoreChart";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ficha, especificaciones y precio`,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const alternatives = (product.alternatives ?? [])
    .map((s) => getProductBySlug(s))
    .filter(Boolean);
  const compatibleWith = (product.compatibleWith ?? [])
    .map((s) => getProductBySlug(s))
    .filter(Boolean);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs text-text-muted">
        <Link href="/" className="hover:text-copper-bright">
          Inicio
        </Link>{" "}
        /{" "}
        <Link
          href={`/categoria/${product.category}`}
          className="hover:text-copper-bright"
        >
          {category?.namePlural}
        </Link>{" "}
        / <span className="text-text-primary">{product.name}</span>
      </p>

      <div className="mt-6 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Galería */}
        <div>
          <div className="spec-frame flex aspect-square items-center justify-center">
            <ProductThumb category={product.category} className="h-32 w-32 text-text-faint" />
          </div>
          <p className="mt-3 text-center font-mono text-xs text-text-faint">
            Imagen orientativa · foto real pendiente al confirmar el producto
          </p>
        </div>

        {/* Info principal */}
        <div>
          <p className="font-mono text-xs uppercase tracking-wide text-copper">
            {product.brand}
          </p>
          <h1 className="mt-1 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
            {product.name}
          </h1>
          <div className="mt-3">
            <RatingStars rating={product.rating} reviewCount={product.reviewCount} size={16} />
          </div>
          <p className="mt-4 max-w-xl leading-relaxed text-text-muted">
            {product.shortDescription}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <span className="tabular text-2xl font-semibold text-text-primary">
              {(product.isDeal ? product.dealPrice! : product.price).toLocaleString(
                "es-ES",
                { style: "currency", currency: "EUR" }
              )}
            </span>
            {product.isDeal && (
              <span className="tabular text-sm text-text-faint line-through">
                {product.price.toLocaleString("es-ES", {
                  style: "currency",
                  currency: "EUR",
                })}
              </span>
            )}
          </div>

          <BuyButton
            href={product.affiliateUrl}
            confirmed={product.affiliateConfirmed}
            className="mt-5"
          />
          {!product.affiliateConfirmed && !product.affiliateUrl && (
            <p className="mt-2 font-mono text-xs text-warn">
              Sin enlace de afiliado asignado todavía.
            </p>
          )}
          {!product.affiliateConfirmed && product.affiliateUrl && (
            <p className="mt-2 font-mono text-xs text-text-faint">
              Enlace de prueba — pendiente de confirmar que corresponde
              exactamente a este producto.
            </p>
          )}

          {/* Pros / contras */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-sm font-semibold text-text-primary">
                Puntos fuertes
              </h3>
              <ul className="mt-3 space-y-2">
                {product.pros.map((pro) => (
                  <li key={pro} className="flex gap-2 text-sm text-text-muted">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-signal" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-display text-sm font-semibold text-text-primary">
                Puntos débiles
              </h3>
              <ul className="mt-3 space-y-2">
                {product.cons.map((con) => (
                  <li key={con} className="flex gap-2 text-sm text-text-muted">
                    <XCircle size={16} className="mt-0.5 shrink-0 text-warn" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-display text-sm font-semibold text-text-primary">
              ¿Para quién es ideal?
            </h3>
            <ul className="mt-3 space-y-1.5">
              {product.idealFor.map((i) => (
                <li key={i} className="text-sm text-text-muted">
                  · {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Descripción + radar */}
      <div className="trace-divider my-14" />
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-xl font-semibold text-text-primary">
            Análisis
          </h2>
          <p className="mt-4 leading-relaxed text-text-muted">
            {product.description}
          </p>
        </div>
        <div className="spec-frame p-6">
          <h2 className="font-display text-xl font-semibold text-text-primary">
            Puntuación por aspectos
          </h2>
          <RadarScoreChart data={product.radar} name={product.name} />
        </div>
      </div>

      {/* Especificaciones técnicas */}
      <div className="trace-divider my-14" />
      <h2 className="font-display text-xl font-semibold text-text-primary">
        Ficha técnica completa
      </h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        {product.specGroups.map((group) => (
          <div key={group.title}>
            <h3 className="font-mono text-xs uppercase tracking-wide text-copper">
              {group.title}
            </h3>
            <dl className="mt-3 divide-y divide-line border-t border-line">
              {group.specs.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4 py-2.5 text-sm">
                  <dt className="text-text-muted">{spec.label}</dt>
                  <dd className="tabular text-right text-text-primary">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      {/* Reseñas */}
      <div className="trace-divider my-14" />
      <div className="spec-frame p-6">
        <div className="flex items-center gap-2">
          <Users size={16} className="text-copper" />
          <h2 className="font-display text-lg font-semibold text-text-primary">
            Resumen de opiniones de compradores
          </h2>
        </div>
        <p className="mt-4 leading-relaxed text-text-muted">
          {product.reviewSummary}
        </p>
      </div>

      {/* Compatibles / alternativas */}
      {(compatibleWith.length > 0 || alternatives.length > 0) && (
        <>
          <div className="trace-divider my-14" />
          <div className="grid gap-10 lg:grid-cols-2">
            {compatibleWith.length > 0 && (
              <div>
                <h2 className="font-display text-lg font-semibold text-text-primary">
                  Productos compatibles
                </h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {compatibleWith.map(
                    (p) => p && <ProductCard key={p.id} product={p} />
                  )}
                </div>
              </div>
            )}
            {alternatives.length > 0 && (
              <div>
                <h2 className="font-display text-lg font-semibold text-text-primary">
                  Alternativas a considerar
                </h2>
                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  {alternatives.map(
                    (p) => p && <ProductCard key={p.id} product={p} />
                  )}
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
