import PageWrapper from "@/components/Container/PageWrapper";
import CTASection from "@/components/landingPage/cta-section";
import FeaturedProducts from "@/components/landingPage/featured-products";
import HeroSection from "@/components/landingPage/hero";
import ShowcaseSection from "@/components/landingPage/showcase-section";
import StatsSection from "@/components/landingPage/stats";
import TestimonialSection from "@/components/landingPage/testimonials";
import TrustedBy from "@/components/landingPage/trusted-by";
import WhyUs from "@/components/landingPage/why-us";

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <TrustedBy />
      <ShowcaseSection />
      <FeaturedProducts />
      <WhyUs />
      <TestimonialSection />
      <StatsSection />
      <CTASection />
    </PageWrapper>
  );
}
