import Hero from "@/components/hero"
import Contact from "@/components/contact"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Stats from "@/components/stats"
import CTASection from "@/components/cta-section"
import LogoAnimationSection from "@/components/logo-animation-section"
import PosterResults from "@/components/poster-results"
import DesignProjects from "@/components/web-projects"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <LogoAnimationSection />
      <PosterResults />
      <Stats />
      <DesignProjects />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  )
}
