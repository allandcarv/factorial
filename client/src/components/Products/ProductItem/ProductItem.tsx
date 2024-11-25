import type { FC } from 'react';

import type { Product } from '../../../shared/types';

import { useOnClickProduct, useProductState } from '../../../shared/hooks';
import { formatCurrency } from '../../../shared/utils';

import styles from './ProductItem.module.css';

interface ProductItemProps {
  product: Product;
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  const { onClickItemHandler } = useOnClickProduct();
  const { isProductDisabled } = useProductState(product);

  return (
    <li
      className={`${styles['product-item']} ${
        isProductDisabled ? styles['product-item-disabled'] : ''
      }`}
      onClick={() => !isProductDisabled && onClickItemHandler(product)}
    >
      <section className={styles['product-section']}>
        <img
          src={product.imageUrl}
          alt={product.title}
          loading="lazy"
          className={styles['product-img']}
        />
      </section>
      <section className={styles['product-section']}>
        <p className={styles['product-title']}>{product.title}</p>
        <strong>{formatCurrency(product.price)}</strong>
      </section>
    </li>
  );
};
