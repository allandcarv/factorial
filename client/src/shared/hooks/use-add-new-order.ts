import { useMutation } from '@tanstack/react-query';

import { useAppStore } from '../store/hooks';
import type { NewOrder } from '../types';
import { addOrder } from '../services/api';

const DUMMY_USER = '52876099-e530-4ba3-834b-8bfb9301fe96';

export const useAddNewOrder = () => {
  const mutation = useMutation({
    mutationFn: (newOrder: NewOrder) => addOrder(newOrder),
  });

  const selectedProducts = useAppStore((store) => store.selectedProducts);
  const resetRestrictedProducts = useAppStore(
    (store) => store.resetRestrictedProducts
  );
  const resetProductsState = useAppStore((store) => store.resetProductsState);

  const onAddOrder = () => {
    mutation.mutate({
      products: [...selectedProducts],
      user: DUMMY_USER,
    });

    if (mutation.isSuccess) {
      resetRestrictedProducts();
      resetProductsState();
    }
  };

  return { isLoading: mutation.isPending, onAddOrder };
};
