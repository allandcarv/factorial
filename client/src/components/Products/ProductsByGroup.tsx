import type { FC } from 'react';

import { useProductsByGroup } from '../../hooks';
import { ProductsList } from './ProductsList/ProductsList';

interface ProductsByGroupProps {
  groupId: string;
}

export const ProductsByGroup: FC<ProductsByGroupProps> = ({ groupId }) => {
  const { productsByGroup } = useProductsByGroup(groupId);

  return <ProductsList products={productsByGroup} />;
};
