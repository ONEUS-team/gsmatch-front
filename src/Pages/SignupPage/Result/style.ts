import styled from "styled-components";

export const Cotainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121212;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const IconBox = styled.div``;

export const MainText = styled.h1`
  margin-top: 1.64rem;
  color: #fff;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

export const SubText = styled.p`
  margin-top: 1rem;
  color: #fff;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
`;

export const Button = styled.button`
  margin-top: 3.75rem;
  background-color: #f3a4b2;
  border: 0;
  padding: 0.94rem 3.52rem;
  color: black;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 120%;
  border-radius: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
  cursor: pointer;
`;
