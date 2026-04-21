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
    <section
      id="polyfiber"
      className="scroll-mt-24 border-t border-white/[0.04] bg-[#0a0b0d] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="section-label">Additive</p>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Polyfiber (PPF 12mm)
            </h2>
            <p className="mt-5 leading-relaxed text-slate-400">
              Polypropylene fibers designed to distribute reinforcement throughout the matrix—ideal
              when you need consistent performance across slabs, overlays, and structural elements.
            </p>
            <ul className="mt-12 space-y-5">
              {points.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
                    <p.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-white">{p.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={0.1}>
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12141a] shadow-2xl shadow-black/50 ring-1 ring-amber-500/10">
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
