"use client";
import { CartItem } from "@/components/cart/CartItem";
import { OrderSummary } from "@/components/cart/OrderSummary";
import { Button } from "@/components/ui/button";
import { useCart } from "@/providers/CartContextZustand";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

export default function Cart() {
  const { items, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <>
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="mx-auto max-w-md">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-muted p-6">
                <ShoppingBag className="h-12 w-12 text-muted-foreground" />
              </div>
            </div>
            <h1 className="font-display text-3xl font-semibold text-foreground mb-3">
              Your Cart is Empty
            </h1>
            <p className="font-body text-muted-foreground mb-8">
              {
                "Looks like you haven't added any items to your cart yet. Explore our collection to find your perfect look."
              }
            </p>
            <Button asChild size="lg" className="font-body">
              <Link href="/shop">Start Shopping</Link>
            </Button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            Shopping Cart
          </h1>
          <button
            onClick={clearCart}
            className="font-body text-sm text-muted-foreground hover:text-destructive transition-colors"
          >
            Clear Cart
          </button>
        </div>

        {/* Cart Content */}
        <div className="grid gap-12 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="divide-y divide-border">
              {items.map((item, index) => (
                <CartItem
                  key={`${item.productId}-${item.color}-${item.length}-${item.capSize}-${index}`}
                  item={item}
                />
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <OrderSummary />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
