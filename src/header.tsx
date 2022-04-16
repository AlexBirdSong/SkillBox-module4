import './main.global.css'
import {hot} from 'react-hot-loader/root';
import * as React from 'react';
import styles from  './header.css';
import { SearchBlock } from '../Header/SearchBlock';
import { ThreadTitle } from '../Header/ThreadTitle';
import { SortBlock } from '../Header/SortBlock';

export function Header(){
    return(
        <header className={styles.Header}>
           <SearchBlock/>
           <ThreadTitle/>
           <SortBlock/>
        </header>
    )
}