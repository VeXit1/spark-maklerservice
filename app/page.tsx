import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemLoesung from "@/components/ProblemLoesung";
import WhyRealEstate from "@/components/WhyRealEstate";
import Process from "@/components/Process";
import Staedte from "@/components/Staedte";
import Renditerechner from "@/components/Renditerechner";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import BlogPreview from "@/components/BlogPreview";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <ProblemLoesung />
      <WhyRealEstate />
      <Process />
      <Staedte />
      <Renditerechner />
      <Testimonials />
      <Team />
      <FAQ />
      <BlogPreview />
      <CTASection />
    </>
  );
}
