import fs from 'node:fs/promises';

import type {
  NewProductRestriction,
  ProductRestrictionDTO,
} from '../../types/product-restriction';
import { uuid } from '../../utils/uuid';
import { PRODUCT_RESTRICTIONS_FILE } from '../../shared/constants';
import { getProductRestrictions } from './get-product-restrictions';

export const addProductRestriction = async (
  newProductRestriction: NewProductRestriction
): Promise<ProductRestrictionDTO> => {
  try {
    const productRestrictions = await getProductRestrictions();

    const productRestriction: ProductRestrictionDTO = {
      id: uuid(),
      source_product: newProductRestriction.restrictedProduct,
      restricted_type: newProductRestriction.restrictedType,
      restricted_product: newProductRestriction.restrictedProduct,
    };

    productRestrictions.push(productRestriction);

    await fs.writeFile(
      PRODUCT_RESTRICTIONS_FILE,
      JSON.stringify(productRestrictions)
    );

    return productRestriction;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on Adding New Product Restriction: ${err}`);
  }
};
