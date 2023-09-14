import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
  height: 100vh;
`;

export const TextItem = styled.h1`
  margin-top: 13rem;
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
`;

export const SelectItem = styled.div<{ isSelect: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Icon = styled.img`
  width: 160px;
  height: 160px;
  border: 3px solid #777;
  padding: 0.625rem;
  border-radius: 1.875rem;
  cursor: pointer;
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
  margin-top: 16rem;
  background-color: #f3a4b2;
  border: 0;
  width: 16rem;
  padding: 1rem 5.1875rem;
  color: #292424;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 120%;
  border-radius: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
