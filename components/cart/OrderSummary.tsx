import { Button } from "@/components/ui/button";
import { useCart } from "@/providers/CartContextZustand";
import Link from "next/link";
import { toast } from "sonner";

export const OrderSummary = () => {
  const { subtotal, cartCount } = useCart();

  const shipping = subtotal >= 150 ? 0 : 10;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    toast.info("Checkout UI ready! Payment integration coming soon.");
  };

  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
      <h2 className="font-display text-xl font-semibold text-foreground mb-6">
        Order Summary
      </h2>

      <div className="space-y-4">
        <div className="flex justify-between font-body text-sm">
          <span className="text-muted-foreground">
            Subtotal ({cartCount} {cartCount === 1 ? "item" : "items"})
          </span>
          <span className="font-medium text-foreground">
            ${subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between font-body text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-medium text-foreground">
            {shipping === 0 ? (
              <span className="text-primary">Free</span>
            ) : (
              `$${shipping.toFixed(2)}`
            )}
          </span>
        </div>

        {shipping > 0 && (
          <p className="font-body text-xs text-muted-foreground">
            Free shipping on orders over $150
          </p>
        )}

        <div className="flex justify-between font-body text-sm">
          <span className="text-muted-foreground">Estimated Tax</span>
          <span className="font-medium text-foreground">${tax.toFixed(2)}</span>
        </div>

        <div className="border-t border-border pt-4">
          <div className="flex justify-between">
            <span className="font-display text-lg font-semibold text-foreground">
              Total
            </span>
            <span className="font-display text-xl font-semibold text-foreground">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <Button onClick={handleCheckout} className="w-full font-body" size="lg">
          Proceed to Checkout
        </Button>
        <Button
          asChild
          variant="outline"
          className="w-full font-body"
          size="lg"
        >
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>

      {/* Trust Badges */}
      <div className="mt-6 space-y-2 border-t border-border pt-6">
        <p className="flex items-center gap-2 font-body text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Secure SSL Encrypted Payment
        </p>
        <p className="flex items-center gap-2 font-body text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          30-Day Money Back Guarantee
        </p>
        <p className="flex items-center gap-2 font-body text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Free Returns on Unworn Items
        </p>
      </div>
    </div>
  );
};
