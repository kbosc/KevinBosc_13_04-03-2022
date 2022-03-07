import styled from 'styled-components'
import imageBank from "../../assets/bank-tree.jpeg"

export const MainContent = styled.main`
    // background-color: ${props => props.theme.colors.backgroundDark};
`
export const MainHero = styled.div`
    background-image: url(${ imageBank });
    background-position: 0 -100px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 300px;
    position: relative;
    @media (min-width: 920px) {
        height: 400px;
        background-position: 0% 33%;
    }
`
export const MainSection = styled.section`
    position: relative;
    top: 2rem;
    width: 200px;
    background: white;
    padding: 2rem;
    text-align: left;
    margin: 0 auto;
    @media (min-width: 920px) {
        position: absolute;
        top: 50px;
        right: 50px;
        width: 300px;
        margin: 2rem;
    }
`
export const MainSectionSubtitle = styled.p`
    text-align: left;
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
    @media (min-width: 920px) {
        font-size: 1.5rem;
    }
`
export const MainSectionText = styled.p`
    text-align: left;
    margin-bottom: 0;
    font-size: 0.9rem;
    margin-top: 1rem;
    @media (min-width: 920px) {
        font-size: 1.2rem;
    }
`
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