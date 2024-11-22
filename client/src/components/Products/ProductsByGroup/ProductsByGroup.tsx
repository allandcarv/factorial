import type { FC } from 'react';

import { ProductsList } from '../ProductsList/ProductsList';

import styles from './ProductsByGroup.module.css';
import {
  useProductsByGroup,
  useSplitProductsByType,
} from '../../../shared/hooks';

interface ProductsByGroupProps {
  groupId: string;
}

export const ProductsByGroup: FC<ProductsByGroupProps> = ({ groupId }) => {
  const { productsByGroup } = useProductsByGroup(groupId);
  const splittedProducts = useSplitProductsByType(productsByGroup);

  return (
    <section className={styles['products-container']}>
      {splittedProducts.map((products) => (
        <article key={products[0].productType.id}>
          <h2>{products[0].productType.title}</h2>
          <ProductsList products={products} />
        </article>
      ))}
    </section>
  );
};
