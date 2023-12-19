import { styled } from "styled-components";

export const Container = styled.div`
  position: relative;
  background-color: #292424;
  width: 30rem;
  height: 5rem;
  padding-top: 0.75rem;
  border-radius: 10px;
  padding: 0.75rem 1.25rem 0.75rem;

  @media (max-width: 720px) {
    width: 20.9375rem;
  }
`;

export const InputText = styled.p<{ isMatch: boolean | undefined }>`
  color: ${({ isMatch }) => (isMatch ? "#fff" : "#EC5353")};
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const InputArea = styled.input`
  background-color: #292424;
  border: 0;
  color: #ffffff;
  padding: 0.5rem 0 0 0;
  width: 100%;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;

  &:focus {
    outline: none;
  }
`;
