import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { BrandLogo } from './BrandLogo'

const links = [
  { href: '#products', label: 'Products' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#use-cases', label: 'Use cases' },
  { href: '#polyfiber', label: 'Polyfiber' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <motion.header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-amber-500/10 bg-[#08090c]/85 shadow-lg shadow-black/20 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#hero" className="flex items-center gap-3">
          <BrandLogo
            variant="onDark"
            className="h-7 w-auto max-h-8 max-w-[140px] object-contain object-left sm:h-8 sm:max-w-[160px]"
            width={160}
            height={40}
            loading="eager"
          />
        </a>

        <ul className="hidden items-center gap-1 text-sm font-medium text-slate-400 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-2 transition-colors hover:bg-white/5 hover:text-amber-400"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-sm font-semibold text-[#0a0b0d] shadow-lg shadow-amber-500/20 transition hover:brightness-110 hover:shadow-amber-500/30 sm:inline-flex"
          >
            Contact
          </a>
          <button
            type="button"
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-200 lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0c0e14]/98 px-4 py-6 backdrop-blur-xl lg:hidden">
          <ul className="flex flex-col gap-1 text-sm font-medium text-slate-300">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block rounded-xl px-3 py-2.5 hover:bg-white/5 hover:text-amber-400"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="mt-3 inline-flex w-full justify-center rounded-full bg-gradient-to-r from-amber-500 to-amber-600 px-4 py-3 font-semibold text-[#0a0b0d]"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </motion.header>
  )
}
