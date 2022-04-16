import React from 'react';
import { CreatedAt } from './CreatedAt';
import styles from './metadata.css';
import { UserLink } from './UserLink';

export function MetaData() {
  return (
    <div className={styles.metaData}>
    <UserLink/>
    <CreatedAt/>
  </div>
  );
}
