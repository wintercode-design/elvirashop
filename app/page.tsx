import { CategorySection } from "@/components/home/CategorySection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { HeroSection } from "@/components/home/HeroSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CategorySection />
      <FeaturedProducts />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  );
}
