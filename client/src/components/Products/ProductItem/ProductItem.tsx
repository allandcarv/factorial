import type { FC } from 'react';

import type { Product } from '../../../types';

import styles from './ProductItem.module.css';

interface ProductItemProps {
  product: Product;
}

export const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <li className={styles['product-item']}>
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
        <strong>
          {Intl.NumberFormat('es-ES', {
            style: 'currency',
            currency: 'EUR',
          }).format(product.price)}
        </strong>
      </section>
    </li>
  );
};