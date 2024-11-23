import type { ProductGroupDTO } from '../../shared/types/product-group';
import { getProductType } from '../product-type';
import { getProductGroup } from './get-product-group';

export const getProductGroupByType = async (
  productTypeId: string
): Promise<ProductGroupDTO> => {
  try {
    const productType = await getProductType(productTypeId);

    if (!productType) {
      throw new Error('Product Type Not Found');
    }

    const productGroup = await getProductGroup(productType.product_group);

    if (!productGroup) {
      throw new Error('Product Group Not Found');
    }

    return productGroup;
  } catch (err) {
    console.error(err);

    throw new Error(`Error on Getting Product Group By Type: ${err}`);
  }
};
