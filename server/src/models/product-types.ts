import fs from 'node:fs/promises';
import path from 'node:path';

import type { ProductTypeDTO } from '../types/product-type';

export const getProductTypes = async (): Promise<ProductTypeDTO[]> => {
  try {
    const productTypesBuffer = await fs.readFile(
      path.join(__dirname, '..', '..', 'db', 'product-types.json')
    );

    const productTypes: ProductTypeDTO[] = JSON.parse(
      productTypesBuffer.toString()
    );

    return productTypes;
  } catch (err) {
    throw new Error(`Error on getting product types: ${err}`);
  }
};
