import fs from 'node:fs/promises';

import { PRODUCT_TYPES_FILE } from './constants';
import { getProductTypes } from './get-product-types';

export const deleteProductType = async (
  productTypeId: string
): Promise<void> => {
  try {
    const productTypes = await getProductTypes();

    const newProductTypes = productTypes.filter(
      (productType) => productType.id !== productTypeId
    );

    await fs.writeFile(PRODUCT_TYPES_FILE, JSON.stringify(newProductTypes));
  } catch (err) {
    console.error(err);

    throw new Error(`Error on deleting product type: ${err}`);
  }
};
