import { ArrowRight } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Human Hair Wigs",
    description: "100% virgin human hair for the most natural look and feel",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop",
    href: "/shop?category=human-hair",
  },
  {
    title: "Synthetic Wigs",
    description: "High-quality synthetic options that are easy to maintain",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=600&h=800&fit=crop",
    href: "/shop?category=synthetic",
  },
  {
    title: "Hair Extensions",
    description: "Seamless clip-ins and bundles for added length and volume",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=800&fit=crop",
    href: "/shop?category=extensions",
  },
];

export const CategorySection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Shop by Category
          </h2>
          <p className="mx-auto max-w-2xl font-body text-muted-foreground">
            Find the perfect style for every occasion. From everyday elegance to
            special moments.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative overflow-hidden rounded-lg bg-card  animate-in fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="mb-2 font-display text-2xl font-semibold">
                  {category.title}
                </h3>
                <p className="mb-4 font-body text-sm text-primary-foreground/80">
                  {category.description}
                </p>
                <span className="inline-flex items-center gap-2 font-body text-sm font-medium text-primary-foreground transition-all group-hover:gap-3">
                  Shop Now <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
