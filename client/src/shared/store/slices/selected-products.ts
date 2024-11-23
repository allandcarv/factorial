import type { StateCreator } from 'zustand';
import type { Product } from '../../types';

export interface SelectedProductsState {
  selectedProducts: Product[];
  addSelectedProduct: (product: Product) => void;
  removeSelectedProduct: (productId: string) => void;
}

export const createSelectedProductsSlice: StateCreator<
  SelectedProductsState
> = (set) => ({
  selectedProducts: [],
  addSelectedProduct: (product) =>
    set((state) => ({
      selectedProducts: [...state.selectedProducts, product],
    })),
  removeSelectedProduct: (productId) =>
    set((state) => ({
      selectedProducts: state.selectedProducts.filter(
        (product) => product.id !== productId
      ),
    })),
});
