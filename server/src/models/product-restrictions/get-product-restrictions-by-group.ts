import type { ProductRestrictionDTO } from '../../types/product-restriction';
import { getProductRestrictions } from './get-product-restrictions';

export const getProductRestrictionsByGroup = async (
  productGroupId: string
): Promise<ProductRestrictionDTO[]> => {
  try {
    const productRestrictions = await getProductRestrictions();

    const filteredProductRestrictions = productRestrictions.filter(
      (productRestriction) =>
        productRestriction.product_group === productGroupId
    );

    return filteredProductRestrictions;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on Getting Product Restrictions By Group: ${err}`);
  }
};
