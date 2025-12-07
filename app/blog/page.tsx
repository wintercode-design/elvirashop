import { ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "How to Care for Your Human Hair Wig",
    excerpt:
      "Learn the essential tips and tricks to keep your human hair wig looking fresh and beautiful for longer.",
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=500&fit=crop",
    category: "Wig Care",
    readTime: "5 min read",
    date: "December 1, 2024",
  },
  {
    id: 2,
    title: "Choosing the Right Wig Cap Size",
    excerpt:
      "A complete guide to measuring your head and finding the perfect fit for maximum comfort and security.",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800&h=500&fit=crop",
    category: "Buying Guide",
    readTime: "4 min read",
    date: "November 28, 2024",
  },
  {
    id: 3,
    title: "Top 5 Styling Tips for Lace Front Wigs",
    excerpt:
      "Master the art of styling your lace front wig for a flawless, natural-looking hairline every time.",
    image:
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&h=500&fit=crop",
    category: "Styling",
    readTime: "6 min read",
    date: "November 25, 2024",
  },
  {
    id: 4,
    title: "Human Hair vs. Synthetic: Which is Right for You?",
    excerpt:
      "Understand the key differences between human hair and synthetic wigs to make the best choice for your lifestyle.",
    image:
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&h=500&fit=crop",
    category: "Buying Guide",
    readTime: "7 min read",
    date: "November 20, 2024",
  },
  {
    id: 5,
    title: "Winter Hair Care: Protecting Your Wig",
    excerpt:
      "Keep your wig looking fabulous through the cold months with these essential winter care tips.",
    image:
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=500&fit=crop",
    category: "Wig Care",
    readTime: "5 min read",
    date: "November 15, 2024",
  },
  {
    id: 6,
    title: "How to Install Clip-In Extensions Like a Pro",
    excerpt:
      "Step-by-step tutorial on installing clip-in extensions for seamless, voluminous hair.",
    image:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800&h=500&fit=crop",
    category: "Tutorials",
    readTime: "8 min read",
    date: "November 10, 2024",
  },
];

const Blog = () => {
  return (
    <>
      {/* Hero */}
      <section className="bg-blush-light/30 py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 font-display text-4xl font-semibold text-foreground md:text-5xl">
            Hair Care Tips & Guides
          </h1>
          <p className="mx-auto max-w-2xl font-body text-muted-foreground">
            Expert advice, styling tutorials, and care tips to help you look and
            feel your best.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-soft transition-shadow hover:shadow-elegant  animate-in fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <Link href={`/blog/${post.id}`} className="block">
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-body text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 font-body text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <h2 className="mb-2 font-display text-xl font-semibold text-foreground transition-colors group-hover:text-primary">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="mb-4 font-body text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-body text-xs text-muted-foreground">
                      {post.date}
                    </span>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1 font-body text-sm font-medium text-primary transition-all hover:gap-2"
                    >
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
