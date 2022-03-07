import React from 'react';

import * as Style from "./style";
import MainHero from "../../components/MainHero";
import MainFeature from "../../components/MainFeature";


export default function Main(props) {
    return (
        <Style.MainContent>
            <MainHero />
            <MainFeature />
        </Style.MainContent>
    );
}