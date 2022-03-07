import styled from 'styled-components'

export const ThemeDefault = {
  colors: {
    text: "#2c3e50",
    primary: '#42b983',
    secondary: '#00bc77',
    backgroundDark: "#12002b"
  },
  fontSize: {
    title: "18px",
    paragraph: "12px",
  },
}

export const Button = styled.button`
  border-color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  font-weight: bold;
  padding: 10px;
  display: inline-block;
  cursor: default;
  border-width: 2px;
  border-style: outset;
  color: -internal-light-dark(black, white);
  background-color: -internal-light-dark(rgb(239, 239, 239), rgb(59, 59, 59));
  border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
  &:active{
    border-style: inset;
  }
`