import { useQueryClient } from '@tanstack/react-query';

import { useAppStore } from '../store/hooks';
import { fetchRestrictedProductsByProduct } from '../services/api';

export const useProductRestrictions = () => {
  const queryClient = useQueryClient();

  const {
    setIsLoading,
    setIsError,
    addRestrictedProduct,
    removeRestrictedProduct,
  } = useAppStore();

  const getRestrictedProductsByProduct = (productId: string) =>
    queryClient.fetchQuery({
      queryKey: ['product', productId, 'restricted-products'],
      queryFn: () => fetchRestrictedProductsByProduct(productId),
    });

  const getProductRestrictionsByProduct = async (productId: string) => {
    try {
      setIsLoading(true);
      setIsError(false);

      const restrictedProducts = await getRestrictedProductsByProduct(
        productId
      );

      restrictedProducts.forEach((restrictedProduct) =>
        addRestrictedProduct(restrictedProduct)
      );
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const removeProductRestrictionsByProduct = async (productId: string) => {
    try {
      setIsLoading(true);
      setIsError(false);

      const restrictedProducts = await getRestrictedProductsByProduct(
        productId
      );

      restrictedProducts.forEach((restrictedProduct) =>
        removeRestrictedProduct(restrictedProduct)
      );
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getProductRestrictionsByProduct,
    removeProductRestrictionsByProduct,
  };
};
