import type { FC } from 'react';

import { ProductsList } from '../ProductsList/ProductsList';

import {
  useProductsByGroup,
  useSplitProductsByType,
} from '../../../shared/hooks';
import { useAppStore } from '../../../shared/store/hooks';

import styles from './ProductsByGroup.module.css';
import { Loading } from '../../Loading/Loading';

interface ProductsByGroupProps {
  groupId: string;
}

export const ProductsByGroup: FC<ProductsByGroupProps> = ({ groupId }) => {
  const { productsByGroup } = useProductsByGroup(groupId);
  const splittedProducts = useSplitProductsByType(productsByGroup);

  const isLoading = useAppStore((state) => state.isLoading);

  return (
    <section className={styles['products-container']}>
      {isLoading && <Loading />}
      {splittedProducts.map((products) => (
        <article key={products[0].productType.id}>
          <h2>{products[0].productType.title}</h2>
          <ProductsList products={products} />
        </article>
      ))}
    </section>
  );
};
