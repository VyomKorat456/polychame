import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { ProductShowcase } from './components/ProductShowcase'
import { HowItWorks } from './components/HowItWorks'
import { Benefits } from './components/Benefits'
import { UseCases } from './components/UseCases'
import { PolyfiberSection } from './components/PolyfiberSection'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { LoadingScreen } from './components/LoadingScreen'
import { WhatsAppButton } from './components/WhatsAppButton'

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 900)
    return () => window.clearTimeout(t)
  }, [])

  return (
    <>
      <LoadingScreen visible={loading} />
      <Navbar />
      <main>
        <Hero />
        <ProductShowcase />
        <HowItWorks />
        <Benefits />
        <UseCases />
        <PolyfiberSection />
        <About />
        <Contact />
      </main>
      <Footer />
      {!loading && <WhatsAppButton />}
    </>
  )
}
