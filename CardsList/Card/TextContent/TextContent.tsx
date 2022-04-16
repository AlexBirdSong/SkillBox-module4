import React from 'react';
import { MetaData } from './MetaData';
import styles from './textcontent.css';


export function TextContent() {
  return (
    <div className={styles.textContent}>
      <MetaData/>
          <h2 className={styles.title}>
            <a href="#post-url" className={styles.postLink}>Реплицированные с зарубежных источников возможности </a>
         </h2>
        
      </div>
  );
}
