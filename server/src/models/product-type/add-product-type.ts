import fs from 'node:fs/promises';

import type { ProductTypeDTO } from '../../shared/types/product-type';
import { getProductTypes } from './get-product-types';
import { PRODUCT_TYPES_FILE } from '../../shared/constants';

export const addProductType = async (
  productType: ProductTypeDTO
): Promise<ProductTypeDTO> => {
  try {
    const productTypes = await getProductTypes();

    productTypes.push(productType);

    await fs.writeFile(PRODUCT_TYPES_FILE, JSON.stringify(productTypes));

    return productType;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product type: ${err}`);
  }
};
