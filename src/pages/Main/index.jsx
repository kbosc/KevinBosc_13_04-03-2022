import React from 'react';

import MainFeature from "../../components/MainFeature";
import MainHero from "../../components/MainHero";
import * as Style from "./style";

export default function Main(props) {  
    return (
        <Style.MainContent>
            <MainHero />
            <MainFeature />
        </Style.MainContent>
    );
}