import type { ProductDTO } from '../../shared/types/product';
import { getProducts } from '../product';

export const getProductsByType = async (
  productTypeId: string
): Promise<ProductDTO[]> => {
  try {
    const products = await getProducts();

    const filteredProducts = products.filter(
      (product) => product.product_type === productTypeId
    );

    return filteredProducts;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on Getting Products By Type: ${err}`);
  }
};
