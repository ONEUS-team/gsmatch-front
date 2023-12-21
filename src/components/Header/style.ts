import styled from "styled-components";

export const header = styled.div`
  width: 100vw;
  background-color: #121212;
  border-bottom: 1px solid #575757;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 10;
`;

export const Inner = styled.div`
  width: 800px;
  height: 4.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 720px) {
    height: 3.875rem;
    padding: 1rem 1.25rem;
  }
`;

export const LogoBox = styled.button`
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0);

  & > svg {
    width: 9.3125rem;
  }

  @media (max-width: 720px) {
    & > svg {
      width: 7.4375rem;
    }
  }
`;

export const NoticeIconBox = styled.button`
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0);
  padding: 0;

  svg:hover {
    .notice {
      fill: #f3a4b2;
    }
  }

  @media (max-width: 720px) {
    & > svg {
      width: 26px;
    }
  }
`;

export const ChatIconBox = styled.button`
  cursor: pointer;
  border: none;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);

  svg:hover {
    .chat {
      fill: #f3a4b2;
    }
  }

  @media (max-width: 720px) {
    & > svg {
      height: 24px;
    }
  }
`;

export const RightBox = styled.div`
  display: flex;
  column-gap: 1.25rem;
  align-items: center;

  @media (max-width: 720px) {
    column-gap: 1.25rem;
  }
`;
