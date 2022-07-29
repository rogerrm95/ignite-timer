import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${(props) => props.theme['gray-900']};
        color: ${(props) => props.theme['gray-300']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-size: 1rem; 
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }

    button {
        border: none;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']} ;
    }
`
