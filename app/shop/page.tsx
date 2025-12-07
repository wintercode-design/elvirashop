"use client";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, ShoppingBag, SlidersHorizontal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
  {
    id: 5,
    name: "Deep Wave Frontal",
    price: 329,
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=500&h=600&fit=crop",
    category: "Human Hair",
  },
  {
    id: 6,
    name: "Kinky Curly Bundle",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=500&h=600&fit=crop",
    category: "Extensions",
    isNew: true,
  },
  {
    id: 7,
    name: "Blonde Highlight Wig",
    price: 279,
    originalPrice: 349,
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=500&h=600&fit=crop",
    category: "Human Hair",
  },
  {
    id: 8,
    name: "Short Bob Synthetic",
    price: 129,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&h=600&fit=crop",
    category: "Synthetic",
    isBestseller: true,
  },
];

const categories = ["All", "Human Hair", "Synthetic", "Extensions"];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <>
      {/* Hero */}
      <section className="bg-blush-light/30 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 font-display text-4xl font-semibold text-foreground md:text-5xl">
            Our Collection
          </h1>
          <p className="mx-auto max-w-2xl font-body text-muted-foreground">
            Discover premium wigs and extensions crafted for the confident,
            modern woman.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-border py-4">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="shrink-0"
              >
                {category}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Select defaultValue="featured">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="featured">Featured</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-lg bg-card shadow-soft transition-shadow hover:shadow-elegant  animate-in fade-in-up"
                style={{ animationDelay: `${0.05 * (index + 1)}s` }}
              >
                <Link href={`/shop/${product.id}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
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
    </>
  );
};

export default Shop;
