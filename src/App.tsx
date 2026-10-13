import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProblemSection from './components/ProblemSection'
import ProductIntro from './components/ProductIntro'
import HowItWorks from './components/HowItWorks'
import Ingredients from './components/Ingredients'
import DailyRoutine from './components/DailyRoutine'
import ProfessionalGuidance from './components/ProfessionalGuidance'
import BeforeAfter from './components/BeforeAfter'
import Testimonials from './components/Testimonials'
import TrustBadges from './components/TrustBadges'
import SpecialOffer from './components/SpecialOffer'
import OrderForm from './components/OrderForm'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  const [orderSuccess, setOrderSuccess] = useState(false)

  useEffect(() => {
    let frame = 0
    const updateProgress = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight
        const progress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0
        document.documentElement.style.setProperty(
          '--scroll-progress',
          String(Math.min(1, Math.max(0, progress))),
        )
      })
    }

    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    updateProgress()

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return () => {
        cancelAnimationFrame(frame)
        window.removeEventListener('scroll', updateProgress)
        window.removeEventListener('resize', updateProgress)
      }
    }

    const sections = document.querySelectorAll<HTMLElement>(
      '.page-wrap > section:not(.hero-section)',
    )
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -36px 0px' },
    )

    sections.forEach((section) => {
      section.classList.add('reveal-section')
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  return (
    <div className="page-wrap">
      <div className="reading-progress" aria-hidden="true" />
      <Navbar />
      <Hero />
      <ProblemSection />
      <ProductIntro />
      <HowItWorks />
      <Ingredients />
      <DailyRoutine />
      <ProfessionalGuidance />
      <BeforeAfter />
      <Testimonials />
      <TrustBadges />
      <SpecialOffer />
      <OrderForm onSuccess={() => setOrderSuccess(true)} success={orderSuccess} />
      <FAQ />
      <Footer />
    </div>
  )
}
