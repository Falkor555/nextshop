import CartItem from "@/types/CartItem";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type Store = {
  cart: CartItem[];
  add: (c: CartItem) => void;
  clear: () => void;
};

const useStore = create<Store>()(
  persist(
    (set) => ({
      cart: [],
      add: (c: CartItem) => set((state) => ({ cart: [...state.cart, c] })),
      clear: () => set(() => ({ cart: [] })),
    }),
    { name: "cart-storage" },
  ),
);

export default useStore;