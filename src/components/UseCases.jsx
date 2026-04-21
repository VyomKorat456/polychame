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
    <section id="use-cases" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Application use cases
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-white/85">
            Where teams need dependable priming and compatible reinforcement products.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
          {cases.map((c) => (
            <StaggerItem key={c.title}>
              <article className="group relative overflow-hidden rounded-2xl border border-white/10">
                <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden bg-neutral-900 px-3 py-8 sm:min-h-[320px] sm:px-4 sm:py-10">
                  <img
                    src={c.image}
                    alt={c.alt}
                    className="relative z-0 h-auto w-full max-h-[min(55vh,420px)] object-contain object-center grayscale transition duration-500 group-hover:grayscale-0"
                    loading="lazy"
                    width={600}
                    height={700}
                  />
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black via-black/45 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-14 text-left">
                  <p className="text-xs font-medium uppercase tracking-widest text-white drop-shadow-sm">
                    {c.subtitle}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-white drop-shadow-md">{c.title}</h3>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  )
}
