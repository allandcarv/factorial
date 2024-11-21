import type {
  NewProductGroup,
  ProductGroupDTO,
} from '../../types/product-group';

import { uuid } from '../../utils/uuid';

export const productGroupDTOAdapter = (
  productGroup: NewProductGroup
): ProductGroupDTO => ({
  id: uuid(),
  description: productGroup.description,
  title: productGroup.title,
});
