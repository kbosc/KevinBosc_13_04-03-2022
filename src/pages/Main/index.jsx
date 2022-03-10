import React from 'react';


import * as Style from "./style";
import MainHero from "../../components/MainHero";
import MainFeature from "../../components/MainFeature";
// import { useFetch } from '../../utils/hooks'

export default function Main(props) {
    // const { data, isLoading, error } = useFetch(
    //     `${process.env.REACT_APP_API_URL}/user/profile`
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