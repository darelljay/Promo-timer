import styled from "styled-components";
import theme from "../../theme";

export const MainBody = styled.main<{bgColor:string}>`
    width: 100vw;
    height: auto;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${(props)=>(props.bgColor)};
    transition: 0.8s all ease;
`

export const timerContainer = styled.div`
    width: 650px;
    height: 30%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    // border: 1px solid;

`
export const timerBox = styled.div`
    width: 80%;
    height: 300px;
    background-color: rgba(225,225,225,0.5);
    border-radius: 10px; 
    display:flex;
    justify-content:center;
    align-items:center;
    gap: 20px;
    flex-direction: column; 
`

export const menuBox = styled.ul`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 50px;
` 
export const menuItem = styled.li`
    width: 100px;
    height: 32px;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    font-weight: bold;
    color: #fff;
    transition: .8s all ease;
    &:hover{
        cursor:pointer;
    }
    &.active{ 
        border-radius: 5px;
        background-color:rgba(0,0,0,0.2);
        transition: .8s all ease;
    }
`
export const timeWrap = styled.div`
    width: 100%;
    height: 100px;
    // border: 1px solid;
    display:flex;
    justify-content:center;
    align-items: end;
`

export const minuite = styled.span`
    color:#fff;
    font-size: 100px;
`

export const second = styled.span`
    color:#fff;
    font-size: 100px; 
`
export const btnWrap = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    justify-content: center;
    align-items: center;
`
export const startBtn = styled.button`
    width: 230px;
    height: 50px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-align:center;
    color: ${theme.palette.primary.main};
    font-size: 30px;
`  
export const emptyBox = styled.div`
    width: 200px;
    height: 50px;
    display:flex;
    justify-content: start;
    align-items: center;
`
export const skipImg = styled.img<{ isRunning: boolean }>`
    width: 30px;
    height: 30px;
    margin-left: 30px;
    opacity: ${(props) => (props.isRunning ? 1 : 0)};
    transition: opacity .3s ease-in-out; 
    cursor: pointer;
`;

export const TodoWrap = styled.div`
    width: 500px;
    height: 500px;
    display:flex;
    justify-content:center;
    align-items: start;
`
