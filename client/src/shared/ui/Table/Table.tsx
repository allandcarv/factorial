import type { FC, PropsWithChildren, TableHTMLAttributes } from 'react';

import { Header } from './Header/Header';
import { Body } from './Body/Body';
import { Row } from './Row/Row';
import { HeaderCell } from './HeaderCell/HeaderCell';
import { Cell } from './Cell/Cell';
import { Footer } from './Footer/Footer';

import styles from './Table.module.css';

type TableProps = PropsWithChildren<TableHTMLAttributes<HTMLTableElement>>;

const _Table: FC<TableProps> = ({ children, ...tableProps }) => {
  return (
    <table className={styles['table']} {...tableProps}>
      {children}
    </table>
  );
};

export const Table = Object.assign(_Table, {
  Body,
  Header,
  Row,
  HeaderCell,
  Cell,
  Footer,
});
