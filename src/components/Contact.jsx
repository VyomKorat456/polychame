import { useState } from 'react'
import { Mail, Phone } from 'lucide-react'
import { Reveal } from './Reveal'

const contacts = [
  { name: 'Roman Korat', phone: '+91 72289 84817', tel: '+917228984817' },
  { name: 'Akash Kakadiya', phone: '+91 98256 72674', tel: '+919825672674' },
]

const email = 'overlappolychem2023@gmail.com'

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/10 bg-neutral-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Contact
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-neutral-400">
            Speak with our team about specifications, site requirements, or distributor enquiries.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="space-y-8 text-left">
              {contacts.map((c) => (
                <div key={c.name} className="flex gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Phone className="h-5 w-5 text-white" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-semibold text-white">{c.name}</p>
                    <a
                      href={`tel:${c.tel}`}
                      className="mt-1 inline-flex text-neutral-400 transition hover:text-white"
                    >
                      {c.phone}
                    </a>
                    {c.name === 'Roman Korat' && (
                      <a
                        href={`https://wa.me/${c.tel.replace(/\D/g, '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 block text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
                      >
                        Contact with WhatsApp
                      </a>
                    )}
                  </div>
                </div>
              ))}
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Mail className="h-5 w-5 text-white" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a
                    href={`mailto:${email}`}
                    className="mt-1 inline-flex break-all text-neutral-400 transition hover:text-white"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 sm:p-8"
            >
              <div className="space-y-4 text-left">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-neutral-300">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-white/40 focus:outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-neutral-300">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-white/40 focus:outline-none"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-sm font-medium text-neutral-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-neutral-600 focus:border-white/40 focus:outline-none"
                    placeholder="Project location, volume, or questions…"
                  />
                </div>
              </div>
              {sent ? (
                <p className="mt-6 text-sm text-emerald-400" role="status">
                  Thank you—your message has been noted. We will respond shortly. (Demo: no data is
                  sent from this static site.)
                </p>
              ) : (
                <button
                  type="submit"
                  className="mt-6 w-full rounded-full bg-white py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] sm:w-auto sm:px-10"
                >
                  Send message
                </button>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
