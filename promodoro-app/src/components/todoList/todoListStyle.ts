import styled from "styled-components";
import theme from "../../theme";

export const text = styled.p<{textSize:number}>`
  font-size: ${(props)=>props.textSize}rem;
  font-weight: bold;
  color: ${theme.palette.text.primary};
  overflow-wrap: break-word;
`;

export const menuWrap = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid;
  padding: 10px;
`
export const wrap = styled.div`
  width: 500px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const List = styled.ul`
  width: 500px;
  height: auto;
  display: flex;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > input{
    width: 80%;
    height: 50px;
    font-size: 0.98rem;
    text-align:center;
    color: ${theme.palette.text.primary};
    border-radius: 15px;
    background-color: rgba(225,225,225,0.3);
  }
  li{
    font-size: 1.3rem;
    color: ${theme.palette.text.primary}
  }
  `
  export const Input = styled.input`
    width: 500px;
    height: 50px;
  `
  export const InputBtn = styled.button`
  width: 500px;
  height: 50px;
  text-align:center;
  padding: 10px;
  color: ${theme.palette.text.primary};
  border-radius: 15px;
  background-color: rgba(225,225,225,0.3);
  border: 2px dotted;
  opacity: 0.6;
  transition: 0.3s all ease;
  &:hover{
    opacity: 1;
  }
`;

export const Ul = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding: 0; 


  & > li {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    font-size: 30px;
    color: ${theme.palette.text.primary};
    // background-color: #fff;
  }
`;

