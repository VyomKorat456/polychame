import { motion } from 'framer-motion'

const ctaBase =
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(255,255,255,0.12),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px',
        }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="text-left">
          <motion.h1
            className="font-semibold tracking-tight text-white"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: 1.05 }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            ELITE SLURRY POUCH
          </motion.h1>
          <motion.p
            className="mt-5 max-w-xl text-lg text-neutral-400 sm:text-xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.16 }}
          >
            High Performance Primer for Concrete Pump &amp; Pipeline Lubrication
          </motion.p>
          <motion.div
            className="mt-10 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
          >
            <a
              href="#contact"
              className={`${ctaBase} bg-white text-black hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(255,255,255,0.35)]`}
            >
              Contact Now
            </a>
            <a
              href="#products"
              className={`${ctaBase} border border-white/25 text-white hover:border-white/50 hover:bg-white/5 hover:scale-[1.03]`}
            >
              View Product
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative w-full max-w-[min(100%,26rem)] lg:max-w-[min(100%,28rem)]">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-white/10 to-transparent blur-2xl" />
            <img
              src="/assets/hero-pouch.png"
              alt="Elite Slurry Pouch — full product packaging view"
              className="relative z-10 w-full object-contain object-center drop-shadow-2xl"
              width={560}
              height={720}
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
