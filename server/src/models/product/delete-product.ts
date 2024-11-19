import fs from 'node:fs/promises';

import { getProducts } from './get-products';
import { PRODUCTS_FILE } from '../../shared/constants';

export const deleteProduct = async (productId: string): Promise<void> => {
  try {
    const products = await getProducts();

    const newProducts = products.filter((product) => product.id !== productId);

    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(newProducts));
  } catch (err) {
    console.error(err);

    throw new Error(`Error on removing product: ${err}`);
  }
};
