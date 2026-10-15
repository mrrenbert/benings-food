import { createFileRoute } from '@tanstack/react-router';
import { Story, Values, Newsletter } from '@/components/store/sections';
import { pageHead } from '@/lib/metadata';
export const Route = createFileRoute('/about')({ head: () => pageHead('Our Story', 'Discover the care, craftsmanship, and quiet rituals behind Benings Food roasted tea.'), component: About });
function About() { return <><div className="page-width py-14 text-center reveal"><p className="eyebrow text-roast">The Benings Food story</p><h1 className="mt-4 text-5xl md:text-6xl">A love for the simple things.</h1><p className="mt-5 text-sm text-muted-foreground">Nature, patience, and a beautifully made cup of tea.</p></div><Story full /><Values /><Newsletter /></>; }