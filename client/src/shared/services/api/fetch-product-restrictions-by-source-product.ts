import { API_BASE_URL } from '../../constants';
import type { ProductRestriction } from '../../types';

export const fetchProductRestrictionsBySourceProduct = async (
  productId: string
): Promise<ProductRestriction[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/product-restrictions/source-product/${productId}`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const products: ProductRestriction[] = await response.json();

    return products;
  } catch (err) {
    throw new Error(`Error on Fetching Products: ${err}`);
  }
};
