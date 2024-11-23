import type { ProductDTO } from '../../shared/types/product';
import { getProducts } from './get-products';

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
