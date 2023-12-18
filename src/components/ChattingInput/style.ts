import styled from "styled-components";

export const ChattingInput = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.form`
  display: flex;
  column-gap: 1.25rem;
  width: 90%;
  position: relative;
`;

export const Input = styled.input`
  padding: 0.5rem 7.9375rem 0.5rem 1.25rem;
  border-radius: 1.875rem;
  border: 1px solid #777;
  width: 100%;
  color: #fff;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  background-color: rgba(0, 0, 0, 0);

  &:focus {
    outline: none;
  }
`;

export const SendButton = styled.button`
  border: none;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  position: absolute;
  right: 18px;
  top: 8px;
`;
