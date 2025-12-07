import { Crown, Heart, Shield, Sparkles } from "lucide-react";

const values = [
  {
    icon: Crown,
    title: "Premium Quality",
    description:
      "We source only the finest human hair and premium synthetic fibers for our collections.",
  },
  {
    icon: Heart,
    title: "Customer First",
    description:
      "Your satisfaction is our priority. We're here to help you find your perfect style.",
  },
  {
    icon: Sparkles,
    title: "Confidence Boost",
    description:
      "Every piece is designed to make you feel beautiful, confident, and empowered.",
  },
  {
    icon: Shield,
    title: "Trusted Brand",
    description:
      "Join thousands of happy customers who trust ElviraEmpire for their hair needs.",
  },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="gradient-hero py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className="mb-6 font-display text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl  animate-in fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              Our Story
            </h1>
            <p
              className="font-body text-lg leading-relaxed text-muted-foreground  animate-in fade-in"
              style={{ animationDelay: "0.2s" }}
            >
              Building confidence, one crown at a time
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              className=" animate-in fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              <img
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=1000&fit=crop"
                alt="ElviraEmpire Story"
                className="rounded-lg shadow-elegant"
              />
            </div>
            <div
              className="space-y-6  animate-in fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <span className="font-body text-sm font-medium uppercase tracking-widest text-primary">
                Welcome to ElviraEmpire
              </span>
              <h2 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
                Empowering Women Through Beauty
              </h2>
              <p className="font-body leading-relaxed text-muted-foreground">
                {
                  "ElviraEmpire was born from a simple belief: every woman deserves to feel like royalty. We understand that hair is more than just strands—it's an expression of identity, confidence, and personal style."
                }
              </p>
              <p className="font-body leading-relaxed text-muted-foreground">
                {
                  "Our journey began with a passion for helping women discover their most confident selves. Whether you're looking for a subtle enhancement or a complete transformation, we're here to provide premium quality wigs and extensions that look and feel natural. their most confident selves. Whether you're looking for a subtle enhancement or a complete transformation, we're here to provide premium quality wigs and extensions that look and feel natural."
                }
              </p>
              <p className="font-body leading-relaxed text-muted-foreground">
                {
                  "Today, ElviraEmpire serves thousands of queens across the country, offering a carefully curated collection that caters to every style, texture, and preference. Join our empire and embrace your natural beauty."
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-blush-light/30 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-3xl font-semibold text-foreground md:text-4xl">
              What Sets Us Apart
            </h2>
            <p className="mx-auto max-w-2xl font-body text-muted-foreground">
              Our commitment to excellence in everything we do
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="rounded-lg border border-border bg-card p-6 text-center shadow-soft  animate-in fade-in-up"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 font-display text-3xl font-semibold text-foreground md:text-4xl">
              Our Mission
            </h2>
            <p className="font-body text-lg leading-relaxed text-muted-foreground">
              {
                "To provide every woman with access to premium, high-quality wigs and hair extensions that enhance her natural beauty and boost her confidence. We believe that looking good is the first step to feeling good, and we're committed to making that possible for everyone who joins the ElviraEmpire family."
              }
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
