import type { StateCreator } from 'zustand';

export interface SelectedProductsState {
  selectedProducts: Set<string>;
  addSelectedProduct: (productId: string) => void;
  removeSelectedProduct: (productId: string) => void;
  resetSelectedProducts: () => void;
}

export const createSelectedProductsSlice: StateCreator<
  SelectedProductsState
> = (set) => ({
  selectedProducts: new Set<string>(),
  addSelectedProduct: (productId) =>
    set((state) => {
      state.selectedProducts.add(productId);
      return {
        ...state,
        selectedProducts: new Set([...state.selectedProducts]),
      };
    }),
  removeSelectedProduct: (productId) =>
    set((state) => {
      state.selectedProducts.delete(productId);
      return {
        ...state,
        selectedProducts: new Set([...state.selectedProducts]),
      };
    }),
  resetSelectedProducts: () =>
    set((state) => ({ ...state, selectedProducts: new Set<string>() })),
});
