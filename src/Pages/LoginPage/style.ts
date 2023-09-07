import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  margin: 92px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:nth-child(2) {
    margin-top: 10px;
  }

  & > button {
    margin-top: 100px;
  }
`;

export const InputContainer = styled.div`
  background-color: #292424;
  width: 590px;
  height: 100px;
  border-radius: 10px;
`;

export const InputItem = styled.input`
  background-color: #292424;
  border: 0;
  color: #ffffff;
  height: 34px;
  width: 500px;
  margin: 11px 0 0 18px;
  font-size: 18px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #f3a4b2;
  border: 0;
  width: 590px;
  height: 60px;
  border-radius: 10px;
  color: #000;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;

export const InputText = styled.p`
  margin: 17px 0 0 17px;
  font-size: 18px;
  color: #eeeeee;
  font-weight: 700;
`;

export const SignupContainer = styled.div`
  display: flex;
  margin-top: 10px;

  & > a {
    color: #f0a0bd;
    font-weight: 400;
    font-size: 16px;
    cursor: pointer;
  }
`;

export const SignupText = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: #eeeeee;
  margin-right: 5px;
`;

export const PasswordContainer = styled.div`
  display: flex;
`;

export const PasswordToggleButton = styled.div`
  margin: 18px;
  cursor: pointer;
`;
