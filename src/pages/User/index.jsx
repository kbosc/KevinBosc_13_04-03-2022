import React from 'react';

import UserAccount from '../../components/UserAccount/index';
import UserHeader from "../../components/UserHeader/index"
import * as Style from "./style"

export default function Main(props) {
    return (
        <Style.MainContent>
            <UserHeader />
            <UserAccount />            
        </Style.MainContent>
    );
}