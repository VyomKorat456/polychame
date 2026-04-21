import { Reveal } from './Reveal'
import { BrandLogo } from './BrandLogo'

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-14 flex justify-center">
          <div className="w-full max-w-sm rounded-2xl border border-amber-500/15 bg-gradient-to-b from-[#161922] to-[#101218] p-6 shadow-xl shadow-black/40 sm:p-8">
            <BrandLogo
              variant="onDark"
              className="mx-auto h-auto w-full max-w-[240px] object-contain sm:max-w-[260px]"
              width={260}
              height={100}
            />
          </div>
        </Reveal>

        <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
          <Reveal>
            <p className="section-label">Company</p>
            <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              About Overlap Polychem
            </h2>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.25em] text-amber-500/80">
              Quality, Consistency and Certainty
            </p>
            <p className="mt-6 leading-relaxed text-slate-400">
              Overlap Polychem supplies construction chemical solutions built around clear
              formulations, disciplined manufacturing, and responsive support. We work with
              contractors and project teams who expect predictable behaviour on site—especially when
              pumping windows are tight and concrete quality cannot be compromised.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="surface-card p-6 text-left">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500/90">
                  Mission
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  Deliver dependable products and technical clarity so every pour starts with
                  confidence.
                </p>
              </div>
              <div className="surface-card p-6 text-left">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-500/90">
                  Vision
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-400">
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
