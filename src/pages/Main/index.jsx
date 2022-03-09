import React from 'react';

import * as Style from "./style";
import MainHero from "../../components/MainHero";
import MainFeature from "../../components/MainFeature";
import { useFetch } from '../../utils/hooks'


export default function Main(props) {
    // const { data, isLoading, error } = useFetch(
    //     `http://localhost:3001/api/v2/user/profile`
    //   )
    //   if (error) {
    //     return <span>Oups, il y a une erreur</span>
    //   }
    //   console.log(data);
    return (
        <Style.MainContent>
            <MainHero />
            <MainFeature />
        </Style.MainContent>
    );
}