import { Shield, Dumbbell, Hourglass } from 'lucide-react'
import { Reveal } from './Reveal'

const points = [
  {
    icon: Shield,
    title: 'Crack resistance',
    text: 'Helps control plastic shrinkage cracking in cementitious mixes.',
  },
  {
    icon: Dumbbell,
    title: 'Strength enhancement',
    text: 'Adds secondary reinforcement for improved toughness.',
  },
  {
    icon: Hourglass,
    title: 'Durability',
    text: 'Supports long-term performance in demanding environments.',
  },
]

export function PolyfiberSection() {
  return (
    <section id="polyfiber" className="scroll-mt-24 border-t border-white/10 bg-neutral-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-500">
              Polyfiber
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Polyfiber (PPF 12mm)
            </h2>
            <p className="mt-4 text-neutral-400">
              Polypropylene fibers designed to distribute reinforcement throughout the matrix—ideal
              when you need consistent performance across slabs, overlays, and structural elements.
            </p>
            <ul className="mt-10 space-y-6">
              {points.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <p.icon className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-white">{p.title}</h3>
                    <p className="mt-1 text-sm text-neutral-500">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900">
              <img
                src="/assets/polyfiber-bag.png"
                alt="Polyfiber PPF 12mm sample in sealed packaging"
                className="w-full object-cover"
                loading="lazy"
                width={640}
                height={480}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
