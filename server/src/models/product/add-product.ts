import fs from 'node:fs/promises';

import type { ProductDTO } from '../../types/product';
import { getProducts } from './get-products';
import { PRODUCTS_FILE } from '../../shared/constants';

export const addProduct = async (product: ProductDTO): Promise<ProductDTO> => {
  try {
    const products = await getProducts();

    products.push(product);

    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products));

    return product;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product group: ${err}`);
  }
};
