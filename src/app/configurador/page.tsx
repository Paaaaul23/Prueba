"use client";

import { useMemo, useState } from "react";
import { AlertTriangle, CheckCircle2, XCircle } from "lucide-react";
import { getProductsByCategory } from "@/data/products";
import { categories } from "@/data/categories";
import { Product } from "@/types/product";
import {
  BuildSelection,
  checkBuild,
  estimatedWattage,
} from "@/lib/compatibility";
import ProductThumb from "@/components/ProductThumb";
import BuyButton from "@/components/BuyButton";

const SLOTS: { key: keyof BuildSelection; label: string; categorySlug: string }[] = [
  { key: "cpu", label: "Procesador", categorySlug: "cpu" },
  { key: "motherboard", label: "Placa base", categorySlug: "motherboard" },
  { key: "ram", label: "Memoria RAM", categorySlug: "ram" },
  { key: "gpu", label: "Tarjeta gráfica", categorySlug: "gpu" },
  { key: "storage", label: "Almacenamiento", categorySlug: "ssd" },
  { key: "psu", label: "Fuente de alimentación", categorySlug: "psu" },
  { key: "case", label: "Caja", categorySlug: "case" },
];

export default function ConfiguradorPage() {
  const [build, setBuild] = useState<BuildSelection>({});
  const [openSlot, setOpenSlot] = useState<keyof BuildSelection | null>(null);

  const issues = useMemo(() => checkBuild(build), [build]);
  const errors = issues.filter((i) => i.level === "error");
  const warnings = issues.filter((i) => i.level === "warning");
  const totalPrice = Object.values(build).reduce(
    (sum, p) => sum + (p ? (p.isDeal ? p.dealPrice ?? p.price : p.price) : 0),
    0
  );
  const wattage = estimatedWattage(build);
  const selectedCount = Object.values(build).filter(Boolean).length;

  function select(slot: keyof BuildSelection, product: Product) {
    setBuild((prev) => ({ ...prev, [slot]: product }));
    setOpenSlot(null);
  }

  function remove(slot: keyof BuildSelection) {
    setBuild((prev) => ({ ...prev, [slot]: undefined }));
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <p className="font-mono text-xs uppercase tracking-wide text-copper">
        Configurador
      </p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-text-primary sm:text-4xl">
        Monta tu PC pieza a pieza
      </h1>
      <p className="mt-2 max-w-2xl text-text-muted">
        Elige cada componente y te avisamos si algo no encaja: socket,
        tipo de memoria, potencia de la fuente o tamaño de la caja.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
        {/* Slots */}
        <div className="space-y-3">
          {SLOTS.map((slot) => {
            const product = build[slot.key];
            const options = getProductsByCategory(slot.categorySlug);
            const isOpen = openSlot === slot.key;
            return (
              <div key={slot.key} className="spec-frame p-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase tracking-wide text-text-faint">
                    {slot.label}
                  </span>
                  {product && (
                    <button
                      onClick={() => remove(slot.key)}
                      className="text-xs text-text-faint hover:text-warn"
                    >
                      Quitar
                    </button>
                  )}
                </div>

                {product ? (
                  <div className="mt-2 flex items-center gap-3">
                    <ProductThumb
                      category={product.category}
                      className="h-9 w-9 shrink-0 text-text-faint"
                    />
                    <div>
                      <p className="font-display font-medium text-text-primary">
                        {product.name}
                      </p>
                      <p className="tabular text-sm text-text-muted">
                        {product.price.toLocaleString("es-ES", {
                          style: "currency",
                          currency: "EUR",
                        })}
                      </p>
                    </div>
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-text-faint">Sin seleccionar</p>
                )}

                <button
                  onClick={() => setOpenSlot(isOpen ? null : slot.key)}
                  className="mt-3 text-sm font-semibold text-copper-bright hover:underline"
                >
                  {product ? "Cambiar" : "Elegir"} {slot.label.toLowerCase()}
                </button>

                {isOpen && (
                  <div className="mt-3 grid grid-cols-1 gap-2 border-t border-line pt-3 sm:grid-cols-2">
                    {options.length === 0 && (
                      <p className="text-sm text-text-faint">
                        Todavía no hay productos en esta categoría.
                      </p>
                    )}
                    {options.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => select(slot.key, p)}
                        className="flex items-center gap-2 border border-line px-3 py-2 text-left text-sm text-text-primary transition-colors hover:border-copper"
                      >
                        <ProductThumb category={p.category} className="h-5 w-5 shrink-0 text-text-faint" />
                        {p.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Resumen y compatibilidad */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div className="spec-frame p-6">
            <h2 className="font-display text-lg font-semibold text-text-primary">
              Resumen del build
            </h2>
            <p className="mt-1 text-sm text-text-muted">
              {selectedCount} de {SLOTS.length} componentes seleccionados
            </p>

            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-sm text-text-muted">Precio total estimado</span>
              <span className="tabular text-xl font-semibold text-text-primary">
                {totalPrice.toLocaleString("es-ES", {
                  style: "currency",
                  currency: "EUR",
                })}
              </span>
            </div>
            <div className="mt-1 flex items-baseline justify-between">
              <span className="text-sm text-text-muted">Consumo estimado</span>
              <span className="tabular text-sm text-text-primary">{wattage} W</span>
            </div>

            <div className="trace-divider my-5" />

            {errors.length === 0 && warnings.length === 0 && (
              <p className="flex items-center gap-2 text-sm text-signal">
                <CheckCircle2 size={16} /> Sin incompatibilidades detectadas
                por ahora.
              </p>
            )}

            {errors.length > 0 && (
              <div className="space-y-2">
                {errors.map((e, i) => (
                  <p key={i} className="flex items-start gap-2 text-sm text-warn">
                    <XCircle size={16} className="mt-0.5 shrink-0" />
                    {e.message}
                  </p>
                ))}
              </div>
            )}

            {warnings.length > 0 && (
              <div className="mt-2 space-y-2">
                {warnings.map((w, i) => (
                  <p
                    key={i}
                    className="flex items-start gap-2 text-sm text-copper-bright"
                  >
                    <AlertTriangle size={16} className="mt-0.5 shrink-0" />
                    {w.message}
                  </p>
                ))}
              </div>
            )}

            <div className="trace-divider my-5" />
            <p className="text-xs text-text-faint">
              Comprando cada pieza desde su ficha se abre el enlace de
              afiliado correspondiente en Amazon.
            </p>
          </div>

          {Object.values(build).filter(Boolean).length > 0 && (
            <div className="mt-4 space-y-2">
              {Object.entries(build).map(([key, product]) =>
                product ? (
                  <div key={key} className="flex items-center justify-between gap-3">
                    <span className="truncate text-sm text-text-muted">
                      {product.name}
                    </span>
                    <BuyButton
                      href={product.affiliateUrl}
                      confirmed={product.affiliateConfirmed}
                    />
                  </div>
                ) : null
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
