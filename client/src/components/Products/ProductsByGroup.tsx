import type { FC } from 'react';

import { useProductsByGroup } from '../../hooks';

interface ProductsByGroupProps {
  groupId: string;
}

export const ProductsByGroup: FC<ProductsByGroupProps> = ({ groupId }) => {
  const { productsByGroup } = useProductsByGroup(groupId);
  console.log('🚀 ~ productsByGroup:', productsByGroup);

  return null;
};
