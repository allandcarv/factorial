import type {
  NewProductType,
  ProductTypeDTO,
} from '../../shared/types/product-type';
import { uuid } from '../../shared/utils/uuid';

export const productTypeDTOAdapter = (
  productType: NewProductType
): ProductTypeDTO => ({
  id: uuid(),
  description: productType.description,
  product_group: productType.productGroup,
  title: productType.title,
});
