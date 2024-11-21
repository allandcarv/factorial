import type { ProductTypeDTO } from './product-type';

export interface ProductDTO {
  id: string;
  title: string;
  product_type: string;
  description: string;
  stock: boolean;
  price: number;
}

export interface Product {
  id: string;
  title: string;
  productType: Pick<ProductTypeDTO, 'id' | 'title'>;
  description: string;
  stock: boolean;
  price: number;
}

export interface NewProduct extends Omit<ProductDTO, 'id' | 'product_type'> {
  productType: string;
}

export interface UpdateProduct extends Partial<NewProduct> {
  id: string;
}
