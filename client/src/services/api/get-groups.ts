import { API_BASE_URL } from '../../shared/constants';
import type { ProductGroups } from '../../types';

export const getGroups = async (): Promise<ProductGroups[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/product-groups`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const productGroups: ProductGroups[] = await response.json();

    return productGroups;
  } catch (err) {
    throw new Error(`Error on Fetching Product Groups: ${err}`);
  }
};
