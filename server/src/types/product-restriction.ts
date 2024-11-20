export interface ProductRestrictionDTO {
  id: string;
  product_group: string;
  source_product: string;
  restricted_type: string;
  restricted_product: string;
}

export interface ProductRestriction {
  id: string;
  productGroup: string;
  sourceProduct: string;
  restrictedType: string;
  restrictedProduct: string;
}

export type NewProductRestriction = Omit<ProductRestriction, 'id'>;
