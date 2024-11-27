import type { FC } from 'react';

import { ProductsList } from '../ProductsList/ProductsList';

import {
  useProductsByGroup,
  useSplitProductsByType,
} from '../../../shared/hooks';
import { useAppStore } from '../../../shared/store/hooks';
import { Loading } from '../../Loading/Loading';
import { ErrorBody } from '../../ErrorBody/ErrorBody';

import styles from './ProductsByGroup.module.css';

interface ProductsByGroupProps {
  groupId: string;
}

export const ProductsByGroup: FC<ProductsByGroupProps> = ({ groupId }) => {
  const { productsByGroup } = useProductsByGroup(groupId);
  const splittedProducts = useSplitProductsByType(productsByGroup);
  const isError = useAppStore((store) => store.isError);
  const isLoading = useAppStore((store) => store.isLoading);

  if (isError) {
    return <ErrorBody />;
  }

  return (
    <>
      {isLoading && <Loading />}
      <section className={styles['products-container']}>
        {splittedProducts.map((products) => (
          <article key={products[0].productType.id}>
            <h2>{products[0].productType.title}</h2>
            <ProductsList products={products} />
          </article>
        ))}
      </section>
    </>
  );
};
