import fs from 'node:fs/promises';

import type { ProductDTO } from '../../types/product';
import { PRODUCTS_FILE } from '../../shared/constants';

export const getProducts = async (): Promise<ProductDTO[]> => {
  try {
    const productsBuffer = await fs.readFile(PRODUCTS_FILE);

    const products: ProductDTO[] = JSON.parse(productsBuffer.toString());

    return products;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting products: ${err}`);
  }
};
