import type { Product, ProductDTO } from '../../shared/types/product';
import type { ProductTypeDTO } from '../../shared/types/product-type';

export const productAdapter = (
  product: ProductDTO,
  productType: ProductTypeDTO
): Product => ({
  id: product.id,
  description: product.description,
  imageUrl: product.image_url,
  price: product.price,
  productType: {
    id: productType.id,
    title: productType.title,
  },
  stock: product.stock,
  title: product.title,
});
