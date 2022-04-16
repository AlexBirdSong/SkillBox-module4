import './main.global.css';
import React from "react";
import {hot} from 'react-hot-loader/root';
import {Layout} from '../Layout';
import { Content } from '../Content';
import { Header } from '../Header';
import { CardsList } from '../CardsList';
function AppComponent(){
    return(
        <Layout>
            <Header/>
            <Content>
                <CardsList/>
            </Content>
        </Layout>
    );
}

export const App = hot(AppComponent);