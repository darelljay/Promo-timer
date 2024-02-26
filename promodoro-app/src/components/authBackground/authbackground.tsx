import * as S from "./authBackgroundStyle";
import GoogleButton from "react-google-button";
import { useState } from "react";
import axios from 'axios'; // Import Axios for HTTP requests
import { Navigate } from "react-router-dom";

export const AuthBackground = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [idValid, setIdValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const [isLoginForm, setIsLoginForm] = useState(true);

  const handleIdChange = (e) => {
    const value = e.target.value;
    setId(value);
    setIdValid(validateId(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setPasswordValid(validatePassword(value));
  };
  
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setConfirmPasswordValid(validateConfirmPassword(value));
  };


  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setNameValid(validateName(value));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLoginForm) {
        if (validateId(id) && validatePassword(password)) {
          const loginData = { id, password };
          const response = await axios.post('http://localhost:3000/login', loginData);
          console.log("Login successful:", response.data);
          return <Navigate to="/"/>;
        } else {
          setIdValid(validateId(id));
          setPasswordValid(validatePassword(password));
        }
      } else {
        if (
          validateId(id) &&
          validatePassword(password) &&
          validateName(name) &&
          validateConfirmPassword(confirmPassword)
        ) {
          const registrationData = { name, id, password };
          const response = await axios.post('http://localhost:3000/signUp', registrationData);

          if(response.status=200){
            alert("Registration successful")
            setIsLoginForm(true);
            alert("Registration successful");
          }else{
            alert("please check your id and password")
          } 

          console.log("Registration successful:", response.data);
        } else {
          setIdValid(validateId(id));
          setPasswordValid(validatePassword(password));
          setConfirmPasswordValid(validateConfirmPassword(confirmPassword));
          setNameValid(validateName(name));
        }
      }
    } catch (error) {
      console.error("Error:", error.response.data);
    }
  };

  const validateId = (id) => {
    return id.trim().length > 0;
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const validateConfirmPassword = (confirmPassword) => {
    return confirmPassword === password;
  };



  const validateName = (name) => {
    return name.trim().length > 0;
  };

  const switchForm = () => {
    setIsLoginForm(!isLoginForm);
    setId("");
    setPassword("");
    setConfirmPassword("");
    setName("");
    setIdValid(true);
    setPasswordValid(true);
    setConfirmPasswordValid(true);
    setNameValid(true);
  };

  return (
    <S.Background>
      <S.FormWrap>
        <S.Title>{isLoginForm ? "Login" : "Register"}</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <GoogleButton label="Log in with Google" />
          <S.OrBox>
            <S.OrLine />
            <span>or</span>
            <S.OrLine />
          </S.OrBox>
          <div>
            <label>ID:</label>
            <input
              type="text"
              value={id}
              onChange={handleIdChange}
              required
              style={{ borderColor: idValid ? "#ccc" : "red" }}
            />
          </div>
          {!isLoginForm && (
            <>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={handleNameChange}
                  required
                  style={{ borderColor: nameValid ? "#ccc" : "red" }}
                />
              </div>
            </>
          )}
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
              style={{ borderColor: passwordValid ? "#ccc" : "red" }}
            />
          </div>
          {!isLoginForm && (
            <div>
              <label>Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                required
                style={{
                  borderColor: confirmPasswordValid ? "#ccc" : "red",
                }}
              />
            </div>
          )}
          <button type="submit">{isLoginForm ? "Log in" : "Register"}</button>
        </S.Form>
        <p onClick={switchForm}>
          {isLoginForm
            ? "Create an account"
            : "Already have an account? Log in"}
        </p>
      </S.FormWrap>
    </S.Background>
  );
};
