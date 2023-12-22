import styled from "styled-components";

export const ChattingHeader = styled.div`
  width: calc(100vw - 31.3125rem);
  justify-content: space-between;
  border-bottom: 1px solid #777;
  padding: 1.5rem 1.75rem;
  display: flex;

  font-style: normal;
  line-height: 120%;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;

  @media (max-width: 720px) {
    width: 100%;
    font-size: 1.2rem;
    padding: 1.2rem 1.5rem;
  }
`;

export const Title = styled.h1`
  @media (max-width: 720px) {
    width: 80%;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;

export const IconButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  align-items: center;
  cursor: pointer;
  display: flex;
  border: none;
  padding: 0;
`;
