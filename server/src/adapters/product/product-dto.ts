import type { NewProduct, ProductDTO } from '../../types/product';
import { uuid } from '../../utils/uuid';

export const productDTOAdapter = (newProduct: NewProduct): ProductDTO => ({
  id: uuid(),
  description: newProduct.description,
  image_url: newProduct.imageUrl,
  price: newProduct.price,
  product_type: newProduct.productType,
  stock: newProduct.stock,
  title: newProduct.title,
});
