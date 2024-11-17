import type { ProductGroupDTO } from './product-group';

export interface ProductTypeDTO {
  id: string;
  title: string;
  product_group: string;
  description: string;
}

export interface ProductType {
  id: string;
  title: string;
  productGroup: Partial<Omit<ProductGroupDTO, 'description'>>;
  description: string;
}

export interface NewProductType
  extends Pick<ProductTypeDTO, 'title' | 'description'> {
  productGroup: string;
}
