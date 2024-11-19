export interface ProductRestrictionDTO {
  id: string;
  source_product: string;
  restricted_type: string;
  restricted_product: string;
}

export interface ProductRestriction {
  id: string;
  sourceProduct: string;
  restrictedType: string;
  restrictedProduct: string;
}

export type NewProductRestriction = Omit<ProductRestriction, 'id'>;
