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
  position: relative;
  background-color: #292424;
  width: 30rem;
  height: 5rem;
  padding-top: 0.75rem;
  border-radius: 10px;
  padding: 0.75rem 1.25rem 0.75rem;
`;

export const InputItem = styled.input`
  background-color: #292424;
  border: 0;
  color: #ffffff;
  padding: 0.5rem 0 0 0;
  width: 100%;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: #f3a4b2;
  border: 0;
  width: 16.5625rem;
  height: 3.25rem;
  border-radius: 1.875rem;
  color: #000;
  font-size: 18px;
  font-weight: 700;
  line-height: 120%;
  cursor: pointer;
`;

export const InputText = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: #ffffff;
`;

export const SignupContainer = styled.div`
  display: flex;
  margin-top: 1.25rem;

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

export const PasswordToggleButton = styled.div`
  position: absolute;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  right: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
`;
