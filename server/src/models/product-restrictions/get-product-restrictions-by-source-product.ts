import type { ProductRestrictionDTO } from '../../shared/types/product-restriction';
import { getProductRestrictions } from './get-product-restrictions';

export const getProductRestrictionsBySourceProduct = async (
  sourceProductId: string
): Promise<ProductRestrictionDTO[]> => {
  try {
    const productRestrictions = await getProductRestrictions();

    const filteredProductRestrictions = productRestrictions.filter(
      (productRestriction) =>
        productRestriction.source_product === sourceProductId
    );

    return filteredProductRestrictions;
  } catch (err) {
    console.error(err);

    throw new Error(
      `Error on Getting Product Restrictions By Source Product: ${err}`
    );
  }
};
