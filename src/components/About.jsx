import { Reveal } from './Reveal'
import { BrandLogo } from './BrandLogo'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-12 flex justify-center">
          <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-neutral-100 p-5 sm:p-6">
            <BrandLogo
              variant="onLight"
              className="mx-auto h-auto w-full max-w-[240px] object-contain sm:max-w-[260px]"
              width={260}
              height={100}
            />
          </div>
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              About Overlap Polychem
            </h2>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.2em] text-neutral-500">
              Quality, Consistency and Certainty
            </p>
            <p className="mt-6 leading-relaxed text-neutral-400">
              Overlap Polychem supplies construction chemical solutions built around clear
              formulations, disciplined manufacturing, and responsive support. We work with
              contractors and project teams who expect predictable behaviour on site—especially when
              pumping windows are tight and concrete quality cannot be compromised.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                  Mission
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Deliver dependable products and technical clarity so every pour starts with
                  confidence.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 text-left">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500">
                  Vision
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-300">
                  Become a trusted partner for modern construction—known for consistency from batch
                  to batch.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
