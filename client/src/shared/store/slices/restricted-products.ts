import type { StateCreator } from 'zustand';

export interface RestrictedProductsState {
  restrictedProducts: Set<string>;
  addRestrictedProduct: (restrictedProductId: string) => void;
  removeRestrictedProduct: (restrictedProductId: string) => void;
  resetRestrictedProducts: () => void;
}

export const createRestrictedProductsSlice: StateCreator<
  RestrictedProductsState
> = (set) => ({
  isLoading: false,
  restrictedProducts: new Set<string>(),
  addRestrictedProduct: (restrictedProductId) =>
    set((state) => {
      const newState = new Set([...state.restrictedProducts]);

      newState.add(restrictedProductId);

      return {
        ...state,
        restrictedProducts: newState,
      };
    }),
  removeRestrictedProduct: (restrictedProductId) =>
    set((state) => {
      const newState = new Set([...state.restrictedProducts]);

      newState.delete(restrictedProductId);

      return {
        ...state,
        restrictedProducts: newState,
      };
    }),
  resetRestrictedProducts: () =>
    set((state) => ({ ...state, restrictedProducts: new Set<string>() })),
});
