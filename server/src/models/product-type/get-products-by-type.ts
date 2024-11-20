import type { ProductDTO } from '../../types/product';
import { getProducts } from '../product/get-products';

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