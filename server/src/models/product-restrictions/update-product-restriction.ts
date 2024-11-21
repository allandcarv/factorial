import fs from 'node:fs/promises';

import type {
  ProductRestrictionDTO,
  UpdateProductRestriction,
} from '../../types/product-restriction';
import { getProductRestrictions } from './get-product-restrictions';
import { PRODUCT_RESTRICTIONS_FILE } from '../../shared/constants';

export const updateProductRestriction = async (
  updatedProductRestriction: UpdateProductRestriction
): Promise<ProductRestrictionDTO> => {
  try {
    const productRestrictions = await getProductRestrictions();

    const productRestriction = productRestrictions.find(
      (pr) => pr.id === updatedProductRestriction.id
    );

    if (!productRestriction) {
      throw new Error('Product Restriction Not Found');
    }

    productRestriction.product_group =
      updatedProductRestriction.product_group ??
      productRestriction.product_group;
    productRestriction.restricted_product =
      updatedProductRestriction.restricted_product ??
      productRestriction.restricted_product;
    productRestriction.restricted_type =
      updatedProductRestriction.restricted_type ??
      productRestriction.restricted_type;
    productRestriction.source_product =
      updatedProductRestriction.source_product ??
      productRestriction.source_product;

    await fs.writeFile(
      PRODUCT_RESTRICTIONS_FILE,
      JSON.stringify(productRestrictions)
    );

    return productRestriction;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on Updating Product Restriction: ${err}`);
  }
};
