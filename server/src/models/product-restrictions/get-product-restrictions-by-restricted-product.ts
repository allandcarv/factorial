import type { ProductRestrictionDTO } from '../../types/product-restriction';
import { getProductRestrictions } from './get-product-restrictions';

export const getProductRestrictionsByRestrictedProduct = async (
  restrictedGroupId: string
): Promise<ProductRestrictionDTO[]> => {
  try {
    const productRestrictions = await getProductRestrictions();

    const filteredProductRestrictions = productRestrictions.filter(
      (productRestriction) =>
        productRestriction.restricted_product === restrictedGroupId
    );

    return filteredProductRestrictions;
  } catch (err) {
    console.error(err);

    throw new Error(
      `Error on Getting Product Restrictions By Restricted Product: ${err}`
    );
  }
};
