import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const ChattingRoom = styled.div`
  position: relative;
  width: 120rem;
  height: 100%;
  background-color: #121212;
`;

export const MessageDisplayBox = styled.div`
  height: calc(100vh - 9.8125rem);
  width: calc(100vw - 31.3125rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
`;

export const PartnerInfo = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PartnerTypeImg = styled.img`
  width: 9.375rem;
  height: 9.375rem;
  border-radius: 50%;
`;

export const PartnerName = styled.h1`
  margin-top: 0.95rem;
  color: #fff;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
`;

export const PartnerType = styled.p`
  color: #777;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-top: 0.25rem;
`;
