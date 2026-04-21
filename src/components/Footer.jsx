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
    <footer className="border-t border-white/10 bg-black py-14">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="text-left">
          <a href="#hero" className="inline-block">
            <BrandLogo
              variant="onDark"
              className="h-8 w-auto max-w-[200px] object-contain object-left sm:h-9 sm:max-w-[220px]"
              width={220}
              height={56}
            />
          </a>
          <p className="mt-4 max-w-xs text-sm text-neutral-500">
            Quality, Consistency and Certainty
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-neutral-400">
            {footerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="mx-auto mt-12 max-w-6xl border-t border-white/10 px-4 pt-8 text-center text-xs text-neutral-600 sm:px-6 sm:text-left">
        © {year} Overlap Polychem. All rights reserved.
      </div>
    </footer>
  )
}
