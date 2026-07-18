import { Accessibility, ArrowUpRight, GlassWater, Heart, Leaf, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { copy, rows } from '@/lib/content'

const icons = [Leaf, Heart, MapPin]

export default function About() {
  const intro = copy('about')
  const values = rows('about', 'value')
  return (
    <>
      <Seo title="Our Story | The Gym Nicosia" description="Meet The Gym: an independent bar and kitchen made for Nicosia, serving seasonal Mediterranean food and thoughtful drinks in the old town." path="/about" image="/images/interior.webp" />
      <section className="relative flex min-h-[78vh] items-end bg-ink pb-16 pt-40 text-surface lg:pb-24">
        <img src="/images/interior.webp" alt="Warm limestone dining room and bar opening to a leafy courtyard" className="absolute inset-0 size-full object-cover" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/30" />
        <div className="container-site relative">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">{intro.eyebrow}</p>
          <h1 className="display-lg mt-5 max-w-4xl">{intro.title}</h1>
        </div>
      </section>

      <section className="container-site py-20 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <p className="eyebrow">What we’re about</p>
          <div><p className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">{intro.body}</p><p className="mt-8 max-w-2xl text-base leading-8 text-muted">Our day begins with coffee and brunch, gathers pace over shared food and ends, often late, with cocktails at the bar. The menu is Mediterranean at heart and unmistakably Cypriot in spirit.</p></div>
        </div>
      </section>

      <section className="bg-surface py-20 lg:py-28">
        <div className="container-site">
          <div className="mb-12 flex items-end justify-between"><div><p className="eyebrow">Our way</p><h2 className="mt-4 text-5xl sm:text-6xl">Simple things, done well.</h2></div><span className="hidden font-display text-8xl text-line md:block">03</span></div>
          <div className="grid gap-px overflow-hidden rounded-[var(--radius-card)] border border-line bg-line md:grid-cols-3">
            {values.map((value, i) => {
              const Icon = icons[i]
              return <article key={value.title} className="bg-canvas p-8 lg:p-10"><Icon className="text-brand" strokeWidth={1.5} size={30} /><h3 className="mt-14 text-3xl">{value.title}</h3><p className="mt-4 text-sm leading-7 text-muted">{value.body}</p></article>
            })}
          </div>
        </div>
      </section>

      <section className="container-site py-20 lg:py-28">
        <div className="grid overflow-hidden rounded-[var(--radius-card)] bg-brand-deep text-surface lg:grid-cols-2">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">At home here</p>
            <h2 className="mt-4 text-5xl sm:text-6xl">89 Onasagorou</h2>
            <p className="mt-6 max-w-lg leading-8 text-surface/70">Set among the stone lanes and creative energy of old Nicosia, our home is an easy place to settle into — indoors, at the bar or outside.</p>
            <div className="mt-8 flex flex-wrap gap-5 text-sm text-surface/65"><span className="inline-flex items-center gap-2"><Accessibility size={18} className="text-brass" /> Accessible</span><span className="inline-flex items-center gap-2"><GlassWater size={18} className="text-brass" /> Free Wi-Fi</span></div>
          </div>
          <div className="flex min-h-72 items-center justify-center bg-brand p-10 text-center">
            <div><p className="font-display text-4xl">Pull up a chair.</p><p className="mt-3 text-sm text-surface/70">We’ll take care of the rest.</p><Link to="/reservations" className="button-light mt-7">Reserve a table <ArrowUpRight size={16} /></Link></div>
          </div>
        </div>
      </section>
    </>
  )
}
