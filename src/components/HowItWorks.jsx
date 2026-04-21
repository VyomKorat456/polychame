import { Droplets, Blend, GitBranch, CircleCheck } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from './Reveal'

const steps = [
  {
    icon: Droplets,
    title: 'Mix with water',
    body: 'Combine one pouch with 50–60 litres of water in a drum or hopper.',
  },
  {
    icon: Blend,
    title: 'Stir to slurry',
    body: 'Mix until a smooth, greasy slurry is obtained.',
  },
  {
    icon: GitBranch,
    title: 'Prime the line',
    body: 'Pass the slurry through the pump pipeline before concreting.',
  },
  {
    icon: CircleCheck,
    title: 'Ready to pour',
    body: 'Line is lubricated—proceed with concrete placement as planned.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-label text-center">Process</p>
          <h2 className="font-heading mt-3 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            A straightforward sequence designed for busy sites and pump crews.
          </p>
        </Reveal>

        <Stagger className="mt-16">
          <div className="grid gap-5 lg:grid-cols-4">
            {steps.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-b from-[#141823] to-[#0e1016] p-6 text-left shadow-lg shadow-black/30">
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-amber-500/80 to-amber-600/40" />
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500/90">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                      <step.icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.body}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>

        <Reveal className="mt-12 rounded-2xl border border-amber-500/20 bg-gradient-to-r from-amber-500/[0.07] to-transparent px-5 py-5 text-sm text-amber-100/95 sm:px-8">
          <strong className="font-semibold text-amber-300">Note:</strong>{' '}
          Dispose of slurry outside formwork after it has passed through the pipeline, as recommended
          for safe site practice.
        </Reveal>
      </div>
    </section>
  )
}
