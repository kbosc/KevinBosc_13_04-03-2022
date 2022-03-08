import styled from 'styled-components'

export const MainHeader = styled.div`
    margin-bottom: 2rem;
    > h1 {
        padding: 2rem;
        color: white;
    }
`
export const ContainerModify = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    input {
        text-align: left;
        padding: 0.5rem;
        border-radius: 5px;
        border: 1px solid grey;
    }
`
export const ContainerSave = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
`
export const ContainerCancel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
`
