import { ArrowUpRight } from "lucide-react";

export default function BuyButton({
  href,
  price,
  dealPrice,
  confirmed = true,
  className = "",
}: {
  href: string;
  price?: number;
  dealPrice?: number;
  confirmed?: boolean;
  className?: string;
}) {
  const disabled = !href;
  return (
    <a
      href={disabled ? undefined : href}
      target={disabled ? undefined : "_blank"}
      rel={disabled ? undefined : "nofollow sponsored noopener"}
      aria-disabled={disabled}
      className={`group inline-flex items-center justify-center gap-2 bg-copper px-5 py-3 text-sm font-semibold text-bg-base transition-colors hover:bg-copper-bright ${
        disabled ? "pointer-events-none opacity-40" : ""
      } ${className}`}
    >
      <span>
        Ver precio en Amazon
        {dealPrice ? (
          <span className="ml-1.5 tabular">
            {dealPrice.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
          </span>
        ) : price ? (
          <span className="ml-1.5 tabular">
            {price.toLocaleString("es-ES", { style: "currency", currency: "EUR" })}
          </span>
        ) : null}
      </span>
      <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      {!confirmed && (
        <span className="sr-only">Enlace de prueba, producto pendiente de confirmar</span>
      )}
    </a>
  );
}
