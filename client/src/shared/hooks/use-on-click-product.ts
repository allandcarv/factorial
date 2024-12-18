import { useLocation } from 'react-router';

import type { Product } from '../types';
import { useProductNavigate } from './use-product-navigate';
import { useProductRestrictions } from './use-product-restrictions';
import { useAppStore } from '../store/hooks';

export const useOnClickProduct = () => {
  const { pathname } = useLocation();

  const { navigateToProductsPage } = useProductNavigate();
  const selectedProducts = useAppStore((state) => state.selectedProducts);
  const addProduct = useAppStore((store) => store.addProduct);
  const removeProduct = useAppStore((store) => store.removeProduct);

  const {
    getProductRestrictionsByProduct,
    removeProductRestrictionsByProduct,
  } = useProductRestrictions();

  const onClickItemHandler = async (product: Product) => {
    if (!pathname.includes('products')) {
      navigateToProductsPage(product);
    }

    const isProductSelected = selectedProducts.has(product.id);

    if (isProductSelected) {
      removeProduct(product);
      removeProductRestrictionsByProduct(product.id);
    } else {
      addProduct(product);
      getProductRestrictionsByProduct(product.id);
    }
  };

  return {
    onClickItemHandler,
  };
};
