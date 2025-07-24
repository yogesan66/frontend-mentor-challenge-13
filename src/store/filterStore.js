import { create } from "zustand";

const filterStore = create((set) => ({
  filters: [],
  addItem: (item) =>
    set((state) => {
      if (state.filters.includes(item)) return state;
      return { filters: [...state.filters, item] };
    }),
  removeItem: (item) =>
    set((state) => {
      return { filters: state.filters.filter((i) => i != item) };
    }),
  reset: () => set({ filters: [] }),
}));

export default filterStore;
