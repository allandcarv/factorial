import { useSuspenseQuery } from '@tanstack/react-query';

import { fetchGroups } from '../services/api';

export const useGroups = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['groups'],
    queryFn: fetchGroups,
  });

  return {
    groups: data,
  };
};
