import type { FC } from 'react';

import { useOnClickItemAllProducts, useProducts } from '../../hooks';
import { ProductsList } from './ProductsList/ProductsList';

export const AllProducts: FC = () => {
  const { products } = useProducts();
  const { onClickItemHandler } = useOnClickItemAllProducts();

  return <ProductsList products={products} onClickItem={onClickItemHandler} />;
};
