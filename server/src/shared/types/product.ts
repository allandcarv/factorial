import type { ProductTypeDTO } from './product-type';

export interface ProductDTO {
  id: string;
  title: string;
  product_type: string;
  description: string;
  stock: boolean;
  price: number;
  image_url: string;
}

export interface Product {
  id: string;
  title: string;
  productType: Pick<ProductTypeDTO, 'id' | 'title'>;
  description: string;
  stock: boolean;
  price: number;
  imageUrl: string;
}

export interface NewProduct
  extends Omit<ProductDTO, 'id' | 'product_type' | 'image_url'> {
  imageUrl: string;
  productType: string;
}

export interface UpdateProduct extends Partial<NewProduct> {
  id: string;
}
