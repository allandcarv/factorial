import type {
  NewProductRestriction,
  ProductRestrictionDTO,
} from '../../shared/types/product-restriction';
import { uuid } from '../../shared/utils/uuid';

/**
 * This adapter is responsible for parsing the product restriction
 * data from type ProductRestriction to ProductRestrictionDTO
 *
 * @param productRestriction - Product Restriction Data
 * @returns Product Restriction Data of type ProductRestrictionDTO
 */
export const productRestrictionDTOAdapter = (
  productRestriction: NewProductRestriction
): ProductRestrictionDTO => ({
  id: uuid(),
  product_group: productRestriction.productGroup,
  source_product: productRestriction.sourceProduct,
  restricted_product: productRestriction.restrictedProduct,
  restricted_type: productRestriction.restrictedType,
});
