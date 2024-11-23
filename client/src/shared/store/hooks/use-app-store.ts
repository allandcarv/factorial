import { create } from 'zustand';

import {
  createRestrictedProductsSlice,
  type RestrictedProductsState,
} from '../slices/restricted-products';
import {
  createSelectedProductsSlice,
  type SelectedProductsState,
} from '../slices/selected-products';

export const useAppStore = create<
  RestrictedProductsState & SelectedProductsState
>()((...a) => ({
  ...createSelectedProductsSlice(...a),
  ...createRestrictedProductsSlice(...a),
}));
