import styled from 'styled-components'

export const MainContent = styled.main`
    background-color: ${props => props.theme.colors.backgroundDark};
    display: block;
    flex: 1;
`
export const MainHeader = styled.div`
    > h1 {
        color: white;
        margin-bottom: 2rem;
    }
`
export const MainHeaderButton = styled.div`
    border-color: ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.secondary};
    color: white;
    font-weight: bold;
    padding: 10px;
    color: -internal-light-dark(black, white);
    display: inline-block;
    cursor: default;
    background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
    padding: 1px 6px;
    border-width: 2px;
    border-style: outset;
    border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
`
export const MainAccount = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    background-color: #fff;
    width: 80%;
    margin: 0 auto;
    flex-direction: column;
    padding: 1.5rem;
    box-sizing: border-box;
    text-align: left;
    margin-bottom: 2rem;
`
export const MainAccountContentWrapper = styled.div`
    width: 100%;
    flex: 1;
`
export const AccountTitle = styled.h3`
    margin: 0;
    padding: 0;
    font-size: 1rem;
    font-weight: normal;
`
export const AccountAmount = styled.p`
    margin: 0;
    font-size: 2.5rem;
    font-weight: bold;
`
export const AccountAmountDescription = styled.p`
    margin: 0;
`