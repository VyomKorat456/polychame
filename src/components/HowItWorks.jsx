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
    <section id="how-it-works" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400">
            A straightforward sequence designed for busy sites and pump crews.
          </p>
        </Reveal>

        <Stagger className="mt-16">
          <div className="grid gap-6 lg:grid-cols-4">
            {steps.map((step, index) => (
              <StaggerItem key={step.title}>
                <div className="relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-widest text-neutral-500">
                      Step {index + 1}
                    </span>
                    <step.icon className="h-6 w-6 text-white" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-400">{step.body}</p>
                  {index < steps.length - 1 && (
                    <div
                      className="pointer-events-none absolute top-1/2 -right-3 hidden h-px w-6 -translate-y-1/2 bg-gradient-to-r from-white/30 to-transparent lg:block"
                      aria-hidden
                    />
                  )}
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>

        <Reveal className="mt-10 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-4 text-center text-sm text-amber-100/90 sm:px-6">
          <strong className="font-semibold text-amber-50">Note:</strong>{' '}
          Dispose of slurry outside formwork after it has passed through the pipeline, as recommended
          for safe site practice.
        </Reveal>
      </div>
    </section>
  )
}
