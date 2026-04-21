import { Package, Ruler, Gauge, Zap } from 'lucide-react'
import { Reveal, Stagger, StaggerItem } from './Reveal'

const benefits = [
  {
    icon: Package,
    title: 'Save up to 3 bags of cement',
    text: 'Reduce cement used for priming compared with conventional approaches.',
  },
  {
    icon: Ruler,
    title: 'Primes up to 50 metres',
    text: 'One pouch can prime a substantial length of pipeline under typical conditions.',
  },
  {
    icon: Gauge,
    title: 'Reduces friction',
    text: 'Helps protect equipment and maintain flow consistency through the line.',
  },
  {
    icon: Zap,
    title: 'Improves efficiency',
    text: 'Streamlined preparation so crews can focus on placement and quality.',
  },
]

export function Benefits() {
  return (
    <section
      id="benefits"
      className="scroll-mt-24 border-y border-white/[0.04] bg-[#0a0b0d] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-label text-center">Why it matters</p>
          <h2 className="font-heading mt-3 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Benefits
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            Measurable advantages for pumping operations and project economics.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <div className="surface-card surface-card-hover flex h-full flex-col p-6 text-left">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/10 text-amber-400">
                  <b.icon className="h-6 w-6" strokeWidth={1.25} />
                </span>
                <h3 className="font-heading mt-5 text-base font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{b.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
