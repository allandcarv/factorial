import type { ProductGroupDTO } from '../../types/product-group';
import type { ProductType, ProductTypeDTO } from '../../types/product-type';

export const productTypeAdapter = (
  productType: ProductTypeDTO,
  productGroup: ProductGroupDTO
): ProductType => ({
  id: productType.id,
  description: productType.description,
  productGroup: {
    id: productGroup.id,
    title: productGroup.title,
  },
  title: productType.title,
});
