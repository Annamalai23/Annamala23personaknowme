import { create } from "zustand";

interface AppState {
  commandPaletteOpen: boolean;
  setCommandPaletteOpen: (v: boolean) => void;
  subscriptionModalOpen: boolean;
  subscriptionEmail: string;
  openSubscription: (email: string) => void;
  closeSubscription: () => void;
  activeCategory: string;
  setActiveCategory: (c: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  commandPaletteOpen: false,
  setCommandPaletteOpen: (v) => set({ commandPaletteOpen: v }),
  subscriptionModalOpen: false,
  subscriptionEmail: "",
  openSubscription: (email) => set({ subscriptionModalOpen: true, subscriptionEmail: email }),
  closeSubscription: () => set({ subscriptionModalOpen: false }),
  activeCategory: "All",
  setActiveCategory: (c) => set({ activeCategory: c }),
}));