import styled from "styled-components";

export const header = styled.div`
  width: 100%;
  background-color: #121212;
  border-bottom: 1px solid #575757;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Inner = styled.div`
  width: 800px;
  height: 4.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoBox = styled.button`
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0);
`;

export const IconBox = styled.button`
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0);

  & :hover {
    svg {
      fill: #f3a4b2;

      path {
        fill: #f3a4b2;
      }
    }
  }
`;

export const RightBox = styled.div`
  display: flex;
  column-gap: 1.25rem;
  align-items: center;
`;
