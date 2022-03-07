import React from 'react';

import UserAccount from '../../components/UserAccount/index';
import { Button } from "../../utils/style/theme"
import * as Style from "./style"

export default function Main(props) {
    return (
        <Style.MainContent>
            <Style.MainHeader>
                <h1>
                    Welcome back
                    <br />
                    Tony Jarvis
                </h1>
                <Button>Edit Name</Button>
            </Style.MainHeader>
            <UserAccount />            
        </Style.MainContent>
    );
}