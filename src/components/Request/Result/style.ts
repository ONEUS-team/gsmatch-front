import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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

export const IconContainer = styled.div`
  & > svg {
    @media (max-width: 720px) {
      width: 9rem;
    }
  }
`;

export const Img = styled.img`
  @media (max-width: 720px) {
    width: 9rem;
  }
`;

export const TextItem = styled.h1`
  margin-top: 2rem;
  color: #eeeeee;
  font-weight: 700;
  font-size: 2rem;
  line-height: 120%;

  @media (max-width: 720px) {
    font-size: 1.5rem;
  }
`;

export const SubTextItem = styled.p`
  margin-top: 0.5rem;
  color: #fff;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const FailedButton = styled.button`
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
  margin-top: 10rem;
`;

export const SucceedButton = styled.button`
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
  margin-top: 10rem;
`;
