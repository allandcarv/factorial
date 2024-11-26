import type { FC } from 'react';
import { Link } from 'react-router';

import styles from './ErrorPage.module.css';

const ErrorPage: FC = () => {
  return (
    <>
      <header className={styles.header}>
        <Link to="/" title="Home of My Store">
          <span className={styles.logo}>My Store</span>
        </Link>
      </header>
      <main className={styles.main}>
        <p className={styles.message}>
          <strong>Oooops... Something Went Wrong</strong>
        </p>
      </main>
    </>
  );
};

export default ErrorPage;
