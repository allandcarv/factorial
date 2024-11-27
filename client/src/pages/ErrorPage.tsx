import type { FC } from 'react';

import { ErrorHeader } from '../components/ErrorHeader/ErrorHeader';
import { ErrorBody } from '../components/ErrorBody/ErrorBody';

const ErrorPage: FC = () => {
  return (
    <>
      <ErrorHeader />
      <ErrorBody />
    </>
  );
};

export default ErrorPage;
