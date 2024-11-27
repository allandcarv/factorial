import { useQueryClient } from '@tanstack/react-query';

import { useAppStore } from '../store/hooks';
import {
  fetchProductRestrictionsByRestrictedProduct,
  fetchProductRestrictionsBySourceProduct,
} from '../services/api';

export const useProductRestrictions = () => {
  const queryClient = useQueryClient();

  const {
    setIsLoading,
    setIsError,
    addRestrictedProduct,
    removeRestrictedProduct,
  } = useAppStore();

  const getRestrictionsBySourceProduct = (sourceProductId: string) =>
    queryClient.fetchQuery({
      queryKey: ['product-restriction', 'source', sourceProductId],
      queryFn: () => fetchProductRestrictionsBySourceProduct(sourceProductId),
    });

  const getRestrictionsByRestrictedProduct = (restrictedProductId: string) =>
    queryClient.fetchQuery({
      queryKey: ['product-restriction', 'restricted', restrictedProductId],
      queryFn: () =>
        fetchProductRestrictionsByRestrictedProduct(restrictedProductId),
    });

  const getProductRestrictions = async (productId: string) => {
    try {
      setIsLoading(true);
      setIsError(false);

      const productRestrictionsBySourceProduct =
        await getRestrictionsBySourceProduct(productId);
      const productRestrictionsByRestrictedProduct =
        await getRestrictionsByRestrictedProduct(productId);

      productRestrictionsBySourceProduct.forEach((productRestriction) =>
        addRestrictedProduct(productRestriction.restrictedProduct)
      );
      productRestrictionsByRestrictedProduct.forEach((productRestriction) =>
        addRestrictedProduct(productRestriction.sourceProduct)
      );
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const removeProductRestrictions = async (productId: string) => {
    try {
      setIsLoading(true);
      setIsError(false);

      const productRestrictionsBySourceProduct =
        await getRestrictionsBySourceProduct(productId);
      const productRestrictionsByRestrictedProduct =
        await getRestrictionsByRestrictedProduct(productId);

      productRestrictionsBySourceProduct.forEach((productRestriction) =>
        removeRestrictedProduct(productRestriction.restrictedProduct)
      );
      productRestrictionsByRestrictedProduct.forEach((productRestriction) =>
        removeRestrictedProduct(productRestriction.sourceProduct)
      );
    } catch {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    getProductRestrictions,
    removeProductRestrictions,
  };
};
