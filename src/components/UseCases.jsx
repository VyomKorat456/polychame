import { Reveal, Stagger, StaggerItem } from './Reveal'

const cases = [
  {
    title: 'Construction sites',
    subtitle: 'High-turnover pours',
    image: '/assets/showcase-pouch.png',
    alt: 'Construction chemical product for active building sites',
  },
  {
    title: 'Concrete pumping',
    subtitle: 'Line lubrication',
    image: '/assets/showcase-liquid.png',
    alt: 'Slurry primer for concrete pump and pipeline',
  },
  {
    title: 'Plaster & mesh (jali) work',
    subtitle: 'Reinforcement & repairs',
    image: '/assets/showcase-mesh.png',
    alt: 'Mesh roll for jali-style reinforcement in plaster, mortar, and structural repairs',
  },
]

export function UseCases() {
  return (
    <section id="use-cases" className="scroll-mt-24 bg-[#0c0e14] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-label text-center">Where it fits</p>
          <h2 className="font-heading mt-3 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Application use cases
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            Where teams need dependable priming and compatible reinforcement products.
          </p>
        </Reveal>

        <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <StaggerItem key={c.title}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0a0b0d] shadow-xl shadow-black/40">
                <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden px-3 py-8 sm:min-h-[320px] sm:px-4 sm:py-10">
                  <img
                    src={c.image}
                    alt={c.alt}
                    className="relative z-0 h-auto w-full max-h-[min(55vh,420px)] object-contain object-center grayscale transition duration-500 group-hover:grayscale-0"
                    loading="lazy"
                    width={600}
                    height={700}
                  />
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-[#0a0b0d] via-[#0a0b0d]/50 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black via-black/85 to-transparent p-6 pt-16 text-left">
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-400/95 drop-shadow-sm">
                    {c.subtitle}
                  </p>
                  <h3 className="font-heading mt-2 text-xl font-bold text-white drop-shadow-md">
                    {c.title}
                  </h3>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
