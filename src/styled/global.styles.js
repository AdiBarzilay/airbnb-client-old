import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    html, body,#root{
            height: 100%;
            background-color: #fff;
    }
    html{
        font-family: 'Roboto', sans-serif;
        font-size: 10px;
        font-weight: 300;
        color: #484848;
    }
    *{
        margin: 0;
        padding: 0;
        border:none;
        outline:none;
        box-sizing: border-box;
        text-decoration:none;
    }
`

export default GlobalStyle