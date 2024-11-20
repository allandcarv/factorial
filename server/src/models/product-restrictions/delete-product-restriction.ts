import fs from 'node:fs/promises';

import { getProductRestrictions } from './get-product-restrictions';
import { PRODUCT_RESTRICTIONS_FILE } from '../../shared/constants';

export const deleteProductRestriction = async (
  productRestrictionId: string
): Promise<void> => {
  try {
    const productRestrictions = await getProductRestrictions();

    const filteredProductRestrictions = productRestrictions.filter(
      (productRestriction) => productRestriction.id !== productRestrictionId
    );

    await fs.writeFile(
      PRODUCT_RESTRICTIONS_FILE,
      JSON.stringify(filteredProductRestrictions)
    );
  } catch (err) {
    console.error(err);

    throw new Error(`Error on Removing Product Restriction: ${err}`);
  }
};
