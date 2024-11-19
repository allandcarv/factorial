import type { ProductDTO } from '../../types/product';
import { getProductsByType } from '../product-type';
import { getTypesByGroup } from './get-types-by-group';

export const getProductsByGroup = async (
  productGroupId: string
): Promise<ProductDTO[]> => {
  try {
    const productTypesByGroup = await getTypesByGroup(productGroupId);
    const products: ProductDTO[] = [];

    for (const productType of productTypesByGroup) {
      const productsByType = await getProductsByType(productType.id);

      products.push(...productsByType);
    }

    return products;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on Getting Products By Group: ${err}`);
  }
};
