import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/PhysixSiteChrome'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: 'PhysixAI — Accelerating industrial innovation with AI' },
      { name: 'description', content: 'PhysixAI brings physics-aware AI into engineering workflows so teams can explore more of complex product and process design spaces.' },
      { property: 'og:title', content: 'PhysixAI — Accelerating industrial innovation with AI' },
      { property: 'og:description', content: 'Physics-aware AI for engineering workflows across complex products and processes.' },
    ],
  }),
  component: Home,
})

const industries = [
  { name: 'Semiconductors', image: 'https://cdn.prod.website-files.com/67521ae751519bd4a23e29e8/6a21a382b23d113beffb6284_Frame%20145.png', alt: 'Semiconductor engineering visualization', description: 'Explore package and cooling concepts where thermal limits shape the design space.' },
  { name: 'Aerospace & Defense', image: 'https://cdn.prod.website-files.com/67521ae751519bd4a23e29e8/6a21a382e65a7d03bcf39b0f_Frame%20147.png', alt: 'Aerospace engineering visualization', description: 'Examine more design configurations around demanding performance and certification constraints.' },
  { name: 'Materials', image: 'https://cdn.prod.website-files.com/67521ae751519bd4a23e29e8/6a21a382b3ffe320b1ae45e5_Frame%20146.png', alt: 'Materials engineering visualization', description: 'Connect material behavior to the engineering decisions that shape complex products.' },
  { name: 'Energy & Renewables', image: 'https://cdn.prod.website-files.com/67521ae751519bd4a23e29e8/6a21a382cdfacf99a467108b_Frame%20148.png', alt: 'Energy engineering visualization', description: 'Explore heat and flow possibilities before committing scarce time and capital.' },
  { name: 'Automotive', image: 'https://cdn.prod.website-files.com/67521ae751519bd4a23e29e8/6a21a382cdfacf99a4671088_Frame%20150.png', alt: 'Automotive engineering visualization', description: 'Investigate aerodynamic, thermal, and packaging trade-offs across a design family.' },
]

const offerings = [
  { number: '01', name: 'Generate', label: 'DESIGN SPACE', title: 'Create more possibilities within real constraints.', text: 'Explore editable geometry while preserving the boundaries engineers and programmes depend on.', href: '/generate' },
  { number: '02', name: 'Screen', label: 'PHYSICS AI', title: 'Bring physics into the search.', text: 'Rank candidate configurations against physical behavior before committing to a full solve.', href: '/screen' },
  { number: '03', name: 'Thread', label: 'ENGINEERING WORKFLOWS', title: 'Carry insight into the next decision.', text: 'Connect design intent with the engineering systems around manufacturing and operations.', href: '/thread' },
]

