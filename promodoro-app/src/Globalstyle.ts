import theme from "./theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --primary:${theme.palette.primary.main};
        --secondary-color:${theme.palette.secondary.main};
        --text-primary-color:${theme.palette.text.primary};
        --text-secondary-color:${theme.palette.text.secondary};
        --font-regular: 1rem;
        --font-small: 0.8rem;
    }

    *{
        margin:0;
        padding: 0;
        text-decoration: none;
        list-style:none;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    html, body, #root {
        height: 100%;
    }
    html,
    body,
    body > div {
     /* the react root */
        margin: 0;
        padding: 0;
        height: 100%;
    }
    body {
        font-family: 'Noto Sans KR', sans-serif;
    }
    #root {
        display: flex;
        flex-direction:column;
    }
    h2 {
        margin: 0;
        font-size: 16px;
    }
    ul {
        margin: 0;
        padding: 0 0 0 1.5em;
    }
    li {
        padding: 0;
    }
    b { 
        margin-right: 3px;
    }
`;
