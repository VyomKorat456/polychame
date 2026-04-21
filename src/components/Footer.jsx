import { BrandLogo } from './BrandLogo'

const footerLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#products', label: 'Products' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.06] bg-[#050608] py-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="text-left">
          <a href="#hero" className="inline-block">
            <BrandLogo
              variant="onDark"
              className="h-8 w-auto max-w-[200px] object-contain object-left sm:h-9 sm:max-w-[220px]"
              width={220}
              height={56}
            />
          </a>
          <p className="mt-5 max-w-xs text-sm text-slate-500">
            Quality, Consistency and Certainty
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-10 gap-y-3 text-sm text-slate-500">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-amber-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-14 max-w-6xl border-t border-white/[0.06] px-4 pt-10 text-center text-xs text-slate-600 sm:px-6 sm:text-left">
        © {year} Overlap Polychem. All rights reserved.
      </div>
    </footer>
  )
}
