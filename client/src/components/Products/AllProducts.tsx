import type { FC } from 'react';

import { ProductsList } from './ProductsList/ProductsList';
import { useProducts } from '../../shared/hooks';

export const AllProducts: FC = () => {
  const { products } = useProducts();

  return <ProductsList products={products} />;
};
