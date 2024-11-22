import { API_BASE_URL } from '../../constants';
import type { ProductGroup } from '../../types';

export const fetchGroups = async (): Promise<ProductGroup[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/product-groups`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const productGroups: ProductGroup[] = await response.json();

    return productGroups;
  } catch (err) {
    throw new Error(`Error on Fetching Product Groups: ${err}`);
  }
};
