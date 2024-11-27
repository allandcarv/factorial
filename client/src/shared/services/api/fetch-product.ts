import { API_BASE_URL } from '../../constants';
import type { Product } from '../../types';

export const fetchProduct = async (productId: string): Promise<Product> => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${productId}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const product: Product = await response.json();

    return product;
  } catch (err) {
    throw new Error(`Error on Getting Product: ${err}`);
  }
};
