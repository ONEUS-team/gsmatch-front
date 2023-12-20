import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding-top: 4.875rem;

  @media (max-width: 720px) {
    padding-top: 3.875rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MessegeIconContainer = styled.div``;

export const IconImg = styled.img`
  @media (max-width: 720px) {
    height: 9.5rem;
  }
`;

export const MainText = styled.p`
  margin-top: 2rem;
  color: #fff;
  text-align: center;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;

  @media (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

export const LinkTextContainer = styled.div`
  cursor: pointer;
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const LinkTextItem = styled.button`
  color: #f3a4b2;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  padding: 0;
  cursor: pointer;

  @media (max-width: 720px) {
    font-size: 0.875rem;
  }
`;

export const ExplainText = styled.p`
  color: #777;
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-top: 0.5rem;

  @media (max-width: 720px) {
    font-size: 0.75rem;
  }
`;

export const Button = styled.button`
  background-color: #f3a4b2;
  border: none;
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
  margin-top: 10rem;

  @media (max-width: 720px) {
    margin-top: 5rem;
  }
`;
