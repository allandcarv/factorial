import type { ProductGroup } from './product-group';

export interface ProductType {
  id: string;
  title: string;
  productGroup: Omit<ProductGroup, 'description'>;
  description: string;
}
