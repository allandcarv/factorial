import type { FC } from 'react';

import type { Product } from '../../../shared/types';
import { ProductItem } from '../ProductItem/ProductItem';

import styles from './ProductsList.module.css';

interface ProductsListProps {
  products: Product[];
}

export const ProductsList: FC<ProductsListProps> = ({ products }) => {
  return (
    <ul className={styles['products-list']}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
};
