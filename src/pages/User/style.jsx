import styled from 'styled-components'

export const MainContent = styled.main`
    background-color: ${props => props.theme.colors.backgroundDark};
    display: block;
    flex: 1;
    height: 80vh;
`
export const MainHeader = styled.div`
    margin-bottom: 2rem;
    > h1 {
        padding: 2rem;
        color: white;
    }
`