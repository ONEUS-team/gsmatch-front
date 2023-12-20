import styled from "styled-components";

export const Container = styled.div`
  padding-top: 4.875rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextItem = styled.h1`
  color: #eeeeee;
  font-weight: 700;
  font-size: 2rem;
`;

export const SubTextItem = styled.p`
  margin-top: 1rem;
  color: #777777;
  font-weight: 500;
  font-size: 1rem;
`;

export const SelectForm = styled.form`
  margin-top: 2.5rem;
  column-gap: 5rem;
  display: flex;

  @media (max-width: 720px) {
    column-gap: 2.5rem;
  }
`;

export const SelectItem = styled.div<{ isSelect: boolean }>`
  display: flex;
  color: ${(props) => {
    return props.isSelect ? "#FFFFFF" : "#777777";
  }};
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.img<{ isSelect: boolean }>`
  width: 160px;
  height: 160px;
  border: 3px solid
    ${(props) => {
      return props.isSelect ? "#F3A4B2" : "#777777";
    }};
  padding: 0.625rem;
  border-radius: 1.875rem;
  cursor: pointer;

  @media (max-width: 720px) {
    width: 7.5rem;
    height: 7.5rem;
  }
`;

export const SelectTitle = styled.h1`
  margin: 0.7rem 0;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
`;

export const SelectInfo = styled.p`
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  text-align: center;
`;

export const Button = styled.button`
  background-color: #f3a4b2;
  border: 0;
  width: 16rem;
  padding: 1rem 5.1875rem;
  color: black;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 120%;
  border-radius: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  column-gap: 0.5rem;
  margin-top: 14rem;

  @media (max-width: 720px) {
    margin-top: 7rem;
  }
`;
