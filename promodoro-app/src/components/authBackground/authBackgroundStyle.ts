import styled from "styled-components";

export const Background = styled.div`
  background-color: #f9f9f9;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormWrap = styled.div`
  background-color: #fff;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 20px;

    label {
      font-weight: bold;
      margin-bottom: 5px;
      display: block;
    }

    input {
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
      width: 100%;
    }
  }

  button {
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

export const OrBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 20px;
          
  span {
    margin: 0 10px;
    font-weight: bold;
    color: #666;
  }
`;
                                     
export const OrLine = styled.div`
  flex-grow: 1;
  height: 1px;
  background-color: #ccc;
`;
