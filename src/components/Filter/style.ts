import styled from "styled-components";

export const Container = styled.div`
  border-radius: 1.25rem;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  row-gap: 1.94rem;
  padding: 2.5rem;
  box-shadow: 2px 8px 18px 0px rgba(238, 238, 238, 0.45);
`;

export const TextBox = styled.h1`
  color: #f3a4b2;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  display: flex;
  column-gap: 0.5rem;
  align-items: center;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.81rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  color: #777;
`;

export const SelectBox = styled.div`
  display: flex;
  column-gap: 0.75rem;
`;

export const SelectBTN = styled.button<{ isSelect: boolean }>`
  background-color: ${(props) => (props.isSelect ? "#F3A4B2" : "#292424")};
  color: ${(props) => (props.isSelect ? "#000000" : "#777777")};
  cursor: pointer;
  display: flex;
  padding: 0.5rem 1.25rem;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 1.25rem;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;

  &:first-child {
    line-height: 100%;
  }
`;
