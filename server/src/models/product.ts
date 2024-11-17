import fs from 'node:fs/promises';
import path from 'node:path';

import type { ProductDTO } from '../types/product';

export const getProducts = async (): Promise<ProductDTO[]> => {
  try {
    const productsBuffer = await fs.readFile(
      path.join(__dirname, '..', '..', 'db', 'products.json')
    );

    const products: ProductDTO[] = JSON.parse(productsBuffer.toString());

    return products;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting products: ${err}`);
  }
};

export const getProduct = async (
  id: string
): Promise<ProductDTO | undefined> => {
  try {
    const products: ProductDTO[] = await getProducts();

    const product = products.find((product) => product.id === id);

    return product;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product: ${err}`);
  }
};
