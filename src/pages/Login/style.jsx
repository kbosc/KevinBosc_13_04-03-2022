import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const MainContent = styled.main`
    background-color: ${props => props.theme.colors.backgroundDark};
    flex: 1;
    display: block;
    padding-top: 1rem;
    height: 80vh;
`
export const MainContentSection = styled.section`
    box-sizing: border-box;
    background-color: white;
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
    padding: 2rem;
    display: block;
    > img {
        display: inline-block;
        width: 20px;
    }
    > h1 {

    }
`
export const MainContentForm = styled.div`
    display: block;
    margin-top: 0em;
`
export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    > label {
        text-align: left;
        font-weight: bold;
    }
    > input {
        text-align: left;
        padding: 5px;
        font-size: 1.2rem;
        border: 1px solid black;
        // &: selected {
        //     background-color: -internal-light-dark(rgb(232, 240, 254), rgba(70, 90, 126, 0.4)) !important;
        //     color: -internal-light-dark(black, white) !important;
        // }
    }
`
export const InputRemember = styled.div`
    display: flex;
    > input {
        margin: 3px 3px 3px 4px;
    }
    > label {
        margin-left: 0.25rem;
    }

`
export const FormSignInLink = styled.button`
    display: block;
    width: 100%;
    padding: 8px;
    font-size: 1.1rem;
    font-weight: bold;
    margin-top: 1rem;
    border-color: ${props => props.theme.colors.secondary};
    background-color: ${props => props.theme.colors.secondary};
    color: white;
`