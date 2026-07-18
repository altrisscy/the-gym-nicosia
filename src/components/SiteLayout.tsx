import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, Star, X } from 'lucide-react'

const nav = [
  ['Home', '/home'],
  ['Menu', '/menu'],
  ['About', '/about'],
  ['Reservations', '/reservations'],
]

export function SiteLayout() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  return (
    <div className="min-h-screen overflow-hidden">
      <a href="#main-content" className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-full bg-ink px-5 py-3 text-sm text-surface focus:translate-y-0">Skip to content</a>
      <header className="absolute inset-x-0 top-0 z-50 text-surface">
        <div className="container-site flex h-24 items-center justify-between">
          <Link to="/home" className="font-display text-3xl tracking-tight" aria-label="The Gym home">The Gym<span className="text-brass">.</span></Link>
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Main navigation">
            {nav.map(([label, href]) => (
              <NavLink key={href} to={href} className={({ isActive }) => `text-sm transition hover:text-brass ${isActive ? 'text-brass' : 'text-surface/90'}`}>{label}</NavLink>
            ))}
          </nav>
          <Link to="/reservations" className="button-light hidden lg:inline-flex">Book a table <ArrowUpRight size={16} /></Link>
          <button className="grid size-11 place-items-center rounded-full border border-surface/30 lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu"><Menu /></button>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-[70] bg-brand-deep text-surface lg:hidden">
          <div className="container-site flex h-24 items-center justify-between">
            <span className="font-display text-3xl">The Gym<span className="text-brass">.</span></span>
            <button className="grid size-11 place-items-center rounded-full border border-surface/30" onClick={() => setOpen(false)} aria-label="Close menu"><X /></button>
          </div>
          <nav className="container-site flex flex-col gap-3 pt-14" aria-label="Mobile navigation">
            {nav.map(([label, href], index) => (
              <NavLink key={href} to={href} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-surface/20 py-4 font-display text-5xl">
                {label}<span className="font-sans text-xs text-brass">0{index + 1}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      <main id="main-content"><Outlet /></main>

      <footer className="bg-ink text-surface">
        <div className="container-site py-16 lg:py-20">
          <div className="grid gap-12 border-b border-surface/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
            <div>
              <p className="font-display text-5xl">The Gym<span className="text-brass">.</span></p>
              <p className="mt-5 max-w-sm text-sm leading-7 text-surface/65">A bar and kitchen for long brunches, shared plates and very good nights in the heart of old Nicosia.</p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm"><Star size={15} className="fill-brass text-brass" /> 4.7 <span className="text-surface/50">· 1,197 Google reviews</span></div>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brass">Find us</p>
              <address className="not-italic text-sm leading-7 text-surface/70">89 Onasagorou<br />Nicosia 1011, Cyprus</address>
              <a href="tel:+35722002001" className="mt-3 inline-block text-sm hover:text-brass">+357 22 002001</a>
            </div>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-brass">Opening hours</p>
              <p className="text-sm leading-7 text-surface/70">Tue–Thu · 10:30–01:00<br />Fri–Sat · 10:30–01:30<br />Sun · 10:30–01:00<br />Monday · Closed</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-7 text-xs text-surface/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} The Gym Nicosia</p>
            <a href="https://www.google.com/maps/search/?api=1&query=The%20Gym%2089%20Onasagorou%20Nicosia" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-brass">Open in Google Maps <ArrowUpRight size={13} /></a>
          </div>
        </div>
      </footer>
      {pathname !== '/reservations' && <Link to="/reservations" className="fixed bottom-4 left-4 right-4 z-40 flex min-h-12 items-center justify-center rounded-full bg-brand px-6 text-sm font-semibold text-surface shadow-glow sm:left-auto sm:right-6 lg:hidden">Reserve a table</Link>}
    </div>
  )
}
