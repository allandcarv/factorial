import type { StateCreator } from 'zustand';

import type { SelectedProductsState } from './selected-products';
import type { SelectedTypesState } from './selected-types';
import type { OrderState } from './order';
import type { Product } from '../../types';
import { INITIAL_ORDER_STATE } from '../../constants';

export interface ProductsState {
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  resetProductsState: () => void;
}

export const createProductsSlice: StateCreator<
  SelectedProductsState & SelectedTypesState & OrderState,
  [],
  [],
  ProductsState
> = (set) => ({
  addProduct: (product) =>
    set((state) => {
      state.selectedProducts.add(product.id);
      state.selectedTypes.add(product.productType.id);

      return {
        ...state,
        selectedProducts: new Set([...state.selectedProducts]),
        selectedTypes: new Set([...state.selectedTypes]),
        order: {
          products: [...state.order.products, product],
          total: state.order.total + product.price,
        },
      };
    }),
  removeProduct: (product) =>
    set((state) => {
      state.selectedProducts.delete(product.id);
      state.selectedTypes.delete(product.productType.id);

      const filteredProducts = state.order.products.filter(
        (p) => p.id !== product.id
      );
      return {
        ...state,
        selectedProducts: new Set([...state.selectedProducts]),
        selectedTypes: new Set([...state.selectedTypes]),
        order: {
          products: filteredProducts,
          total: state.order.total - product.price,
        },
      };
    }),
  resetProductsState: () =>
    set((state) => ({
      ...state,
      selectedTypes: new Set<string>(),
      selectedProducts: new Set<string>(),
      order: { ...INITIAL_ORDER_STATE },
    })),
});
