import type {
  NewProductGroup,
  ProductGroupDTO,
} from '../../shared/types/product-group';

import { uuid } from '../../shared/utils/uuid';

export const productGroupDTOAdapter = (
  productGroup: NewProductGroup
): ProductGroupDTO => ({
  id: uuid(),
  description: productGroup.description,
  title: productGroup.title,
});
