import { useLocation } from 'react-router';

import type { Product } from '../types';
import { useProductNavigate } from './use-product-navigate';
import { useProductRestrictions } from './use-product-restrictions';
import { useAppStore } from '../store/hooks';

export const useOnClickProduct = () => {
  const { pathname } = useLocation();

  const { navigateToProductsPage } = useProductNavigate();
  const selectedProducts = useAppStore((state) => state.selectedProducts);
  const addSelectedProduct = useAppStore((state) => state.addSelectedProduct);
  const removeSelectedProduct = useAppStore(
    (state) => state.removeSelectedProduct
  );

  const { getProductRestrictions, removeProductRestrictions } =
    useProductRestrictions();

  const onClickItemHandler = async (product: Product) => {
    if (!pathname.includes('products')) {
      navigateToProductsPage(product);
    }

    const isProductSelected = selectedProducts.some(
      (selectedProduct) => selectedProduct.id === product.id
    );

    if (isProductSelected) {
      removeSelectedProduct(product.id);
      removeProductRestrictions(product.id);
    } else {
      addSelectedProduct(product);
      getProductRestrictions(product.id);
    }
  };

  return {
    onClickItemHandler,
  };
};
