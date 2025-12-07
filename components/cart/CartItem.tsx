import { Minus, Plus, Trash2 } from "lucide-react";
import { CartItem as CartItemType, useCart } from "@/providers/CartContext";
import Link from "next/link";

interface CartItemProps {
  item: CartItemType;
}

export const CartItem = ({ item }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(
      item.productId,
      item.color,
      item.length,
      item.capSize,
      newQuantity
    );
  };

  const handleRemove = () => {
    removeFromCart(item.productId, item.color, item.length, item.capSize);
  };

  return (
    <div className="flex gap-4 py-6 border-b border-border">
      {/* Product Image */}
      <Link
        href={`/product/${item.productId}`}
        className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-muted"
      >
        <img
          src={item.image}
          alt={item.name}
          className="h-full w-full object-cover"
        />
      </Link>

      {/* Product Details */}
      <div className="flex flex-1 flex-col justify-between">
        <div className="flex justify-between">
          <div>
            <Link
              href={`/product/${item.productId}`}
              className="font-body font-medium text-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
            <p className="mt-1 font-body text-sm text-muted-foreground">
              {item.color} • {item.length} • {item.capSize}
            </p>
          </div>
          <button
            onClick={handleRemove}
            className="text-muted-foreground hover:text-destructive transition-colors"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2 rounded-lg border border-border">
            <button
              onClick={() => handleQuantityChange(item.quantity - 1)}
              className="p-1.5 hover:bg-muted transition-colors"
              disabled={item.quantity <= 1}
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="w-8 text-center font-body text-sm font-medium">
              {item.quantity}
            </span>
            <button
              onClick={() => handleQuantityChange(item.quantity + 1)}
              className="p-1.5 hover:bg-muted transition-colors"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>

          {/* Price */}
          <span className="font-display text-lg font-semibold text-foreground">
            ${item.price * item.quantity}
          </span>
        </div>
      </div>
    </div>
  );
};
