import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
  height: 100vh;
`;

export const FilterContainer = styled.header`
  width: 50rem;
  padding: 0, 1.25rem;
  display: flex;
  margin-top: 2.5rem;
  position: relative;

  & > div {
    position: absolute;
    top: 4rem;
    z-index: 10;
    left: 1.25rem;
  }
`;

export const FilterButton = styled.button`
  background-color: #292424;
  border-radius: 3.125rem;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 120%;
  color: #f3a4b2;
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  border: none;
  padding: 0.625rem 1rem;
  cursor: pointer;
  margin-left: 1.25rem;

  &:hover {
    box-shadow: 0 0 18px 0px #f3a4b2;
  }
`;

export const CloseButton = styled.button`
  margin-left: 1.25rem;
  border: none;
  border-radius: 3.125rem;
  cursor: pointer;
  width: 6rem;
  height: 2.75rem;
  background-color: #f3a4b2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ListContainer = styled.ul`
  margin-top: 2.69rem;
  width: 50rem;
  padding: 0, 1.25rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.75rem;
  align-items: center;
`;

export const ListItem = styled.li``;

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