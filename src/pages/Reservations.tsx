import { FormEvent, useState } from 'react'
import { ArrowUpRight, Check, Clock3, MapPin, Phone } from 'lucide-react'
import { Seo } from '@/components/Seo'
import { copy, rows } from '@/lib/content'

export default function Reservations() {
  const intro = copy('reservations')
  const note = rows('reservations', 'note')[0]
  const [sent, setSent] = useState(false)

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSent(true)
  }

  return (
    <>
      <Seo title="Reservations | The Gym Nicosia" description="Reserve a table at The Gym, 89 Onasagorou in Nicosia. Join us for brunch, dinner or cocktails Tuesday through Sunday." path="/reservations" image="/images/interior.webp" />
      <section className="bg-brand-deep pb-16 pt-40 text-surface lg:pb-24 lg:pt-48">
        <div className="container-site grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] text-brass">{intro.eyebrow}</p><h1 className="display-lg mt-5">{intro.title}</h1></div>
          <p className="max-w-xl text-base leading-8 text-surface/70">{intro.body}</p>
        </div>
      </section>

      <section className="container-site py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="rounded-[var(--radius-card)] bg-surface p-6 shadow-glow sm:p-10">
            {sent ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                <div className="grid size-16 place-items-center rounded-full bg-olive text-surface"><Check size={28} /></div>
                <h2 className="mt-7 text-4xl">Request received.</h2>
                <p className="mt-4 max-w-md text-sm leading-7 text-muted">Thank you. This demo form is ready to connect to your preferred booking service. For immediate confirmation, call us on +357 22 002001.</p>
                <button onClick={() => setSent(false)} className="button-ghost mt-7">Make another request</button>
              </div>
            ) : (
              <form onSubmit={submit}>
                <div className="mb-8"><p className="eyebrow">Reservation details</p><h2 className="mt-3 text-4xl">Let’s find your table.</h2></div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="text-sm font-medium">Date<input required name="date" type="date" className="field mt-2" /></label>
                  <label className="text-sm font-medium">Time<select required name="time" className="field mt-2" defaultValue=""><option value="" disabled>Select a time</option><option>10:30</option><option>12:00</option><option>13:30</option><option>18:30</option><option>20:00</option><option>21:30</option></select></label>
                  <label className="text-sm font-medium">Guests<select required name="guests" className="field mt-2" defaultValue="2"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option><option>6</option><option>7</option><option>8+</option></select></label>
                  <label className="text-sm font-medium">Name<input required name="name" autoComplete="name" className="field mt-2" placeholder="Your name" /></label>
                  <label className="text-sm font-medium">Phone<input required name="phone" type="tel" autoComplete="tel" className="field mt-2" placeholder="+357" /></label>
                  <label className="text-sm font-medium">Email<input required name="email" type="email" autoComplete="email" className="field mt-2" placeholder="you@example.com" /></label>
                  <label className="text-sm font-medium sm:col-span-2">Anything we should know?<textarea name="notes" className="field mt-2 min-h-28 resize-y" placeholder="Accessibility, outdoor seating, dietary needs…" /></label>
                </div>
                <button className="button-primary mt-7 w-full sm:w-auto" type="submit">Request reservation <ArrowUpRight size={16} /></button>
                <p className="mt-4 text-xs leading-5 text-muted">Submitting a request does not confirm your table. Our team will contact you shortly.</p>
              </form>
            )}
          </div>

          <aside>
            <img src="/images/interior.webp" alt="The Gym's warmly lit dining room" className="aspect-[4/3] w-full rounded-[var(--radius-card)] object-cover" />
            <div className="mt-7 space-y-5">
              <a href="tel:+35722002001" className="flex items-center gap-4 border-b border-line pb-5"><span className="grid size-11 place-items-center rounded-full bg-brand text-surface"><Phone size={18} /></span><span><span className="block text-xs uppercase tracking-[0.15em] text-muted">Call us</span><span className="mt-1 block font-semibold">+357 22 002001</span></span></a>
              <div className="flex items-start gap-4 border-b border-line pb-5"><span className="grid size-11 shrink-0 place-items-center rounded-full bg-olive text-surface"><Clock3 size={18} /></span><span><span className="block text-xs uppercase tracking-[0.15em] text-muted">Hours</span><span className="mt-1 block text-sm leading-6">Tue–Thu & Sun until 01:00<br />Fri–Sat until 01:30 · Mon closed</span></span></div>
              <a href="https://www.google.com/maps/search/?api=1&query=The%20Gym%2089%20Onasagorou%20Nicosia" target="_blank" rel="noreferrer" className="flex items-center gap-4"><span className="grid size-11 place-items-center rounded-full bg-brass text-ink"><MapPin size={18} /></span><span><span className="block text-xs uppercase tracking-[0.15em] text-muted">Find us</span><span className="mt-1 block font-semibold">89 Onasagorou, Nicosia</span></span></a>
            </div>
            <div className="mt-8 rounded-[var(--radius-card)] border border-line p-6"><h3 className="font-sans text-sm font-semibold">{note.title}</h3><p className="mt-3 text-sm leading-7 text-muted">{note.body}</p></div>
          </aside>
        </div>
      </section>
    </>
  )
}
