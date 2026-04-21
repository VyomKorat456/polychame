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
    <section id="benefits" className="scroll-mt-24 border-y border-white/10 bg-neutral-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Benefits
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400">
            Measurable advantages for pumping operations and project economics.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-black/40 p-6 text-left">
                <b.icon className="h-8 w-8 text-white" strokeWidth={1.25} />
                <h3 className="mt-5 text-base font-semibold text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-500">{b.text}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
