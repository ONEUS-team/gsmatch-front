import styled from "styled-components";

export const Container = styled.div`
  padding: 5.75rem 0 1rem 0;
  background-color: #121212;
  flex-direction: column;
  position: relative;
  width: 31.3125rem;
  overflow-y: auto;
  height: 100vh;
  display: flex;
  border-right: 3px solid #777;
`;

export const AbsoluteBox = styled.div`
  align-items: center;
  column-gap: 0.5rem;
  position: absolute;
  display: flex;
  top: 1.25rem;
  left: 5rem;

  font-style: normal;
  line-height: 100%;
  font-size: 1.5rem;
  font-weight: 700;
  color: #eee;
`;

export const IconButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  align-items: center;
  cursor: pointer;
  display: flex;
  border: none;
  padding: 0;
`;
