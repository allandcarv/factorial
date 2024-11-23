import type { ProductTypeDTO } from '../../shared/types/product-type';
import { getProductTypes } from './get-product-types';

export const getProductType = async (
  id: string
): Promise<ProductTypeDTO | undefined> => {
  try {
    const productTypes = await getProductTypes();

    const productType = productTypes.find(
      (productType) => productType.id === id
    );

    return productType;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on getting product type: ${err}`);
  }
};
