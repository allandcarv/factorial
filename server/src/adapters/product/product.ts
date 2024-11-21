import type { Product, ProductDTO } from '../../types/product';
import type { ProductTypeDTO } from '../../types/product-type';

export const productAdapter = (
  product: ProductDTO,
  productType: ProductTypeDTO
): Product => ({
  id: product.id,
  description: product.description,
  productType: {
    id: productType.id,
    title: productType.title,
  },
  stock: product.stock,
  title: product.title,
});
