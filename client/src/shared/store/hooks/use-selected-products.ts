import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { Product } from '../../types';

interface SelectedProductsState {
  selectedProducts: Product[];
  addProduct: (product: Product) => void;
  removeProduct: (productId: string) => void;
}

export const useSelectedProducts = create<SelectedProductsState>()(
  devtools((set) => ({
    selectedProducts: [],
    addProduct: (product) =>
      set((state) => ({
        selectedProducts: [...state.selectedProducts, product],
      })),
    removeProduct: (productId) =>
      set((state) => ({
        selectedProducts: state.selectedProducts.filter(
          (product) => product.id !== productId
        ),
      })),
  }))
);
