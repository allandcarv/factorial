import { API_BASE_URL } from '../../constants';

export const fetchRestrictedProductsByProduct = async (
  productId: string
): Promise<string[]> => {
  try {
    const response = await fetch(
      `${API_BASE_URL}/products/${productId}/restricted-products`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const restrictedProducts: string[] = await response.json();

    return restrictedProducts;
  } catch (err) {
    throw new Error(`Error on Fetching Restricted Products: ${err}`);
  }
};
