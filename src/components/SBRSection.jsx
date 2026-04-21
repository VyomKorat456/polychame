import { Droplets, Wrench, Layers, Shield, Sparkles } from 'lucide-react'
import { Reveal } from './Reveal'

const usesWaterproofing = [
  'Roof slabs / terraces',
  'Bathrooms & toilets',
  'Basements & retaining walls',
  'Water tanks & sumps',
  'Balconies & sunshades',
]

const usesRepair = [
  'Joining old concrete to new concrete',
  'Crack repair and patch work',
  'Bond coat before plastering',
]

const usesPlaster = [
  'Waterproof plastering',
  'Tile fixing mortar',
  'Screeds and grouting',
]

const howItWorks = [
  'Forms a rubber-like network inside cement',
  'Blocks pores and micro-cracks',
  'Improves adhesion and flexibility',
  'Prevents water penetration even under pressure',
]

const advantages = [
  'Strong waterproofing (low permeability)',
  'Crack resistance (flexible layer)',
  'High bonding strength',
  'Reduces shrinkage & dusting',
  'Improves durability of concrete',
]

export function SBRSection() {
  return (
    <section id="sbr-waterproofing" className="scroll-mt-24 border-t border-white/[0.04] bg-[#0a0b0d] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-label text-center">Polymer admixture</p>
          <h2 className="font-heading mt-3 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            SBR Waterproofing
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-400">
            Styrene Butadiene Rubber (SBR) latex for waterproof, flexible, and stronger cementitious
            systems—typical milky-white liquid mixed into mortar and applied on site.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#12141a] shadow-2xl ring-1 ring-amber-500/10">
              <img
                src="/assets/showcase-sbr.png"
                alt="SBR latex liquid sample — milky white polymer admixture for waterproofing"
                className="w-full object-cover object-center"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <p className="mt-4 text-center text-xs text-slate-500 sm:text-left">
              Typical SBR latex appearance and site-style application visuals (brush/coat, cement +
              SBR slurry layers).
            </p>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="surface-card p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold text-white">What is SBR in waterproofing?</h3>
              <p className="mt-4 text-sm leading-relaxed text-slate-400">
                <strong className="text-slate-300">SBR (Styrene Butadiene Rubber latex)</strong> is a
                liquid polymer admixture (milky white) added to cement or mortar to make it
                waterproof, flexible, and stronger. Instead of only forming a surface coating, SBR
                mixes inside cement, filling pores and cracks and creating a dense waterproof layer.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-16">
          <h3 className="font-heading text-center text-2xl font-bold text-white sm:text-3xl">
            Uses of SBR waterproofing
          </h3>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="surface-card p-6">
              <div className="flex items-center gap-2 text-amber-400">
                <Droplets className="h-5 w-5" strokeWidth={1.5} />
                <span className="text-xs font-bold uppercase tracking-widest">1 · Waterproofing</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {usesWaterproofing.map((u) => (
                  <li key={u} className="flex gap-2">
                    <span className="text-amber-500/80">·</span>
                    {u}
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-card p-6">
              <div className="flex items-center gap-2 text-amber-400">
                <Wrench className="h-5 w-5" strokeWidth={1.5} />
                <span className="text-xs font-bold uppercase tracking-widest">2 · Repair & bonding</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {usesRepair.map((u) => (
                  <li key={u} className="flex gap-2">
                    <span className="text-amber-500/80">·</span>
                    {u}
                  </li>
                ))}
              </ul>
            </div>
            <div className="surface-card p-6">
              <div className="flex items-center gap-2 text-amber-400">
                <Layers className="h-5 w-5" strokeWidth={1.5} />
                <span className="text-xs font-bold uppercase tracking-widest">3 · Plaster & mortar</span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-400">
                {usesPlaster.map((u) => (
                  <li key={u} className="flex gap-2">
                    <span className="text-amber-500/80">·</span>
                    {u}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="surface-card h-full p-6 sm:p-8">
              <div className="flex items-center gap-2 text-amber-400">
                <Sparkles className="h-5 w-5" strokeWidth={1.5} />
                <h3 className="font-heading text-lg font-semibold text-white">How SBR waterproofing works</h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-400">
                {howItWorks.map((h) => (
                  <li key={h} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500/90" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="surface-card h-full p-6 sm:p-8">
              <div className="flex items-center gap-2 text-amber-400">
                <Shield className="h-5 w-5" strokeWidth={1.5} />
                <h3 className="font-heading text-lg font-semibold text-white">Advantages of SBR</h3>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-slate-400">
                {advantages.map((a) => (
                  <li key={a} className="flex gap-3">
                    <span className="text-emerald-400/90">✓</span>
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
