import { useState } from 'react'
import { Activity, ArrowUpRight, Menu, X } from 'lucide-react'

export function SiteHeader({ home = false }: { home?: boolean }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const prefix = home ? '' : '/'
  const closeMenu = () => setMenuOpen(false)
  const navItems = [
    ['About', '#mission'],
    ['Industries', '#industries'],
    ['Platform', '#platform'],
    ['Our work', '#working'],
    ['Capabilities', '#product-focus'],
  ]

  return (
    <header className="absolute inset-x-0 top-0 z-40 border-b border-field-foreground/15 text-field-foreground">
      <nav className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-14" aria-label="Main navigation">
        <a href="/" className="group flex items-center gap-3" aria-label="PhysixAI home" onClick={closeMenu}>
          <span className="grid size-9 place-items-center rounded-full border border-highlight/60 text-highlight transition-transform duration-300 group-hover:rotate-45"><Activity size={17} strokeWidth={1.5} /></span>
          <span className="font-serif text-[17px] font-semibold tracking-[-0.04em]">PhysixAI<span className="text-highlight">.</span></span>
        </a>
        <div className="hidden items-center gap-4 text-[12px] text-field-foreground/70 md:flex lg:hidden">
          <a className="transition-colors hover:text-highlight" href={`${prefix}#mission`}>About</a>
          <a className="transition-colors hover:text-highlight" href={`${prefix}#industries`}>Industries</a>
          <a className="transition-colors hover:text-highlight" href={`${prefix}#platform`}>Platform</a>
        </div>
        <div className="hidden items-center gap-7 text-[12px] text-field-foreground/70 lg:flex">
          {navItems.map(([label, target]) => <a key={label} className="transition-colors hover:text-highlight" href={`${prefix}${target}`}>{label}</a>)}
        </div>
        <a href="mailto:hello@physixai.co?subject=PhysixAI%20conversation" className="hidden min-h-10 items-center gap-2 border border-field-foreground/25 px-4 text-xs font-semibold transition-colors hover:border-highlight hover:text-highlight sm:flex">Contact us <ArrowUpRight size={14} /></a>
        <button type="button" className="grid size-11 place-items-center md:hidden" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>
      {menuOpen && <div className="border-t border-field-foreground/15 bg-field px-5 py-5 md:hidden"><div className="flex flex-col gap-4 text-sm">{navItems.map(([label, target]) => <a key={label} href={`${prefix}${target}`} onClick={closeMenu}>{label}</a>)}<a className="text-highlight" href="mailto:hello@physixai.co?subject=PhysixAI%20conversation" onClick={closeMenu}>Contact us <ArrowUpRight className="ml-1 inline" size={14} /></a></div></div>}
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-field-foreground/15 bg-field px-5 py-8 text-field-foreground sm:px-8 lg:px-14">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-5 text-[11px] text-field-foreground/70 sm:flex-row sm:items-center sm:justify-between">
        <a href="/" className="font-serif text-sm font-semibold tracking-[-0.03em] text-field-foreground">PhysixAI<span className="text-highlight">.</span></a>
        <span>Physics-aware AI for engineering.</span>
        <a className="transition-colors hover:text-highlight" href="mailto:hello@physixai.co">hello@physixai.co</a>
        <span>© {new Date().getFullYear()} PhysixAI</span>
      </div>
    </footer>
  )
}
