import { create } from 'zustand';

import {
  createRestrictedProductsSlice,
  type RestrictedProductsState,
} from '../slices/restricted-products';
import {
  createSelectedProductsSlice,
  type SelectedProductsState,
} from '../slices/selected-products';

import {
  createSelectedTypesSlice,
  type SelectedTypesState,
} from '../slices/selected-types';
import { createOrdersSlice, OrderState } from '../slices/order';
import { createProductsSlice, type ProductsState } from '../slices/products';

export const useAppStore = create<
  RestrictedProductsState &
    SelectedProductsState &
    SelectedTypesState &
    OrderState &
    ProductsState
>()((...a) => ({
  ...createSelectedProductsSlice(...a),
  ...createRestrictedProductsSlice(...a),
  ...createSelectedTypesSlice(...a),
  ...createOrdersSlice(...a),
  ...createProductsSlice(...a),
}));
