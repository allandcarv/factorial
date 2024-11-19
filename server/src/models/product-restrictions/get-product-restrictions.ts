import fs from 'node:fs/promises';

import type { ProductRestrictionDTO } from '../../types/product-restriction';
import { PRODUCT_RESTRICTIONS_FILE } from '../../shared/constants';

export const getProductRestrictions = async (): Promise<
  ProductRestrictionDTO[]
> => {
  try {
    const productRestrictions = await fs.readFile(PRODUCT_RESTRICTIONS_FILE);

    return JSON.parse(productRestrictions.toString());
  } catch (err) {
    console.error(err);

    throw new Error(`Error on Getting Product Restrictions: ${err}`);
  }
};
