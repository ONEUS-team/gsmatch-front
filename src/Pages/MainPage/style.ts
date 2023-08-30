import { styled } from "styled-components";

export const Container = styled.div`
  background-color: #292424;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 140px;
  justify-content: space-around;
  margin-left: 100px;
`;

export const TitleText = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 40px;
`;

export const SubTitleText = styled.h2`
  color: #f0a0bd;
  font-weight: 700;
  font-size: 45px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 130px;
  position: absolute;
  cursor: pointer;
`;

export const LoginPageButton = styled.button`
  color: #c0c0c0;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-weight: 500;
  font-size: 15px;
  cursor: pointer;
`;

export const MainLogoBox = styled.div`
  margin-right: 100px;
`;
