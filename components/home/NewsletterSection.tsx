"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("Welcome to ElviraEmpire!", {
        description: "You've been added to our exclusive list.",
      });
      setEmail("");
    }
  };

  return (
    <section className="relative overflow-hidden bg-primary py-20 md:py-28">
      <div className="container mx-auto px-4 relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-display text-3xl font-semibold text-primary-foreground md:text-4xl">
            Join the Empire
          </h2>
          <p className="mb-8 font-body text-primary-foreground/80">
            Subscribe for exclusive offers, styling tips, and be the first to
            know about new arrivals.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus:border-primary-foreground"
              required
            />
            <Button
              type="submit"
              variant="secondary"
              size="lg"
              className="h-12 shrink-0 px-8"
            >
              Subscribe
            </Button>
          </form>
          <p className="mt-4 font-body text-xs text-primary-foreground/60">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-primary-foreground/5 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-60 w-60 rounded-full bg-primary-foreground/5 blur-3xl" />
    </section>
  );
};
