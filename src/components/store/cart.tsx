import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Product } from '@/lib/products';

type Item = { product: Product; quantity: number };
type Cart = { items: Item[]; open: boolean; setOpen: (open: boolean) => void; add: (product: Product, quantity?: number) => void; update: (id: string, quantity: number) => void; count: number; total: number };
const CartContext = createContext<Cart | null>(null);
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);
  const [open, setOpen] = useState(false);
  function add(product: Product, quantity = 1) {
    setItems(current => current.some(item => item.product.id === product.id) ? current.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item) : [...current, { product, quantity }]);
    setOpen(true);
  }
  function update(id: string, quantity: number) { setItems(current => current.map(item => item.product.id === id ? { ...item, quantity } : item).filter(item => item.quantity > 0)); }
  return <CartContext.Provider value={{ items, open, setOpen, add, update, count: items.reduce((sum, item) => sum + item.quantity, 0), total: items.reduce((sum, item) => sum + item.quantity * item.product.price, 0) }}>{children}</CartContext.Provider>;
}
export function useCart() { const cart = useContext(CartContext); if (!cart) throw new Error('Cart must be used within CartProvider'); return cart; }