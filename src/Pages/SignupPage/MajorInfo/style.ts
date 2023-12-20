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
  margin: 9vh 0 13vh 0;

  @media (max-width: 720px) {
    width: 23rem;
    margin: 3.5rem 0 2rem 0;
  }
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

export const SelectForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > div:not(:last-of-type) {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 720px) {
    width: 23.5rem;
    padding-left: 1.25rem;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const SelectBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 8px;
  width: 500px;

  @media (max-width: 720px) {
    width: 19rem;
  }
`;

export const SelectText = styled.p`
  font-size: 20px;
  color: #eeeeee;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const SelectButton = styled.button<{ isSelect: boolean }>`
  border: 1px solid ${({ isSelect }) => (isSelect ? "#F0A0BD" : "#777777")};
  color: ${({ isSelect }) => (isSelect ? "#F0A0BD" : "#777777")};
  text-align: center;
  padding: 0.5rem 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  border-radius: 1.25rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
`;

export const Button = styled.button`
  display: flex;
  width: 16.5625rem;
  height: 3.25rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 5rem;
  background-color: #f3a4b2;
  border: none;
  font-weight: 700;
  font-size: 20px;
  border-radius: 1.875rem;
  cursor: pointer;

  @media (max-width: 720px) {
    bottom: 2.75rem;
  }
`;
