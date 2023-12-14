import styled from "styled-components";

export const Card = styled.div`
  cursor: pointer;
  height: 6rem;
  padding: 1rem 5rem;
`;

export const InnerCard = styled.div`
  width: 100%;
  display: flex;
  column-gap: 1rem;
`;

export const PartnerImg = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

export const ChatInfoBox = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  row-gap: 0.25rem;
  display: flex;
  width: 16.315rem;
`;

export const TopBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const RoomName = styled.h1`
  font-style: normal;
  width: 14.5625rem;
  line-height: 150%;
  font-weight: 500;
  overflow: hidden;
  font-size: 1rem;
  color: #fff;
`;

export const FixBox = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
`;
export const PartnerInfo = styled.div`
  color: #c0c0c0;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  width: 100%;
`;
