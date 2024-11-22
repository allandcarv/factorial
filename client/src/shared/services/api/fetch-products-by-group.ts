import { API_BASE_URL } from '../../constants';
import type { Product } from '../../types';

export const fetchProductsByGroup = async (
  groupId: string
): Promise<Product[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/product-groups/${groupId}/products`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const products: Product[] = await response.json();

    return products;
  } catch (err) {
    throw new Error(`Error on Fetching Products: ${err}`);
  }
};
