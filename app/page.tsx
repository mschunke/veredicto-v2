import { BenefitsSection } from "@/components/ui/benefits-section";
import { DemoSection } from "@/components/ui/demo-section";
import { FinalCTASection } from "@/components/ui/final-cta-section";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/ui/hero-section";
import { Navigation } from "@/components/ui/navigation";
import { ProblemSolutionSection } from "@/components/ui/problem-solution-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-8">
        <HeroSection />
      </section>

      {/* Demo Section */}
      <section className="py-20 px-8 border-t border-gray-800">
        <DemoSection />
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-8 border-t border-gray-800">
        <BenefitsSection />
      </section>

      {/* Problem & Solution Section */}
      <section className="py-20 px-8 border-t border-gray-800">
        <ProblemSolutionSection />
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-8 border-t border-gray-800">
        <FinalCTASection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
