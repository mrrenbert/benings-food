import { createFileRoute, Link } from '@tanstack/react-router';
import { useCart } from '@/components/store/cart';
import { Button } from '@/components/ui/button';
import { money } from '@/lib/products';
import { pageHead } from '@/lib/metadata';
import { ShoppingBag } from 'lucide-react';
import { getWhatsAppCartUrl } from '@/lib/whatsapp';

export const Route = createFileRoute('/checkout')({
  head: () => pageHead('Your Order', 'Review the roasted teas in your Benings Food shopping bag.'),
  component: Checkout,
});

function Checkout() {
  const { items, total, setOpen } = useCart();

  return (
    <section className="page-width min-h-[60vh] py-16">
      <p className="eyebrow text-roast">One step closer to calm</p>
      <h1 className="mt-4 text-5xl">Your order.</h1>
      {items.length ? (
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          <div>
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center gap-5 border-b border-border py-5">
                <img
                  src={product.image}
                  alt={product.name}
                  width={80}
                  height={80}
                  className="size-20 object-cover"
                />
                <div className="flex-1">
                  <h2 className="text-2xl">{product.name}</h2>
                  <p className="mt-1 text-xs text-muted-foreground">Quantity: {quantity}</p>
                </div>
                <p className="text-sm">{money(product.price * quantity)}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-5">
            <div className="flex justify-between text-lg font-medium">
              <span>Subtotal</span>
              <span>{money(total)}</span>
            </div>
            <div className="mt-8 flex flex-col gap-3.5">
              <Button
                variant="tea"
                size="lg"
                className="w-full py-6 text-sm font-semibold shadow-md hover:shadow-lg transition-all"
                asChild
              >
                <a href={getWhatsAppCartUrl(items, total)} target="_blank" rel="noreferrer">
                  Konfirmasi Pesanan via WhatsApp
                </a>
              </Button>
              <div className="flex items-center justify-between gap-4 pt-1">
                <Button variant="teaOutline" onClick={() => setOpen(true)}>
                  Edit your bag
                </Button>
                <Button variant="link" asChild>
                  <Link to="/shop">Continue shopping</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-10 flex flex-col items-start gap-5">
          <ShoppingBag size={32} strokeWidth={1} />
          <p className="text-sm text-muted-foreground">Your bag is empty. Find your daily tea.</p>
          <Button asChild variant="tea">
            <Link to="/shop">Explore our teas</Link>
          </Button>
        </div>
      )}
    </section>
  );
}