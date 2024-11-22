import type { FC } from 'react';

import { useGroups } from '../../hooks';

import styles from './Header.module.css';

export const Header: FC = () => {
  const { data } = useGroups();

  return (
    <header className={styles.header}>
      <span className={styles.logo}>My Store</span>
      <nav>
        <ul className={styles.menu}>
          {data.map((productGroup) => (
            <li key={productGroup.id}>{productGroup.title}</li>
          ))}
          <li style={{ position: 'relative' }}>
            <span className="material-symbols-outlined">shopping_cart</span>
            <span className={styles['products-count']}>1</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};
