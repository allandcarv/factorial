import type { StateCreator } from 'zustand';

import type { Product } from '../../types';
import { INITIAL_ORDER_STATE } from '../../constants';
import type { ProcessedOrder } from '../../types/order';

export interface OrderState {
  order: ProcessedOrder;
  addProduct: (product: Product) => void;
  removeProduct: (product: Product) => void;
  resetOrder: () => void;
}

export const createOrdersSlice: StateCreator<OrderState> = (set) => ({
  order: INITIAL_ORDER_STATE,
  addProduct: (product) =>
    set((state) => {
      state.order.products.push(product);
      const total = state.order.total + product.price;

      return {
        ...state,
        total,
      };
    }),

  removeProduct: (product) =>
    set((state) => {
      const filteredProducts = state.order.products.filter(
        (p) => p.id !== product.id
      );
      const total = state.order.total - product.price;

      return {
        ...state,
        order: {
          products: filteredProducts,
          total,
        },
      };
    }),
  resetOrder: () => set((state) => ({ ...state, order: INITIAL_ORDER_STATE })),
});
