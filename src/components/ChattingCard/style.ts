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

export const OpponentImg = styled.img`
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

export const BottomBox = styled.div`
  width: 100%;
  overflow-x: hidden;
  color: #c0c0c0;
  font-size: 1rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const OpponentName = styled.p`
  font-size: 1.25rem;
  font-style: normal;
  line-height: 120%;
  font-weight: 600;
  color: #fff;
`;

export const NameTimeBox = styled.div`
  justify-content: center;
  column-gap: 0.38rem;
  align-items: center;
  display: flex;
`;

export const LastTime = styled.p`
  line-height: normal;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 400;
  color: #777;
`;

export const FixBox = styled.div``;
