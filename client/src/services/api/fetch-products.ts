import { API_BASE_URL } from '../../shared/constants';
import type { Product } from '../../types';

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const products: Product[] = await response.json();

    return products;
  } catch (err) {
    throw new Error(`Error on Fetching Products: ${err}`);
  }
};
