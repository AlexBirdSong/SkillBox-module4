import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <div className={styles.userLink}>
    <img className={styles.avatar} src="https://hbr-russia.ru/upload/iblock/583/2hrwag1fu5pl5r29wsgbqbnwozekfzke.jpg" alt="" />
    <a href="#user-url" className={styles.username}>Дмитрий Гришин</a>
  </div>
  );
}
