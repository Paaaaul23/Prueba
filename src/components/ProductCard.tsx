import Link from "next/link";
import { Product } from "@/types/product";
import RatingStars from "./RatingStars";
import BuyButton from "./BuyButton";
import ProductThumb from "./ProductThumb";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="spec-frame flex flex-col p-4">
      <Link href={`/producto/${product.slug}`} className="block">
        <div className="mb-4 flex aspect-[4/3] items-center justify-center bg-bg-surface-raised">
          <ProductThumb category={product.category} className="h-16 w-16 text-text-faint" />
        </div>
        <p className="font-mono text-[11px] uppercase tracking-wide text-copper">
          {product.brand}
        </p>
        <h3 className="mt-1 font-display text-base font-medium leading-snug text-text-primary">
          {product.name}
        </h3>
      </Link>
      <p className="mt-2 line-clamp-2 text-sm text-text-muted">
        {product.shortDescription}
      </p>
      <div className="mt-3">
        <RatingStars rating={product.rating} reviewCount={product.reviewCount} />
      </div>
      <div className="mt-4 flex items-center justify-between gap-3">
        <BuyButton
          href={product.affiliateUrl}
          price={product.price}
          dealPrice={product.isDeal ? product.dealPrice : undefined}
          confirmed={product.affiliateConfirmed}
          className="w-full"
        />
      </div>
    </article>
  );
}
