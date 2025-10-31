import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ValuePropositionSection } from "@/components/value-proposition-section"
import { CourseCategoriesSection } from "@/components/course-categories-section"
import { FeaturedCoursesSection } from "@/components/featured-courses-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"

export default function PlanoSecuenciaLanding() {
  return (
    <div className="min-h-screen bg-background text-foreground film-grain">
      <Header />
      <HeroSection />
      <ValuePropositionSection />
      <CourseCategoriesSection />
      <FeaturedCoursesSection />
      <HowItWorksSection />
      <FinalCTASection />
      <Footer />
    </div>
  )
}
