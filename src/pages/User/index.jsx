import React from 'react';
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
                <Style.MainHeaderButton>Edit Name</Style.MainHeaderButton>
            </Style.MainHeader>
            <Style.MainAccount>
                <Style.MainAccountContentWrapper>
                    <Style.AccountTitle class="account-title">Argent Bank Checking (x8349)</Style.AccountTitle>
                    <Style.AccountAmount class="account-amount">$2,082.79</Style.AccountAmount>
                    <Style.AccountAmountDescription class="account-amount-description">Available Balance</Style.AccountAmountDescription>
                </Style.MainAccountContentWrapper>
                <Style.MainAccountContentWrapper>
                    <Style.AccountTitle class="account-title">Argent Bank Checking (x8349)</Style.AccountTitle>
                    <Style.AccountAmount class="account-amount">$2,082.79</Style.AccountAmount>
                    <Style.AccountAmountDescription class="account-amount-description">Available Balance</Style.AccountAmountDescription>
                </Style.MainAccountContentWrapper>
                <Style.MainAccountContentWrapper>
                    <Style.AccountTitle class="account-title">Argent Bank Checking (x8349)</Style.AccountTitle>
                    <Style.AccountAmount class="account-amount">$2,082.79</Style.AccountAmount>
                    <Style.AccountAmountDescription class="account-amount-description">Available Balance</Style.AccountAmountDescription>
                </Style.MainAccountContentWrapper>
            </Style.MainAccount>
        </Style.MainContent>
    );
}