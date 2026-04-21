import { motion } from 'framer-motion'
import { Reveal } from './Reveal'

const items = [
  {
    title: 'Elite Slurry Pouch',
    description:
      'High-performance primer formulated for reliable pump and pipeline lubrication before concreting.',
    image: '/assets/showcase-pouch.png',
    alt: 'Elite Slurry Pouch flexible packaging',
  },
  {
    title: 'Liquid slurry sample',
    description:
      'Homogeneous, ready-to-pump slurry that reduces friction and prepares lines for concrete placement.',
    image: '/assets/showcase-liquid.png',
    alt: 'Laboratory beaker with milky white liquid slurry sample',
  },
  {
    title: 'Polyfiber (PPF 12mm)',
    description:
      'Synthetic reinforcement fibers engineered for crack resistance and long-term durability in concrete.',
    image: '/assets/showcase-polyfiber.png',
    alt: 'Polypropylene polyfiber strands for concrete reinforcement',
  },
  {
    title: 'Mesh roll (jali)',
    description:
      'White mesh on a roll—used like jali reinforcement in plaster, mortar, and repair work: a uniform grid that helps control cracks, ties the surface together, and gives even coverage on walls and slabs.',
    image: '/assets/showcase-mesh.png',
    alt: 'Roll of white construction mesh in clear wrap, for jali-style reinforcement in plaster and mortar',
  },
]

export function ProductShowcase() {
  return (
    <section id="products" className="scroll-mt-24 border-t border-white/[0.04] bg-[#0c0e14] py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <p className="section-label text-center">Catalogue</p>
          <h2 className="font-heading mt-3 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Product showcase
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
            Engineered materials for modern concrete pumping and reinforcement workflows.
          </p>
        </Reveal>

        <div className="mt-16 grid auto-rows-fr gap-6 sm:grid-cols-2 lg:gap-8">
          {items.map((item, i) => (
            <Reveal key={item.title} className="h-full" delay={i * 0.06}>
              <motion.article
                className="group surface-card surface-card-hover flex h-full min-h-0 flex-col overflow-hidden"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              >
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[#0a0b0d]">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0d]/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                  <motion.img
                    src={item.image}
                    alt={item.alt}
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={800}
                    height={600}
                  />
                </div>
                <div className="flex min-h-[8.5rem] flex-1 flex-col border-t border-white/[0.06] p-6 text-left sm:min-h-[9rem]">
                  <h3 className="line-clamp-2 font-heading text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-slate-500">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
