import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
  height: 100vh;
`;

export const MessegeIconContainer = styled.div`
  margin-top: 9.31rem;
`;

export const MainText = styled.p`
  margin-top: 2rem;
  color: #fff;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

export const LinkTextContainer = styled.div`
  cursor: pointer;
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const LinkTextItem = styled.p`
  color: #f3a4b2;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

export const ExplainText = styled.p`
  color: #777;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-top: 0.5rem;
`;

export const Button = styled.button`
  margin-top: 8.3rem;
  background-color: #f3a4b2;
  border: 0;
  /* width: 16rem; */
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
