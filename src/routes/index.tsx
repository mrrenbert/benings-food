import { createFileRoute, Link, useLocation } from '@tanstack/react-router';
import { useEffect } from 'react';
import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import hero from '@/assets/tea-hero.jpg';
import { products } from '@/lib/products';
import { pageHead } from '@/lib/metadata';
import { ProductCard } from '@/components/store/product-card';
import { Values, Story, Reviews, Faq, Newsletter, Reveal } from '@/components/store/sections';

export const Route = createFileRoute('/')({
  head: () =>
    pageHead(
      'Roasted tea. A little everyday calm.',
      'Discover thoughtfully roasted hojicha, kukicha, genmaicha and oolong. Premium tea for your everyday moments.'
    ),
  component: Index,
});

function Index() {
  // Smooth-scroll to the section referenced by the navbar anchors when arriving from another page.
  const location = useLocation();
  useEffect(() => {
    const id = location.hash.replace(/^#/, '');
    if (!id) return;
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }, [location.hash]);

  return (
    <>
      <section className="hero">
        <img
          src={hero}
          alt="Amber roasted tea in a glass teapot beside a handmade ceramic cup"
          className="hero-photo"
          width={1920}
          height={1024}
          fetchPriority="high"
        />
        <div className="hero-content page-width reveal">
          <p className="eyebrow flex items-center gap-2">
            <span className="h-px w-7 bg-primary/60" /> Thoughtfully roasted. Simply enjoyed.
          </p>
          <h1>
            Roasted tea.
            <br />A little <em>everyday</em>
            <br />
            <em>calm.</em>
          </h1>
          <p className="hero-copy">
            Rich in character. Gentle on the soul.
            <br />
            Discover beautifully roasted teas made for
            <br className="hidden sm:block" /> the moments that matter.
          </p>
          {/* Mobile elegant semi-transparent container to ensure high text contrast over the background teapot image */}
          <div className="mt-6 sm:mt-7 rounded-xl border border-border/60 bg-background/85 p-4 backdrop-blur-md shadow-sm sm:border-0 sm:bg-transparent sm:p-0 sm:backdrop-blur-none sm:shadow-none max-w-fit">
            <div className="flex flex-wrap items-center gap-4 sm:gap-5">
              <Button variant="tea" asChild>
                <Link to="/shop">
                  Explore our teas <ArrowRight size={14} />
                </Link>
              </Button>
              <Link
                to="/about"
                className="border-b border-primary/60 pb-1 text-[11px] font-medium text-foreground hover:text-primary transition-colors"
              >
                Meet Benings Food
              </Link>
            </div>
            <div className="mt-3.5 sm:mt-7 flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-[9px] font-medium text-foreground/90 sm:text-primary/80">
              <Sparkles size={12} strokeWidth={1.3} className="text-roast" /> Pure ingredients{' '}
              <span className="px-1.5 sm:px-2 opacity-60">·</span> Small-batch roasted{' '}
              <span className="px-1.5 sm:px-2 opacity-60">·</span> Full of goodness
            </div>
          </div>
        </div>
        <div className="hero-bottom page-width flex items-center justify-between text-[9px] text-hero-ink">
          <span>GOOD TEA. SLOW MOMENTS.</span>
          <a href="#catalog" aria-label="Discover the collection" className="flex items-center gap-3">
            Discover <ArrowDown size={12} />
          </a>
        </div>
      </section>
      <Values />
      <section id="catalog" className="scroll-mt-24 py-16 md:py-20">
        <Reveal className="page-width">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-roast">Find your daily favorite</p>
              <h2 className="section-heading mt-3">The roasted collection.</h2>
              <p className="mt-3 text-xs text-muted-foreground">
                Four distinct characters. One beautiful ritual.
              </p>
            </div>
            <Button variant="link" asChild className="h-auto px-0 text-[11px]">
              <Link to="/shop">
                Shop all teas <ArrowRight size={14} />
              </Link>
            </Button>
          </div>
          <div className="mt-9 grid grid-cols-2 gap-x-5 gap-y-10 md:grid-cols-4 md:gap-7">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Reveal>
      </section>
      <Story />
      <Reviews />
      <Faq />
      <Newsletter />
    </>
  );
}
