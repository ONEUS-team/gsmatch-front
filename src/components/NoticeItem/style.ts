import styled from "styled-components";

export const ListItem = styled.button<{
  requestType: string;
  isOnlyOne: boolean;
}>`
  position: relative;
  width: 47.5rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
  border: none;
`;

export const ListHeader = styled.header`
  display: flex;
  align-items: center;
  column-gap: 0.75rem;
`;

export const ListSub = styled.div`
  color: #777777;
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;

export const ListTitle = styled.h1`
  color: #ffffff;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin-top: 0.5rem;
`;

export const ListType = styled.h1`
  color: #f3a4b2;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  align-items: center;
  column-gap: 0.25rem;
`;

export const ListAuthor = styled.h2``;

export const ListTime = styled.p``;

export const ListContent = styled.p`
  color: #c0c0c0;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  margin-top: 0.75rem;
`;

export const ListImg = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 1.25rem;
  position: absolute;
  right: 0rem;
  top: 0.15rem;
`;
