import type { ProductGroupDTO } from '../../types/product-group';
import { getProductGroups } from './get-product-groups';

export const getProductGroup = async (
  id: string
): Promise<ProductGroupDTO | undefined> => {
  try {
    const productGroups = await getProductGroups();

    const productGroup = productGroups.find(
      (productGroup) => productGroup.id === id
    );

    return productGroup;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product group: ${err}`);
  }
};
