import { API_BASE_URL } from '../../shared/constants';
import type { ProductGroup, ProductType } from '../../types';

export const fetchGroupByType = async (
  typeId: string
): Promise<Omit<ProductGroup, 'description'>> => {
  try {
    const response = await fetch(`${API_BASE_URL}/product-types/${typeId}`);

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const productType: ProductType = await response.json();

    return productType.productGroup;
  } catch (err) {
    throw new Error(`Error on Fetching Products: ${err}`);
  }
};
