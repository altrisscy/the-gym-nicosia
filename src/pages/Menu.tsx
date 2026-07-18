import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '@/components/Seo'
import { copy, rows } from '@/lib/content'

export default function Menu() {
  const intro = copy('menu')
  const items = rows('menu', 'item')
  const categories = [...new Set(items.map((item) => item.category))]
  return (
    <>
      <Seo title="Menu | The Gym Nicosia" description="Explore brunch, Mediterranean sharing plates and signature cocktails at The Gym Nicosia. Served Tuesday to Sunday from 10:30." path="/menu" image="/images/brunch-table.webp" />
      <section className="bg-brand-deep pb-20 pt-40 text-surface lg:pb-28 lg:pt-48">
        <div className="container-site grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">{intro.eyebrow}</p><h1 className="display-lg mt-5 max-w-3xl">{intro.title}</h1></div>
          <p className="max-w-xl text-base leading-8 text-surface/70 lg:pb-2">{intro.body}</p>
        </div>
      </section>

      <section className="container-site py-16 lg:py-24">
        <div className="grid gap-16 lg:grid-cols-[0.72fr_1.28fr] lg:gap-24">
          <div className="lg:sticky lg:top-8 lg:self-start">
            <img src="/images/brunch-table.webp" alt="Brunch dishes served by a Nicosia window" className="aspect-[4/5] w-full rounded-[var(--radius-card)] object-cover shadow-glow" />
            <div className="mt-6 flex items-center justify-between border-b border-line pb-5 text-sm"><span className="text-muted">Average spend</span><span className="font-semibold">€15–35</span></div>
            <p className="mt-5 text-xs leading-5 text-muted">Menu items may change with the season. Please tell our team about allergies before ordering.</p>
          </div>
          <div>
            {categories.map((category, index) => (
              <section key={category} className={`${index ? 'mt-16 border-t border-line pt-14' : ''}`}>
                <div className="mb-8 flex items-baseline justify-between"><h2 className="text-4xl sm:text-5xl">{category}</h2><span className="text-xs uppercase tracking-[0.18em] text-brand">0{index + 1}</span></div>
                <div className="space-y-1">
                  {items.filter((item) => item.category === category).map((item) => (
                    <article key={item.name} className="group grid grid-cols-[1fr_auto] gap-x-5 border-b border-line py-6">
                      <div><h3 className="font-sans text-base font-semibold transition group-hover:text-brand">{item.name}</h3><p className="mt-2 max-w-xl text-sm leading-6 text-muted">{item.description}</p></div>
                      <p className="font-display text-2xl text-brand">{item.price}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="container-site pb-20 lg:pb-28">
        <div className="flex flex-col items-start justify-between gap-8 rounded-[var(--radius-card)] bg-olive p-8 text-surface sm:p-12 lg:flex-row lg:items-center">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-brass">Good food tastes better together</p><h2 className="mt-3 text-4xl sm:text-5xl">Bring the whole table.</h2></div>
          <Link to="/reservations" className="button-light shrink-0">Book a table <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </>
  )
}
