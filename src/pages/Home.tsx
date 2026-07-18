import { ArrowDown, ArrowUpRight, Clock3, MapPin, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { copy, rows } from '@/lib/content'

export default function Home() {
  const hero = copy('home')
  const highlights = rows('home', 'highlight')
  return (
    <>
      <Seo title="The Gym Nicosia | Brunch, Dinner & Cocktails" description="Brunch, Mediterranean sharing plates and standout cocktails at The Gym, 89 Onasagorou in old Nicosia. Reserve your table." path="/home" image="/images/hero-dinner.webp" />
      <section className="relative min-h-[780px] bg-ink text-surface lg:min-h-screen">
        <img src="/images/hero-dinner.webp" alt="Charred octopus and a cocktail on a warm walnut table" className="absolute inset-0 size-full object-cover object-[68%_center]" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/75 to-ink/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/30" />
        <div className="container-site relative flex min-h-[780px] items-end pb-28 pt-40 lg:min-h-screen lg:pb-20">
          <div className="max-w-3xl">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-brass">{hero.eyebrow}</p>
            <h1 className="display-xl max-w-3xl">{hero.title}</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-surface/75 sm:text-lg">{hero.body}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/reservations" className="button-light">{hero.primaryCta} <ArrowUpRight size={16} /></Link>
              <Link to="/menu" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-surface/40 px-6 py-3 text-sm font-semibold text-surface transition hover:bg-surface/10">{hero.secondaryCta}</Link>
            </div>
          </div>
          <a href="#welcome" className="absolute bottom-8 right-10 hidden items-center gap-2 text-xs uppercase tracking-[0.2em] text-surface/60 lg:flex">Discover <ArrowDown size={15} /></a>
        </div>
      </section>

      <section id="welcome" className="container-site py-20 lg:py-32">
        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <p className="eyebrow">Nicosia, naturally</p>
            <h2 className="display-lg mt-5">One place.<br /><span className="italic text-brand">Every mood.</span></h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line sm:grid-cols-3">
            {highlights.map((item, i) => (
              <article key={item.title} className="bg-surface p-7 sm:min-h-64">
                <span className="text-xs text-brand">0{i + 1}</span>
                <h3 className="mt-12 text-3xl leading-tight">{item.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-olive py-20 text-surface lg:py-28">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative">
            <img src="/images/brunch-table.webp" alt="A sunlit table filled with brunch plates" className="aspect-[4/5] w-full rounded-[var(--radius-card)] object-cover shadow-glow" loading="lazy" />
            <div className="absolute -bottom-5 -right-2 rounded-full bg-brand px-6 py-4 text-xs font-semibold uppercase tracking-[0.18em] sm:right-8">From 10:30</div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">Brunch at The Gym</p>
            <h2 className="display-lg mt-5">Morning plans, <span className="italic text-brass">sorted.</span></h2>
            <p className="mt-7 max-w-xl text-base leading-8 text-surface/70">Bright plates, strong coffee and just enough room for something sweet. Our brunch menu is built for slow starts and second rounds.</p>
            <Link to="/menu" className="button-light mt-8">See the brunch menu <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="container-site py-20 lg:py-28">
        <div className="grid overflow-hidden rounded-[var(--radius-card)] bg-brand text-surface lg:grid-cols-[1.15fr_0.85fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">Come by</p>
            <h2 className="mt-4 font-display text-5xl leading-none sm:text-6xl">Your table in the old town.</h2>
            <div className="mt-10 grid gap-5 text-sm text-surface/75 sm:grid-cols-3">
              <div><MapPin className="mb-3 text-brass" size={20} />89 Onasagorou<br />Nicosia 1011</div>
              <div><Clock3 className="mb-3 text-brass" size={20} />Tue–Sun<br />from 10:30</div>
              <div><Star className="mb-3 fill-brass text-brass" size={20} />4.7 on Google<br />1,197 reviews</div>
            </div>
          </div>
          <div className="flex items-center justify-center bg-brand-deep p-10 text-center">
            <div>
              <p className="font-display text-4xl">Hungry yet?</p>
              <Link to="/reservations" className="button-light mt-6">Reserve now <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
