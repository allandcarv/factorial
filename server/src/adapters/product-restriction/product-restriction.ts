import type {
  ProductRestriction,
  ProductRestrictionDTO,
} from '../../shared/types/product-restriction';

/**
 * This adapter is responsible for parsing the product restriction
 * data from type ProductRestrictionDTO to ProductRestriction
 *
 * @param productRestriction - Product Restriction Data
 * @returns Product Restriction Data of type ProductRestriction
 */
export const productRestrictionAdapter = (
  productRestriction: ProductRestrictionDTO
): ProductRestriction => ({
  id: productRestriction.id,
  productGroup: productRestriction.product_group,
  sourceProduct: productRestriction.source_product,
  restrictedProduct: productRestriction.restricted_product,
  restrictedType: productRestriction.restricted_type,
});
