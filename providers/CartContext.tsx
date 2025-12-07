"use client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  color: string;
  length: string;
  capSize: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (
    productId: string,
    color: string,
    length: string,
    capSize: string
  ) => void;
  updateQuantity: (
    productId: string,
    color: string,
    length: string,
    capSize: string,
    quantity: number
  ) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "elvira-empire-cart";

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (newItem: CartItem) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.productId === newItem.productId &&
          item.color === newItem.color &&
          item.length === newItem.length &&
          item.capSize === newItem.capSize
      );

      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex].quantity += newItem.quantity;
        return updated;
      }

      return [...prev, newItem];
    });
  };

  const removeFromCart = (
    productId: string,
    color: string,
    length: string,
    capSize: string
  ) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(
            item.productId === productId &&
            item.color === color &&
            item.length === length &&
            item.capSize === capSize
          )
      )
    );
  };

  const updateQuantity = (
    productId: string,
    color: string,
    length: string,
    capSize: string,
    quantity: number
  ) => {
    if (quantity <= 0) {
      removeFromCart(productId, color, length, capSize);
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId &&
        item.color === color &&
        item.length === length &&
        item.capSize === capSize
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
