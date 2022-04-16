import React, { Children } from 'react';
import styles from './layout.css';

interface ILoyoutProps{
  children?: React.ReactNode;
}

export function Layout({children}:ILoyoutProps) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
