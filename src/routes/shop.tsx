import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { products } from '@/lib/products';
import { pageHead } from '@/lib/metadata';
import { ProductCard } from '@/components/store/product-card';
import { Newsletter } from '@/components/store/sections';
import { Button } from '@/components/ui/button';
export const Route = createFileRoute('/shop')({ head: () => pageHead('The Roasted Collection', 'Shop premium roasted tea, from signature hojicha to deeply aromatic oolong.'), component: Shop });
function Shop() {
  const [filter, setFilter] = useState('All teas'); const [sort, setSort] = useState('featured');
  const teas = products.filter(product => filter !== 'Low caffeine' || product.id === 'roasted-kukicha').slice().sort((a,b) => sort === 'low' ? a.price - b.price : sort === 'high' ? b.price - a.price : 0);
  return <><section className="page-width py-14 md:py-20 reveal"><p className="eyebrow text-roast">Thoughtfully roasted. Simply enjoyed.</p><h1 className="mt-4 text-5xl md:text-6xl">The roasted collection.</h1><p className="mt-4 text-sm text-muted-foreground">Discover your daily cup of calm.</p><div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-y border-border py-4"><div className="flex gap-2">{['All teas', 'Low caffeine'].map(option => <Button key={option} variant={filter === option ? 'tea' : 'ghost'} size="sm" onClick={() => setFilter(option)} aria-pressed={filter === option}>{option}</Button>)}</div><label className="flex items-center gap-3 text-xs text-muted-foreground">Sort by<select value={sort} onChange={event => setSort(event.target.value)} className="bg-transparent text-foreground outline-none"><option value="featured">Featured</option><option value="low">Price: low to high</option><option value="high">Price: high to low</option></select></label></div><p className="mt-5 text-[10px] text-muted-foreground">{teas.length} teas</p><div className="mt-6 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-7">{teas.map(product => <ProductCard key={product.id} product={product} />)}</div></section><Newsletter /></>;
}