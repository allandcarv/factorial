import { useAppStore } from '../store/hooks';
import type { Product } from '../types';

export const useProductState = (product: Product) => {
  const restrictedProducts = useAppStore((state) => state.restrictedProducts);
  const selectedProducts = useAppStore((state) => state.selectedProducts);

  const isProductBlocked = selectedProducts.some((selectedProduct) => {
    const isSameProduct = selectedProduct.id === product.id;

    if (isSameProduct) {
      return false;
    }

    const isSameProductType =
      selectedProduct.productType.id === product.productType.id;

    return isSameProductType;
  });

  const isProductRestricted = restrictedProducts.has(product.id);

  const isProductDisabled = isProductBlocked || isProductRestricted;

  return {
    isProductDisabled,
  };
};
