import type { Product } from '../types';

export const useSplitProductsByType = (products: Product[]) => {
  const result: Record<string, Product[]> = {};

  products.forEach((product) => {
    if (result[product.productType.id]) {
      result[product.productType.id].push(product);
    } else {
      result[product.productType.id] = [product];
    }
  });

  return Object.values(result);
};
