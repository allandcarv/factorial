import type { ProductRestrictionDTO } from '../../types/product-restriction';
import { getProductRestrictions } from './get-product-restrictions';

export const getProductRestrictionsByRestrictedType = async (
  restrictedTypeId: string
): Promise<ProductRestrictionDTO[]> => {
  try {
    const productRestrictions = await getProductRestrictions();

    const filteredProductRestrictions = productRestrictions.filter(
      (productRestriction) =>
        productRestriction.restricted_type === restrictedTypeId
    );

    return filteredProductRestrictions;
  } catch (err) {
    console.error(err);

    throw new Error(
      `Error on Getting Product Restrictions By Restricted Type: ${err}`
    );
  }
};
