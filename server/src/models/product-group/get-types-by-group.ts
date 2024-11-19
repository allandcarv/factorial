import type { ProductTypeDTO } from '../../types/product-type';
import { getProductTypes } from '../product-type';

export const getTypesByGroup = async (
  productGroupId: string
): Promise<ProductTypeDTO[]> => {
  try {
    const productTypes = await getProductTypes();

    const filteredProductTypes = productTypes.filter(
      (productType) => productType.product_group === productGroupId
    );

    return filteredProductTypes;
  } catch (err) {
    console.error(err);
    throw new Error(`Error on Getting Product Types: ${err}`);
  }
};
