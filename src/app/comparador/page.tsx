"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { categories } from "@/data/categories";
import { getProductsByCategory } from "@/data/products";
import { Product } from "@/types/product";
import ProductThumb from "@/components/ProductThumb";
import RatingStars from "@/components/RatingStars";
import BuyButton from "@/components/BuyButton";
import RadarCompareChart from "@/components/RadarCompareChart";

const MAX_COMPARE = 4;

export default function ComparadorPage() {
  const [categorySlug, setCategorySlug] = useState(categories[0].slug);
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const categoryProducts = useMemo(
    () => getProductsByCategory(categorySlug),
    [categorySlug]
  );
  const selected: Product[] = useMemo(
    () => categoryProducts.filter((p) => selectedIds.includes(p.id)),
    [categoryProducts, selectedIds]
  );

  function toggle(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id)
        ? prev.filter((i) => i !== id)
        : prev.length < MAX_COMPARE
        ? [...prev, id]
        : prev
    );
  }

  function changeCategory(slug: string) {
    setCategorySlug(slug as typeof categorySlug);
    setSelectedIds([]);
  }

  // Unión de todas las specs (por grupo + label) presentes en los seleccionados.
  const specRows = useMemo(() => {
    const rows: { group: string; label: string }[] = [];
    const seen = new Set<string>();
    selected.forEach((p) => {
      p.specGroups.forEach((g) => {
        g.specs.forEach((s) => {
          const key = `${g.title}::${s.label}`;
          if (!seen.has(key)) {
            seen.add(key);
            rows.push({ group: g.title, label: s.label });
          }
        });
      });
    });
    return rows;
  }, [selected]);

  function specValue(p: Product, group: string, label: string) {
    const g = p.specGroups.find((g) => g.title === group);
    return g?.specs.find((s) => s.label === label)?.value ?? "—";
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-wide text-copper">
        Comparador
      </p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
        Enfrenta hasta {MAX_COMPARE} piezas cara a cara
      </h1>
      <p className="mt-2 max-w-2xl text-text-muted">
        Elige una categoría, marca los productos que quieras enfrentar y
        compara especificaciones, puntuaciones y precio en una sola tabla.
      </p>

      {/* Selector de categoría */}
      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => changeCategory(c.slug)}
            className={`border px-3 py-1.5 text-xs font-mono uppercase tracking-wide transition-colors ${
              c.slug === categorySlug
                ? "border-copper text-copper-bright"
                : "border-line text-text-muted hover:border-line-strong hover:text-text-primary"
            }`}
          >
            {c.namePlural}
          </button>
        ))}
      </div>

      {/* Selector de productos */}
      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {categoryProducts.length === 0 && (
          <p className="text-sm text-text-muted">
            Todavía no hay productos en esta categoría.
          </p>
        )}
        {categoryProducts.map((p) => {
          const isSelected = selectedIds.includes(p.id);
          return (
            <button
              key={p.id}
              onClick={() => toggle(p.id)}
              className={`spec-frame flex items-center gap-3 p-3 text-left transition-colors ${
                isSelected ? "outline outline-1 outline-copper" : ""
              }`}
            >
              <ProductThumb category={p.category} className="h-8 w-8 shrink-0 text-text-faint" />
              <span className="text-sm text-text-primary">{p.name}</span>
            </button>
          );
        })}
      </div>

      {selected.length === 0 ? (
        <p className="mt-12 text-text-muted">
          Selecciona al menos un producto para empezar a comparar.
        </p>
      ) : (
        <>
          {/* Radar superpuesto */}
          <div className="spec-frame mt-12 p-6">
            <h2 className="font-display text-lg font-semibold text-text-primary">
              Puntuaciones superpuestas
            </h2>
            <RadarCompareChart products={selected} />
          </div>

          {/* Tabla comparativa */}
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="w-40 border-b border-line-strong pb-3 text-left font-mono text-xs uppercase tracking-wide text-text-faint">
                    &nbsp;
                  </th>
                  {selected.map((p) => (
                    <th key={p.id} className="border-b border-line-strong px-3 pb-3 text-left align-top">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="font-mono text-[11px] uppercase text-copper">
                            {p.brand}
                          </p>
                          <p className="font-display font-medium leading-snug text-text-primary">
                            {p.name}
                          </p>
                        </div>
                        <button
                          onClick={() => toggle(p.id)}
                          aria-label={`Quitar ${p.name}`}
                          className="text-text-faint hover:text-warn"
                        >
                          <X size={14} />
                        </button>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-line py-3 text-text-muted">Precio</td>
                  {selected.map((p) => (
                    <td key={p.id} className="tabular border-b border-line px-3 py-3 text-text-primary">
                      {(p.isDeal ? p.dealPrice! : p.price).toLocaleString("es-ES", {
                        style: "currency",
                        currency: "EUR",
                      })}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="border-b border-line py-3 text-text-muted">Valoración</td>
                  {selected.map((p) => (
                    <td key={p.id} className="border-b border-line px-3 py-3">
                      <RatingStars rating={p.rating} size={12} />
                    </td>
                  ))}
                </tr>
                {specRows.map((row) => (
                  <tr key={`${row.group}::${row.label}`}>
                    <td className="border-b border-line py-3 text-text-muted">
                      {row.label}
                    </td>
                    {selected.map((p) => (
                      <td
                        key={p.id}
                        className="tabular border-b border-line px-3 py-3 text-text-primary"
                      >
                        {specValue(p, row.group, row.label)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <td className="py-4 text-text-muted">Comprar</td>
                  {selected.map((p) => (
                    <td key={p.id} className="px-3 py-4">
                      <BuyButton
                        href={p.affiliateUrl}
                        price={p.price}
                        dealPrice={p.isDeal ? p.dealPrice : undefined}
                        confirmed={p.affiliateConfirmed}
                      />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
