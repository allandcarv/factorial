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
            <span className="material-symbols-outlined">shopping_cart</span>
            {!!selectedProducts.length && (
              <span className={styles['products-count']}>
                {selectedProducts.length}
              </span>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
};
