import { Link } from '@tanstack/react-router';
import { ArrowUpRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from './cart';
import { money, type Product } from '@/lib/products';

export function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  return <article className="product-card">
    <Link to="/products/$productId" params={{ productId: product.id }} className="product-photo block" aria-label={`View ${product.name}`}>
      <img src={product.image} alt={`${product.name} tea tin with roasted tea leaves`} loading="lazy" width={512} height={512} />
      {product.tag && <span className="product-tag">{product.tag}</span>}
      <span className="absolute bottom-4 right-4 flex size-8 items-center justify-center rounded-full bg-background/80"><ArrowUpRight size={14} /></span>
    </Link>
    <div className="mt-5 flex items-start justify-between gap-2"><Link to="/products/$productId" params={{ productId: product.id }}><h3 className="text-[24px] leading-tight">{product.name}</h3></Link><span className="pt-1 text-xs">{money(product.price)}</span></div>
    <p className="mt-2 text-[11px] text-muted-foreground">{product.subtitle}</p>
    <div className="mt-4 flex items-center justify-between border-t border-border/70 pt-3"><span className="text-[10px] text-muted-foreground">Loose leaf · {product.weight}</span><Button variant="ghost" size="sm" className="h-7 px-0 text-[10px]" onClick={() => add(product)}><Plus size={12} /> Add to bag</Button></div>
  </article>;
}