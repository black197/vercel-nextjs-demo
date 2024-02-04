import { create } from "zustand";

export const useDrawerStore = create((set) => ({
  drawerIsOpen: false,
  toggleDrawer: () => set((state) => ({ drawerIsOpen: !state.drawerIsOpen })),
}));
