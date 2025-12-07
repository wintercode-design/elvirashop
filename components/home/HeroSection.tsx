import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="mb-4 inline-block font-body text-sm font-medium uppercase tracking-widest text-primary  animate-in fade-in"
            style={{ animationDelay: "0.1s" }}
          >
            Premium Hair Collection
          </span>
          <h1
            className="mb-6 font-display text-4xl font-semibold leading-tight text-foreground  animate-in fade-in md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.2s" }}
          >
            Embrace Your
            <span className="block text-primary">Natural Beauty</span>
          </h1>
          <p
            className="mb-8 font-body text-lg leading-relaxed text-muted-foreground  animate-in fade-in md:text-xl"
            style={{ animationDelay: "0.3s" }}
          >
            Discover our exquisite collection of premium wigs and hair
            extensions. Crafted with care for the modern, confident woman.
          </p>
          <div
            className="flex flex-col items-center justify-center gap-4  animate-in fade-in sm:flex-row"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              asChild
              size="lg"
              className="min-w-[180px] gap-2 shadow-elegant"
            >
              <Link href="/shop">
                Shop Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="min-w-[180px]"
            >
              <Link href="/about">Our Story</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -right-20 top-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -left-20 bottom-20 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />
    </section>
  );
};
