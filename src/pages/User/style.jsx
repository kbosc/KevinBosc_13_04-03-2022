import styled from 'styled-components'

export const MainContent = styled.main`
    background-color: ${props => props.theme.colors.backgroundDark};
    display: block;
    flex: 1;
    height: 80vh;
    @media (max-width: 920px) {
        height: 100vh;
    }
`