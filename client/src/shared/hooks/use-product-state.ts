import { useAppStore } from '../store/hooks';
import type { Product } from '../types';

export const useProductState = (product: Product) => {
  const restrictedProducts = useAppStore((state) => state.restrictedProducts);
  const selectedProducts = useAppStore((state) => state.selectedProducts);
  const selectedTypes = useAppStore((state) => state.selectedTypes);

  const isProductBlocked =
    !selectedProducts.has(product.id) &&
    selectedTypes.has(product.productType.id);

  const isProductRestricted = restrictedProducts.has(product.id);

  const isProductDisabled = isProductBlocked || isProductRestricted;

  return {
    isProductDisabled,
  };
};
