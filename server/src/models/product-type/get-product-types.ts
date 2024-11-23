import fs from 'node:fs/promises';

import type { ProductTypeDTO } from '../../shared/types/product-type';
import { PRODUCT_TYPES_FILE } from '../../shared/constants';

export const getProductTypes = async (): Promise<ProductTypeDTO[]> => {
  try {
    const productTypesBuffer = await fs.readFile(PRODUCT_TYPES_FILE);

    const productTypes: ProductTypeDTO[] = JSON.parse(
      productTypesBuffer.toString()
    );

    return productTypes;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product types: ${err}`);
  }
};