function Home() {
  const [activeIndustry, setActiveIndustry] = useState(0)

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section id="top" className="relative flex min-h-[760px] items-end overflow-hidden bg-field pt-28 text-field-foreground sm:min-h-[860px] lg:min-h-[100svh]">
        <div className="absolute inset-0 overflow-hidden bg-field">
          <iframe title="Illustrative physics AI engineering film" src="https://player.vimeo.com/video/1198458849?background=1&amp;quality=2k&amp;dnt=1" className="pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-full min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
          <div className="absolute inset-0 bg-gradient-to-r from-field via-field/70 to-field/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-field via-field/25 to-field/35" />
        </div>
        <SiteHeader home />
        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] gap-10 px-5 pb-12 sm:px-8 sm:pb-16 lg:grid-cols-[1fr_0.72fr] lg:items-end lg:gap-16 lg:px-14 lg:pb-20">
          <div className="max-w-[820px] animate-fade-in">
            <p className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-highlight sm:text-xs"><span className="h-px w-8 bg-highlight" /> PHYSICS-AWARE ENGINEERING</p>
            <h1 className="max-w-[800px] font-serif text-[clamp(3.4rem,6.1vw,5.4rem)] font-medium leading-[0.96] tracking-[-0.055em]">Accelerating Industrial Innovation with AI</h1>
          </div>
          <div className="max-w-[590px] border-l border-highlight/70 pl-5 text-sm leading-7 text-field-foreground/80 sm:text-base sm:leading-8 lg:mb-2">
            <p>Engineering development cycles are still measured in years. The design spaces that matter most go unexplored—not because the answers don’t exist, but because finding them takes too long.</p>
            <p className="mt-4">PhysixAI brings physics-aware AI directly into engineering workflows, compressing the distance between what you can imagine and what you can build.</p>
            <a href="#mission" className="mt-6 inline-flex min-h-11 items-center gap-3 border-b border-highlight pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-field-foreground transition-colors hover:text-highlight">Discover our mission <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      <section id="mission" className="border-b border-border bg-background px-5 py-16 sm:px-8 sm:py-24 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-9 flex items-center gap-4"><span className="grid size-8 place-items-center rounded-full border border-border font-mono text-xs text-muted-foreground">1</span><h2 className="font-mono text-xs uppercase tracking-[0.18em]">Mission</h2></div>
          <h3 className="max-w-6xl font-serif text-[clamp(2.3rem,5.3vw,5rem)] leading-[1.02] tracking-[-0.055em] text-primary">We empower industrial organizations to build beyond human imagination and address the defining challenges of our time.</h3>
          <div className="mt-9 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-14">
            <div className="relative aspect-[1.5] overflow-hidden bg-field">
              <img src="/images/aerodynamics-cfd.jpg" alt="Computational airflow visualization around a vehicle, showing simulated flow paths" className="h-full w-full object-contain" loading="lazy" />
            </div>
            <div className="max-w-2xl">
              <p className="text-sm leading-7 text-muted-foreground sm:text-base">The next industrial revolution will be AI-native. PhysixAI is being built around physics-aware AI as a core part of how engineering gets done—not as another layer bolted onto existing toolchains.</p>
              <p className="mt-5 text-sm leading-7 text-muted-foreground sm:text-base">We work toward a future where organizations building the world’s most complex systems can redefine what is possible in the time they have.</p>
              <a href="mailto:hello@physixai.co?subject=PhysixAI%20conversation" className="mt-7 inline-flex min-h-11 items-center gap-3 border-b border-foreground/30 pb-1 text-xs font-semibold transition-colors hover:border-primary hover:text-primary">About PhysixAI <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="border-b border-border bg-background px-5 py-16 sm:px-8 sm:py-24 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-9 flex items-center gap-4"><span className="grid size-8 place-items-center rounded-full border border-border font-mono text-xs text-muted-foreground">2</span><h2 className="font-mono text-xs uppercase tracking-[0.18em]">Platform</h2></div>
          <h3 className="max-w-5xl font-serif text-[clamp(2.3rem,5vw,4.5rem)] leading-[1.03] tracking-[-0.055em]">An AI-native engineering software stack.</h3>
          <div className="mt-9 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
            <div className="relative order-2 aspect-video overflow-hidden bg-field lg:order-1">
              <img src="/images/engineering-digital-twin.jpg" alt="Industrial equipment visualization with digital engineering overlays" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="order-1 border-l-2 border-highlight pl-5 lg:order-2 lg:pl-7">
              <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">The PhysixAI platform brings simulation, physics AI, data and engineering applications together as a connected foundation—designed to work alongside the tools engineers already use.</p>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">It is being shaped for the full product lifecycle: from early concept and design through manufacturing and operations. AI is not an add-on here; it is part of how the platform reasons about engineering.</p>
              <a href="/screen" className="mt-7 inline-flex min-h-11 items-center gap-3 border-b border-foreground/30 pb-1 text-xs font-semibold transition-colors hover:border-primary hover:text-primary">Explore the platform <ArrowUpRight size={15} /></a>
            </div>
          </div>
        </div>
      </section>

      <section id="industries" className="overflow-hidden border-b border-border bg-card py-16 sm:py-24">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-14">
          <div className="mb-9 flex items-center gap-4"><span className="grid size-8 place-items-center rounded-full border border-border font-mono text-xs text-muted-foreground">3</span><h2 className="font-mono text-xs uppercase tracking-[0.18em]">Impact</h2></div>
          <div className="grid gap-6 md:grid-cols-[1fr_0.8fr] md:items-end"><h3 className="max-w-4xl font-serif text-[clamp(2rem,4.6vw,4.1rem)] leading-[1.04] tracking-[-0.05em]">For sectors where complexity is highest and slow development costs the most.</h3><p className="max-w-lg text-sm leading-6 text-muted-foreground">Physics-aware AI can help teams explore more design possibilities across engineering-intensive industries.</p></div>
        </div>
        <div className="mt-9 flex snap-x gap-3 overflow-x-auto px-5 pb-3 sm:px-8 lg:px-14">
          {industries.map((industry, index) => <button key={industry.name} type="button" onClick={() => setActiveIndustry(index)} aria-pressed={activeIndustry === index} className={`group relative aspect-[0.82] w-[76vw] max-w-[340px] shrink-0 snap-start overflow-hidden border text-left transition-all duration-300 sm:w-[36vw] lg:w-[calc((100vw-160px)/4.5)] ${activeIndustry === index ? 'border-primary' : 'border-transparent'}`}>
            <img src={industry.image} alt={industry.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            <div className="absolute inset-0 bg-gradient-to-t from-field/95 via-field/15 to-transparent" />
            <span className="absolute left-4 top-4 font-mono text-[10px] text-field-foreground/75">0{index + 1}</span>
            <span className="absolute bottom-5 left-4 right-4 font-serif text-xl leading-tight text-field-foreground sm:text-2xl">{industry.name}</span>
          </button>)}
        </div>
        <div className="mx-auto mt-5 grid max-w-[1280px] gap-4 px-5 sm:px-8 md:grid-cols-[1fr_auto] md:items-center lg:px-14" aria-live="polite">
          <p className="max-w-3xl text-sm leading-6 text-muted-foreground">{industries[activeIndustry].description}</p>
          <span className="font-mono text-[9px] uppercase tracking-[0.13em] text-muted-foreground">Areas of focus</span>
        </div>
      </section>

      <section id="working" className="border-b border-border bg-background px-5 py-16 sm:px-8 sm:py-24 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-9 flex items-center gap-4"><span className="grid size-8 place-items-center rounded-full border border-border font-mono text-xs text-muted-foreground">4</span><h2 className="font-mono text-xs uppercase tracking-[0.18em]">Working at PhysixAI</h2></div>
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
            <h3 className="font-serif text-[clamp(2.3rem,5vw,4.6rem)] leading-[1.03] tracking-[-0.055em] text-primary">Operating at the frontier of AI and engineering, driven by what we can make real.</h3>
            <div>
              <p className="text-sm leading-7 text-muted-foreground sm:text-base">The work sits where physics, artificial intelligence and engineering meet. PhysixAI focuses on the difficult problems that shape complex products and processes—and on bringing useful AI into the workflows where engineers make decisions.</p>
              <a href="mailto:hello@physixai.co?subject=Working%20with%20PhysixAI" className="mt-7 inline-flex min-h-11 items-center gap-3 border-b border-foreground/30 pb-1 text-xs font-semibold transition-colors hover:border-primary hover:text-primary">Talk with PhysixAI <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="mt-10 grid border-y border-border sm:grid-cols-4">
            {['PHYSICS', 'ARTIFICIAL INTELLIGENCE', 'ENGINEERING', 'INDUSTRY'].map((item, index) => <div key={item} className="flex min-h-24 items-center justify-between gap-4 border-b border-border px-4 py-5 last:border-b-0 sm:min-h-32 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:px-5"><span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">0{index + 1}</span><span className="max-w-32 text-right font-serif text-lg leading-tight sm:text-xl">{item}</span></div>)}
          </div>
          <figure className="mt-10 overflow-hidden">
            <img src="/images/industrial-robotics.jpg" alt="Yellow industrial robots working in a manufacturing cell" className="aspect-[13/5] w-full object-cover object-center" loading="lazy" />
            <figcaption className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">Industrial robotics in a production setting</figcaption>
          </figure>
        </div>
      </section>

      <section id="product-focus" className="bg-card px-5 py-16 sm:px-8 sm:py-24 lg:px-14">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-9 flex items-center gap-4"><span className="grid size-8 place-items-center rounded-full border border-border font-mono text-xs text-muted-foreground">5</span><h2 className="font-mono text-xs uppercase tracking-[0.18em]">Explore PhysixAI</h2></div>
          <div className="mb-8 grid gap-5 md:grid-cols-[1fr_0.75fr] md:items-end"><h3 className="font-serif text-[clamp(2.3rem,5vw,4.5rem)] leading-[1.03] tracking-[-0.055em]">A connected way to explore, understand and advance engineering.</h3><p className="text-sm leading-7 text-muted-foreground">Discover the core capabilities taking shape across the PhysixAI engineering workflow.</p></div>
          <div className="grid border-y border-border md:grid-cols-3 md:divide-x md:divide-border">{offerings.map((item) => <a key={item.name} href={item.href} className="group flex min-h-[250px] flex-col justify-between border-b border-border p-5 transition-colors hover:bg-background md:border-b-0 md:p-7"><span className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-primary"><span>{item.number} / {item.label}</span><ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></span><div className="mt-8"><p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground">{item.name}</p><h4 className="mt-2 font-serif text-2xl leading-tight tracking-[-0.04em]">{item.title}</h4><p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p></div><span className="mt-7 inline-flex items-center gap-2 text-xs font-semibold">Explore {item.name}<ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span></a>)}</div>
        </div>
      </section>

      <section id="contact" className="bg-field px-5 py-16 text-field-foreground sm:px-8 sm:py-24 lg:px-14">
        <div className="mx-auto grid max-w-[1280px] gap-8 md:grid-cols-[1fr_auto] md:items-end"><div><p className="mb-5 font-mono text-[10px] uppercase tracking-[0.19em] text-highlight">PhysixAI / Contact</p><h2 className="max-w-4xl font-serif text-[clamp(2.6rem,6vw,5.8rem)] leading-[0.98] tracking-[-0.06em]">Let’s build beyond what’s already known.</h2><p className="mt-5 max-w-xl text-sm leading-7 text-field-foreground/70">Start a conversation about the engineering challenge you want to explore.</p></div><a href="mailto:hello@physixai.co?subject=PhysixAI%20conversation" className="group inline-flex min-h-12 items-center justify-between gap-8 bg-highlight px-5 text-sm font-semibold text-field transition-transform hover:-translate-y-0.5 md:min-w-[230px]">Talk to our team <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></a></div>
      </section>
      <SiteFooter />
    </main>
  )
}
