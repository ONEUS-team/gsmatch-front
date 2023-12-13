import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
  height: 100vh;
`;

export const BackContainer = styled.div`
  width: 36.875rem;
  height: 2.6875rem;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  padding: 0.62rem 0.62rem 0.62rem 1.87rem;
  margin: 6.97rem 0 13.78rem 0;
`;

export const TextContainer = styled.p`
  color: #eeeeee;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
`;

export const BackLink = styled(Link)`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:not(:last-of-type) {
    margin-bottom: 0.75rem;
  }
`;

export const Button = styled.button`
  position: absolute;
  background-color: #f3a4b2;
  width: 265px;
  height: 3.25rem;
  border-radius: 30px;
  font-weight: 700;
  font-size: 20px;
  cursor: pointer;
  border: none;
  bottom: 10rem;
`;

export const IncorrectBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 0.75rem;
`;

export const IncorrectText = styled.p`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  color: #ec5353;
`;
