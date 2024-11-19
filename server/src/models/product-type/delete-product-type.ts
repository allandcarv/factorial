import fs from 'node:fs/promises';

import { getProductTypes } from './get-product-types';
import { PRODUCT_TYPES_FILE } from '../../shared/constants';

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
