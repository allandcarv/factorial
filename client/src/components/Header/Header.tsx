import type { FC } from 'react';
import { Link, NavLink } from 'react-router';

import { QUERY_PARAMS } from '../../shared/constants';

import { useGroups } from '../../shared/hooks';
import { useAppStore } from '../../shared/store/hooks';

import styles from './Header.module.css';

export const Header: FC = () => {
  const { groups } = useGroups();
  const selectedProducts = useAppStore((state) => state.selectedProducts);

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.link} title="Home of My Store">
        <span className={styles.logo}>My Store</span>
      </Link>
      <nav>
        <ul className={styles.menu}>
          {groups.map((productGroup) => (
            <li key={productGroup.id}>
              <NavLink
                to={`products?${QUERY_PARAMS.Group}=${productGroup.id}`}
                className={({ isActive }) =>
                  isActive ? styles['active-link'] : ''
                }
              >
                {productGroup.title}
              </NavLink>
            </li>
          ))}
          <li style={{ position: 'relative' }}>
            <NavLink
              to="checkout"
              title="Go to My Checkout"
              className={({ isActive }) =>
                isActive ? styles['active-link'] : ''
              }
            >
              <span
                className={`material-symbols-outlined ${styles['icon-link']}`}
              >
                shopping_cart
              </span>
              {!!selectedProducts.size && (
                <span className={styles['products-count']}>
                  {selectedProducts.size}
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
