import styled from 'styled-components'
import { Link } from "react-router-dom";



export const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 20px;
    > a {
        img {
            max-width: 100%;
            width: 200px;
        }
    }
`
export const HeaderContainerUser = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
`
export const HeaderUserLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    margin-right: 0.5rem;
    font-weight: bold;
    color: #2c3e50;
    gap: 0.3rem;
    & img {
        width: 20px;

    }
`