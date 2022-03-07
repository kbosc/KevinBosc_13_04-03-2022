import styled from 'styled-components'

export const MainSectionFeatures = styled.section`
display: flex;
flex-direction: column;
    @media (min-width: 920px) {
        flex-direction: row;
    }
`
export const MainSectionFeaturesItem = styled.div`
    flex: 1;
    padding: 2.5rem;
    > img {
        width: 100px;
        border: 10px solid ${props => props.theme.colors.secondary};
        border-radius: 50%;
        padding: 1rem;
    }
    > h3 {
        color: #222;
        font-size: 1.25rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
    }
`