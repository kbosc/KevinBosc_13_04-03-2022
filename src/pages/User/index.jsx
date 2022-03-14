import { useNavigate } from "react-router";
import { useSelector } from "react-redux"
import React, { useEffect } from 'react';

import UserAccount from '../../components/UserAccount/index';
import UserHeader from "../../components/UserHeader/index"
import * as Style from "./style"

export default function Main() {
    const navigate = useNavigate();
    const userData = useSelector(state => state.user)
    useEffect(() => {
        if (!userData.isLogged) {
            return navigate("/login", { replace: true });
        }
    })
    return (
        <Style.MainContent>
            <UserHeader />
            <UserAccount />            
        </Style.MainContent>
    );
}