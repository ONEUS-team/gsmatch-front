import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
  height: 100vh;
  position: relative;
`;

export const IconContainer = styled.div`
  margin-top: 11.88rem;
`;

export const TextItem = styled.h1`
  margin-top: 2rem;
  color: #eeeeee;
  font-weight: 700;
  font-size: 2rem;
  line-height: 120%;
`;

export const SubTextItem = styled.p`
  margin-top: 0.5rem;
  color: #fff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const FailedButton = styled.button`
  position: absolute;
  bottom: 5rem;
  background-color: #f3a4b2;
  border: 0;
  padding: 1rem 5.1875rem;
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

export const SucceedButton = styled.button`
  position: absolute;
  bottom: 5rem;
  background-color: #f3a4b2;
  border: 0;
  padding: 1rem 5.1875rem;
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
