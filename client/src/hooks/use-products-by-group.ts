import { useSuspenseQuery } from '@tanstack/react-query';

import { fetchProductsByGroup } from '../services/api';

export const useProductsByGroup = (groupId: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ['products', 'group', groupId],
    queryFn: () => fetchProductsByGroup(groupId),
  });

  return {
    productsByGroup: data,
  };
};
