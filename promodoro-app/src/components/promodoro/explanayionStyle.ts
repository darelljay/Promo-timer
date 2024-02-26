import styled from "styled-components";
import theme from "../../theme";
export const Backgournd = styled.div`
    padding: 30px;
    width: 100vw;
    height: auto;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: ${theme.palette.background.paper}
`
export const Box = styled.div`
    width: 600px; 
    height: auto;
    display:flex;
    justify-content: center;
    align-items: start;
    flex-direction: column;
    gap: 50px;

`
export const HeadingText = styled.p`
    font-size: 2.1rem;
    font-weight: bolder;
    color: ${theme.palette.text.secondary};
`

export const paragraphWrap = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 10px; 

    & > .p {
      font-size: 1.12rem;
      color: ${theme.palette.text.secondary};
    }
    .highlight {
        color: ${theme.palette.primary.main};
        font-weight: bold;
    }

    ol {
        list-style-type: decimal; /* Add your desired list style type here */
        margin-left: 5px; /* Adjust the margin as needed */
        color: ${theme.palette.text.secondary};
    }

    ol > li {
        list-style: decimal;
        list-style-position: inside;
        margin-bottom: 10px; /* Adjust the margin between list items */
    }

    ul > li{
        list-style-type: circle;
    }
`;


export const SubHeaddingText = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: ${theme.palette.text.secondary};

    & > div{
        margin-top: 10px;
        width: 20px;
        height: 4px;
        background-color: ${theme.palette.primary.dark};
    }
`

