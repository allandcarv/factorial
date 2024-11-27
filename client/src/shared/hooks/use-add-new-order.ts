import { useMutation } from '@tanstack/react-query';

import { useAppStore } from '../store/hooks';
import type { NewOrder } from '../types';
import { addOrder as addOrderService } from '../services/api';
import { useCallback } from 'react';
import { useNavigate } from 'react-router';

const DUMMY_USER = '52876099-e530-4ba3-834b-8bfb9301fe96';

export const useAddNewOrder = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (newOrder: NewOrder) => addOrderService(newOrder),
    onSuccess: (data) => {
      resetProductsState();
      resetRestrictedProducts();
      navigate(`/order?id=${data.id}`);
    },
  });

  const { resetProductsState, resetRestrictedProducts } = useAppStore();

  const selectedProducts = useAppStore((store) => store.selectedProducts);

  const addOrder = useCallback(() => {
    mutation.mutate({
      products: [...selectedProducts],
      user: DUMMY_USER,
    });
  }, [mutation, selectedProducts]);

  return {
    isLoading: mutation.isPending,
    isSuccess: mutation.isSuccess,
    addOrder,
  };
};
