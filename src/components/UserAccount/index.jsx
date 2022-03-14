import React from 'react';
import * as Style from "./style"
import { Button } from "../../utils/style/theme"

export default function UserAccount(props) {
    return (
        <div>
        <Style.MainAccount>
                <Style.MainAccountContentWrapper>
                    <Style.AccountTitle>Argent Bank Checking (x8349)</Style.AccountTitle>
                    <Style.AccountAmount>$2,082.79</Style.AccountAmount>
                    <Style.AccountAmountDescription>Available Balance</Style.AccountAmountDescription>
                </Style.MainAccountContentWrapper>
                <Style.MainAccountContentWrapper className='cta'>
                    <Button>View transactions</Button>
                </Style.MainAccountContentWrapper>
        </Style.MainAccount>
        <Style.MainAccount>
                <Style.MainAccountContentWrapper>
                    <Style.AccountTitle>Argent Bank Checking (x6712)</Style.AccountTitle>
                    <Style.AccountAmount>$10,928.42</Style.AccountAmount>
                    <Style.AccountAmountDescription>Available Balance</Style.AccountAmountDescription>
                </Style.MainAccountContentWrapper>
                <Style.MainAccountContentWrapper className='cta'>
                    <Button>View transactions</Button>
                </Style.MainAccountContentWrapper>
        </Style.MainAccount>
        <Style.MainAccount>
                <Style.MainAccountContentWrapper>
                    <Style.AccountTitle>Argent Bank Checking (x8349)</Style.AccountTitle>
                    <Style.AccountAmount>$184.30</Style.AccountAmount>
                    <Style.AccountAmountDescription>Available Balance</Style.AccountAmountDescription>
                </Style.MainAccountContentWrapper>
                <Style.MainAccountContentWrapper className='cta'>
                    <Button>View transactions</Button>
                </Style.MainAccountContentWrapper>
        </Style.MainAccount>
        </div>
    );
}