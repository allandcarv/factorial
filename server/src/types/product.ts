import type { ProductTypeDTO } from './product-type';

export interface ProductDTO {
  id: string;
  title: string;
  product_type: string;
  description: string;
  stock: boolean;
}

export interface Product {
  id: string;
  title: string;
  productType: Pick<ProductTypeDTO, 'id' | 'title'>;
  description: string;
  stock: boolean;
}

export interface NewProduct
  extends Pick<ProductDTO, 'description' | 'stock' | 'title'> {
  productType: string;
}

export interface UpdateProduct extends Partial<NewProduct> {
  id: string;
}
