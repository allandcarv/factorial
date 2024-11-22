import { useSuspenseQuery } from '@tanstack/react-query';

import { getGroups } from '../services/api';

export const useGroups = () => {
  const { data, isLoading, isError } = useSuspenseQuery({
    queryKey: ['groups'],
    queryFn: getGroups,
  });

  return {
    data,
    isError,
    isLoading,
  };
};
