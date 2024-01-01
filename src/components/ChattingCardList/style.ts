import styled from "styled-components";

export const Container = styled.div<{ isChat: boolean }>`
  padding: 5.75rem 0 1rem 0;
  background-color: #121212;
  flex-direction: column;
  position: relative;
  min-width: 31.3125rem;
  overflow-y: auto;
  height: 100vh;
  display: flex;
  border-right: 3px solid #777;

  @media (max-width: 720px) {
    width: 100%;
    align-items: center;
    border: none;
    min-width: 100vw;
    padding: 0 0 1rem 0;
    ${({ isChat }) => (isChat ? "display: none" : "")}
  }
`;

export const AbsoluteBox = styled.div`
  align-items: center;
  column-gap: 0.5rem;
  position: absolute;
  display: flex;
  top: 1.25rem;
  left: 5rem;

  @media (max-width: 720px) {
    margin-left: 3rem;
  }

  @media (max-width: 720px) {
    position: static;
    height: 5.75rem;
    width: 100vw;
    padding-left: 10v w;
  }
`;

export const IconButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  align-items: center;
  cursor: pointer;
  display: flex;
  border: none;
  padding: 0;
`;

export const Text = styled.p`
  font-style: normal;
  line-height: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  color: #eee;
`;
