import type { FC } from 'react';

import { useProducts } from '../../hooks';

export const AllProducts: FC = () => {
  const { products } = useProducts();
  console.log('🚀 ~ AllProducts ~ products:', products);

  return null;
};
