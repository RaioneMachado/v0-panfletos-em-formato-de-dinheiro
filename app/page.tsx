import { CountdownTimer } from "@/components/countdown-timer"
import { HeroSection } from "@/components/hero-section"
import { PainSection } from "@/components/pain-section"
import { SolutionSection } from "@/components/solution-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"

export default function Home() {
  return (
    <main className="min-h-screen dark-bg-with-lights">
      <CountdownTimer />
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCta />
    </main>
  )
}
