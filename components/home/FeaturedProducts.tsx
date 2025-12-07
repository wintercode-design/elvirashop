import { Heart, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Brazilian Body Wave",
    price: 299,
    originalPrice: 399,
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=500&h=600&fit=crop",
    category: "Human Hair",
    isNew: true,
  },
  {
    id: 2,
    name: "Silky Straight Lace Front",
    price: 249,
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=500&h=600&fit=crop",
    category: "Human Hair",
    isBestseller: true,
  },
  {
    id: 3,
    name: "Natural Curls Wig",
    price: 189,
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=600&fit=crop",
    category: "Synthetic",
  },
  {
    id: 4,
    name: "Clip-In Extensions Set",
    price: 149,
    originalPrice: 179,
    image:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=500&h=600&fit=crop",
    category: "Extensions",
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="bg-blush-light/30 py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="mb-2 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Bestsellers
            </h2>
            <p className="font-body text-muted-foreground">
              Our most loved styles, chosen by you
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/shop">View All Products</Link>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative overflow-hidden rounded-lg bg-card shadow-soft transition-shadow hover:shadow-elegant  animate-in fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Image */}
              <Link href={`/shop/${product.id}`} className="block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Badges */}
                  <div className="absolute left-3 top-3 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="rounded-full bg-primary px-3 py-1 font-body text-xs font-medium text-primary-foreground">
                        New
                      </span>
                    )}
                    {product.isBestseller && (
                      <span className="rounded-full bg-accent px-3 py-1 font-body text-xs font-medium text-accent-foreground">
                        Bestseller
                      </span>
                    )}
                    {product.originalPrice && (
                      <span className="rounded-full bg-rose px-3 py-1 font-body text-xs font-medium text-primary-foreground">
                        Sale
                      </span>
                    )}
                  </div>
                  {/* Quick Actions */}
                  <div className="absolute right-3 top-3 flex flex-col gap-2  transition-opacity group-hover:opacity-100">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-9 w-9 rounded-full shadow-soft"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-4">
                <span className="font-body text-xs uppercase tracking-wider text-muted-foreground">
                  {product.category}
                </span>
                <Link href={`/shop/${product.id}`}>
                  <h3 className="mt-1 font-display text-lg font-medium text-foreground transition-colors hover:text-primary">
                    {product.name}
                  </h3>
                </Link>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-body text-lg font-semibold text-foreground">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="font-body text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button size="icon" className="h-9 w-9 rounded-full">
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
