"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

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

interface CartStore {
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

export const useCart = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (newItem) =>
        set((state) => {
          const existingIndex = state.items.findIndex(
            (item) =>
              item.productId === newItem.productId &&
              item.color === newItem.color &&
              item.length === newItem.length &&
              item.capSize === newItem.capSize
          );

          if (existingIndex >= 0) {
            const updated = [...state.items];
            updated[existingIndex].quantity += newItem.quantity;
            return { items: updated };
          }

          return { items: [...state.items, newItem] };
        }),

      removeFromCart: (productId, color, length, capSize) =>
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(
                item.productId === productId &&
                item.color === color &&
                item.length === length &&
                item.capSize === capSize
              )
          ),
        })),

      updateQuantity: (productId, color, length, capSize, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId, color, length, capSize);
          return;
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId &&
            item.color === color &&
            item.length === length &&
            item.capSize === capSize
              ? { ...item, quantity }
              : item
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      get cartCount() {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      get subtotal() {
        return get().items.reduce(
          (sum, item) => sum + item.price * item.quantity,
          0
        );
      },
    }),
    {
      name: "elvira-empire-cart", // localStorage key
    }
  )
);
