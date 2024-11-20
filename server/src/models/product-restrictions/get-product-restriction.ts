import type { ProductRestrictionDTO } from '../../types/product-restriction';
import { getProductRestrictions } from './get-product-restrictions';

export const getProductRestriction = async (
  productRestrictionId: string
): Promise<ProductRestrictionDTO | undefined> => {
  try {
    const productRestrictions = await getProductRestrictions();

    const productRestriction = productRestrictions.find(
      (productRestriction) => productRestriction.id === productRestrictionId
    );

    return productRestriction;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on Getting Product Restriction: ${err}`);
  }
};
