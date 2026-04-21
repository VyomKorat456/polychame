import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_70%_20%,rgba(212,168,83,0.09),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d4a853' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
        <div className="text-left">
          <motion.p
            className="section-label mb-5"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            Construction chemicals
          </motion.p>
          <motion.h1
            className="font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.06 }}
          >
            <span className="text-gradient">ELITE SLURRY</span>
            <br />
            <span className="text-white">POUCH</span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-lg text-lg leading-relaxed text-slate-400 sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.14 }}
          >
            High Performance Primer for Concrete Pump &amp; Pipeline Lubrication
          </motion.p>
          <motion.div
            className="mt-11 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-8 py-3.5 text-sm font-semibold text-[#0a0b0d] shadow-xl shadow-amber-500/25 transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-400"
            >
              Contact Now
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.04] px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-amber-500/40 hover:bg-amber-500/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40"
            >
              View Product
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 48 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-[min(100%,26rem)] lg:max-w-[min(100%,28rem)]">
            <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-amber-500/25 via-transparent to-blue-500/10 blur-2xl" />
            <div className="relative rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-[#161922] to-[#0c0e14] p-6 shadow-2xl shadow-black/60 ring-1 ring-white/5">
              <img
                src="/assets/hero-pouch.png"
                alt="Elite Slurry Pouch — full product packaging view"
                className="relative z-10 w-full object-contain object-center"
                width={560}
                height={720}
                loading="eager"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
