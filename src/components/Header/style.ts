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

export const NoticeIconBox = styled.button`
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0);

  svg:hover {
    .notice {
      fill: #f3a4b2;
    }
  }
`;

export const ChatIconBox = styled.button`
  cursor: pointer;
  border: none;
  background-color: rgba(0, 0, 0, 0);

  svg:hover {
    .chat {
      fill: #f3a4b2;
    }
  }
`;

export const RightBox = styled.div`
  display: flex;
  column-gap: 1.25rem;
  align-items: center;
`;
