import styled from "styled-components";

export const ListItem = styled.button<{
  requestType: string;
  isOnlyOne: boolean;
}>`
  height: 4.75rem;
  position: relative;
  width: 100%;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  text-align: left;
  cursor: pointer;
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

  @media (max-width: 720px) {
    width: 16rem;
    height: 0.875rem;
    overflow: hidden;
  }
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

  @media (max-width: 720px) {
    width: 16rem;
    height: 1.3125rem;
    overflow: hidden;
  }
`;

export const ListImg = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 1.25rem;
  position: absolute;
  right: 0rem;
  top: 0.15rem;
`;

export const OnlyOneContainer = styled.div`
  position: absolute;
  top: -4.24755rem;
  right: 0.63rem;
`;

export const XIconBox = styled.button`
  border: none;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  position: absolute;
  right: 0.294rem;
  top: -0.08rem;
  cursor: pointer;
`;
