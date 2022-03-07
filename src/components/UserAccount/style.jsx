import styled from 'styled-components'

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
    @media (min-width: 720px) {
        flex-direction: row;
    }
    .cta {
        @media (min-width: 720px) {
            flex: 0;
        }
        > button {
            width: 100%;
            margin-top: 1rem;
            @media (min-width: 720px) {
                width: 200px;
            }
        }
    }
`
export const MainAccountContentWrapper = styled.div`
    width: 100%;
    // flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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