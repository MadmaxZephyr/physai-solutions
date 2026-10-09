import { createFileRoute } from '@tanstack/react-router'
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/PhysixSiteChrome'

const competencies = [
  {
    slug: 'generate', name: 'Generate', number: '01', label: 'GEOMETRY', stage: 'IN THE FIRST LOOK',
    title: 'Editable geometry, not a picture of geometry.',
    summary: 'Generate produces surfaces the design office can open, constrain and release. Fixed faces stay fixed; free variables are the only ones touched. Output is parametric and round-trips as STEP / B-Rep—not a mesh that dies at the drawing board.',
    challenge: 'Concept solids that cannot be edited do not survive the surfacing group.',
    audience: 'Chief engineers and surfacing leads who need to keep the customer CAD system as the system of record, especially when a programme shares a frozen supplier envelope.',
    capabilities: ['Reads the customer envelope and separates locked faces from free variables', 'Emits ranked, editable variants the PLM already understands', 'Preserves manufacturing intent, tolerances and tree structure', 'Refuses geometry that will not open downstream'],
    applications: ['Aerospace — high-lift and inlet surfaces inside legality checks', 'Automotive — packaging envelopes before tooling', 'Energy — exchanger and blade families', 'Devices, semiconductors and motorsport — editable solids within a frozen envelope'],
    boundary: 'Generate does not replace CATIA, NX or the surfacing group. The design office stays in charge of release.',
    diagram: ['FROZEN ENVELOPE', 'FREE VARIABLES', 'EDITABLE B-REP'], next: 'screen', nextName: 'Screen', previous: null,
  },
  {
    slug: 'screen', name: 'Screen', number: '02', label: 'PHYSICS RANKING', stage: 'START HERE',
    title: 'Physics before the mesh bill.',
    summary: 'Screen is the geometry-native physics layer. Models informed by your CFD and test history rank load, loss, heat, flow, balance and sensitivity across the design space. Designers see the consequence of a surface change before a mesh is built; the full solve is spent on the shortlist.',
    challenge: 'A high-fidelity run can take hours or days. Most teams can complete only a fraction of the configurations a programme needs to examine.',
    audience: 'Aero, thermal, structural and device teams whose bottleneck is how many legal configurations they can score before a tunnel hour, bench slot or programme gate.',
    capabilities: ['Turns past simulation work into a customer-specific engineering asset', 'Evaluates constrained configurations across the design cycle', 'Returns physical fields and scalar results with uncertainty', 'Leaves solvers, tunnels and benches in place'],
    applications: ['Aerospace — search the family before the tunnel', 'Automotive — aero, thermal and packaging gates', 'Energy — heat and flow before capex', 'Medical devices, industrial processes and semiconductor cooling'],
    boundary: 'Screen does not replace CFD or claim to be the full-fidelity answer. It removes the one-simulation-at-a-time constraint so scarce solves are better spent.',
    diagram: ['CFD + TEST HISTORY', 'RANKED FIELDS', 'FULL SOLVE / SHORTLIST'], next: 'island', nextName: 'Island', previous: 'generate',
  },
  {
    slug: 'island', name: 'Island', number: '03', label: 'PRIVATE COMPUTE', stage: 'WHEN SCREEN IS LIVE',
    title: 'Private compute. East–west fabric. Not a second campus network.',
    summary: 'Island is a modest private high-performance layer for inference, retraining and the remaining full solves on the same customer-specific models across sites. It is sized to the allocation you already have.',
    challenge: 'GPUs without a congestion-conscious path waste the cycle they were bought to save. Most organizations already have official campus and plant connectivity partners.',
    audience: 'IT and HPC leads who will accept an additive fabric, and engineering directors who need the same customer-specific models in more than one building.',
    capabilities: ['Sizes a private compute island to an existing allocation', 'Keeps screening, retraining and selected full solves in one tenant', 'Moves approved objects between engineering sites under customer identity', 'Adds model traffic without creating a second people network'],
    applications: ['Aerospace — multi-site design offices', 'Automotive — programme HPC beside existing clusters', 'Energy — private thermal and flow capacity', 'Semiconductors and motorsport — model sync beside official connectivity'],
    boundary: 'Campus, plant and paddock networking stay with the customer’s official IT. Island is additive; it is not a second data-centre or Wi-Fi story.',
    diagram: ['CUSTOMER TENANT', 'EAST–WEST GPU FABRIC', 'APPROVED MODEL SYNC'], next: 'thread', nextName: 'Thread', previous: 'screen',
  },
  {
    slug: 'thread', name: 'Thread', number: '04', label: 'CORRELATED OBJECT', stage: 'PHASE TWO',
    title: 'Twins of parts that already survived physics.',
    summary: 'Thread connects ranked CAD, mesh and fields into one correlated object the factory, lab, fab or line can share. Measured residuals return to Screen so the next cycle starts closer to reality.',
    challenge: 'Design, build and test often refer to separate files of the same part. A show model cannot close the loop between a physical result and the next design cycle.',
    audience: 'Operations, MRO, plant and lab leads who need correlation—and programmes that will not fund a twin of geometry that has not been screened.',
    capabilities: ['Publishes a simulation-ready object from ranked geometry and fields', 'Keeps design, build and test aligned around the same part', 'Returns measured residuals to the customer’s Screen workflow', 'Keeps the physical object—not a rendered vehicle—at the centre'],
    applications: ['Aerospace — MRO and rig correlation', 'Automotive — plant-to-proving-ground thread', 'Energy — machine and exchanger twins', 'Medical devices, industrial cells, semiconductor packages and motorsport'],
    boundary: 'Thread follows Screen; it is not the first engagement. It carries forward parts that survived physics, not a show model.',
    diagram: ['RANKED CAD + FIELDS', 'SHARED OBJECT', 'RESIDUALS → SCREEN'], next: null, nextName: null, previous: 'island',
  },
]

