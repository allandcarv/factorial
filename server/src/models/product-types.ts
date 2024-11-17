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
    console.error(err);
    throw new Error(`Error on getting product types: ${err}`);
  }
};

export const getProductType = async (
  id: string
): Promise<ProductTypeDTO | undefined> => {
  try {
    const productTypes = await getProductTypes();

    const productType = productTypes.find(
      (productType) => productType.id === id
    );

    return productType;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product type: ${err}`);
  }
};
