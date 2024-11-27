import type { FC } from 'react';
import { Link } from 'react-router';

import styles from './ErrorHeader.module.css';

export const ErrorHeader: FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/" title="Home of My Store">
        <span className={styles.logo}>My Store</span>
      </Link>
    </header>
  );
};
