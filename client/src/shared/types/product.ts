import type { ProductType } from './product-type';

export interface Product {
  id: string;
  title: string;
  productType: Pick<ProductType, 'id' | 'title'>;
  description: string;
  stock: boolean;
  price: number;
  imageUrl: string;
}
