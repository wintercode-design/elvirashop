import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Michelle R.",
    location: "Los Angeles, CA",
    rating: 5,
    text: "Absolutely love my new wig! The quality is incredible and it looks so natural. ElviraEmpire has become my go-to for all my hair needs.",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&h=100&fit=crop",
  },
  {
    id: 2,
    name: "Jasmine T.",
    location: "Atlanta, GA",
    rating: 5,
    text: "The customer service is amazing and the wigs are top-notch quality. I've received so many compliments. Highly recommend!",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    id: 3,
    name: "Keisha M.",
    location: "New York, NY",
    rating: 5,
    text: "Best investment I've made! The lace front is undetectable and the hair is so soft. Will definitely be ordering again.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
            What Our Queens Say
          </h2>
          <p className="mx-auto max-w-2xl font-body text-muted-foreground">
            Real reviews from real customers who found their perfect style with
            ElviraEmpire
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="rounded-lg border border-border bg-card p-6 shadow-soft  animate-in fade-in-up"
              style={{ animationDelay: `${0.15 * (index + 1)}s` }}
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="mb-6 font-body text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.text}"`}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-base font-medium text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
