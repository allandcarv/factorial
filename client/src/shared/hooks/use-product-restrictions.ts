import { useQueryClient } from '@tanstack/react-query';

import { useAppStore } from '../store/hooks';
import {
  fetchProductRestrictionsByRestrictedProduct,
  fetchProductRestrictionsBySourceProduct,
} from '../services/api';

export const useProductRestrictions = () => {
  const queryClient = useQueryClient();

  const addRestrictedProduct = useAppStore(
    (state) => state.addRestrictedProduct
  );
  const removeRestrictedProduct = useAppStore(
    (state) => state.removeRestrictedProduct
  );
  const setIsLoading = useAppStore((state) => state.setIsLoading);

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
    setIsLoading(true);

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

    setIsLoading(false);
  };

  const removeProductRestrictions = async (productId: string) => {
    setIsLoading(true);

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

    setIsLoading(false);
  };

  return {
    getProductRestrictions,
    removeProductRestrictions,
  };
};