export const Route = createFileRoute('/$competency')({
  head: ({ params }) => {
    const page = competencies.find((item) => item.slug === params.competency)
    return {
      meta: [
        { title: page ? `${page.name} — PhysixAI` : 'PhysixAI — Engineering competencies' },
        { name: 'description', content: page?.summary ?? 'Physics-aware engineering workflows for constrained geometry, simulation and test.' },
      ],
    }
  },
  component: CompetencyPage,
})

function CompetencyPage() {
  const { competency } = Route.useParams()
  const page = competencies.find((item) => item.slug === competency)

  if (!page) {
    return <main className="min-h-screen bg-background px-5 py-24 text-foreground"><SiteHeader /><div className="mx-auto max-w-3xl pt-24"><p className="font-mono text-xs uppercase tracking-[0.18em] text-primary">PhysixAI / not found</p><h1 className="mt-5 font-serif text-5xl tracking-[-0.05em]">That competency isn’t here.</h1><a className="mt-8 inline-flex items-center gap-2 text-primary" href="/">Return to PhysixAI <ArrowRight size={16} /></a></div><SiteFooter /></main>
  }

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <section id="top" className="relative overflow-hidden bg-field px-5 pb-16 pt-36 text-field-foreground sm:px-8 sm:pb-20 sm:pt-44 lg:px-14">
        <SiteHeader />
        <div className="mx-auto grid max-w-[1280px] items-end gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <div className="max-w-3xl"><a href="/#competencies" className="mb-12 inline-flex items-center gap-2 text-xs text-field-foreground/60 transition-colors hover:text-primary"><ArrowLeft size={14} /> All competencies</a><p className="mb-6 font-mono text-[10px] uppercase tracking-[0.19em] text-primary">PhysixAI / {page.number} — {page.label}</p><h1 className="font-serif text-[clamp(3.2rem,7vw,6.6rem)] font-medium leading-[0.95] tracking-[-0.06em]">{page.title}</h1><p className="mt-7 max-w-2xl text-base leading-7 text-field-foreground/70 sm:text-lg sm:leading-8">{page.summary}</p><a href="mailto:hello@physixai.co?subject=PhysixAI%20Screen%20briefing" className="mt-8 inline-flex min-h-12 items-center gap-5 bg-primary px-5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">Start with Screen <ArrowUpRight size={16} /></a></div>
          <div className="border border-field-foreground/15 bg-field-foreground/[0.035] p-5 sm:p-7" aria-label={`${page.name} process illustration`}><div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.16em] text-field-foreground/45"><span>Concept diagram</span><span>{page.stage}</span></div><div className="mt-9 space-y-3">{page.diagram.map((label, index) => <div key={label} className="grid grid-cols-[38px_1fr_auto] items-center gap-3 border border-field-foreground/15 px-3 py-4 sm:px-4"><span className="font-mono text-[10px] text-primary">0{index + 1}</span><span className="text-[10px] font-semibold tracking-[0.1em] sm:text-xs">{label}</span><span className={`size-2 rounded-full ${index === 1 ? 'bg-primary' : 'border border-field-foreground/35'}`} /></div>)}</div><p className="mt-5 text-[9px] leading-5 text-field-foreground/40">Illustrative workflow only · no customer data</p></div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-14"><div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">The constraint</p><div><h2 className="font-serif text-3xl leading-tight tracking-[-0.04em] sm:text-5xl">{page.challenge}</h2><p className="mt-6 max-w-3xl text-sm leading-7 text-muted-foreground">Built to work inside existing engineering authority—not to ask the design office, solver team or IT group to hand over the systems they already trust.</p></div></div></section>

      <section className="bg-card px-5 py-16 sm:px-8 sm:py-24 lg:px-14"><div className="mx-auto max-w-[1280px]"><div className="grid gap-8 border-b border-border pb-8 md:grid-cols-[0.7fr_1.3fr] md:items-end"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">What it does</p><div><h2 className="font-serif text-3xl tracking-[-0.04em] sm:text-5xl">A capability built around the engineering record.</h2><p className="mt-4 max-w-2xl text-sm leading-6 text-muted-foreground">{page.audience}</p></div></div><div className="grid gap-x-12 md:grid-cols-2">{page.capabilities.map((item, index) => <div key={item} className="grid grid-cols-[36px_1fr] gap-4 border-b border-border py-6"><span className="font-mono text-xs text-primary">0{index + 1}</span><p className="text-sm leading-6 text-muted-foreground">{item}</p></div>)}</div></div></section>

      <section className="px-5 py-16 sm:px-8 sm:py-24 lg:px-14"><div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20"><div><p className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">Across industries</p><h2 className="font-serif text-3xl tracking-[-0.04em] sm:text-5xl">Same loop. Different constraints.</h2></div><div className="space-y-4">{page.applications.map((item) => <p key={item} className="border-b border-border pb-4 text-sm leading-6 text-muted-foreground">{item}</p>)}</div></div></section>

      <section className="bg-field px-5 py-12 text-field-foreground sm:px-8 sm:py-16 lg:px-14"><div className="mx-auto grid max-w-[1280px] gap-6 md:grid-cols-[0.7fr_1.3fr]"><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">What stays yours</p><p className="max-w-3xl font-serif text-xl leading-8 sm:text-2xl">{page.boundary}</p></div></section>
      <section className="px-5 py-12 sm:px-8 lg:px-14"><div className="mx-auto flex max-w-[1280px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><a href="/#loop" className="text-sm text-muted-foreground transition-colors hover:text-primary">Return to the design loop</a>{page.next && page.nextName && <a href={`/${page.next}`} className="group inline-flex min-h-12 items-center justify-between gap-8 border border-primary px-5 text-sm font-semibold transition-colors hover:bg-primary hover:text-primary-foreground">Next / {page.nextName} <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></a>}{!page.next && <a href="mailto:hello@physixai.co?subject=PhysixAI%20Screen%20briefing" className="group inline-flex min-h-12 items-center gap-8 bg-primary px-5 text-sm font-semibold text-primary-foreground">Start with Screen <ArrowRight size={17} /></a>}</div></section>
      <SiteFooter />
    </main>
  )
}
