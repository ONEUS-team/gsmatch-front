import styled from "styled-components";

export const Container = styled.div`
  margin-top: 0.81rem;
  width: 50rem;
  padding: 2rem;
  background-color: #292424;
  border-radius: 1.25rem;

  @media (max-width: 720px) {
    width: 23rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  row-gap: 0.25rem;
`;

export const TItle = styled.h1`
  color: #fff;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const SubTitle = styled.p`
  color: #c0c0c0;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ListContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 2rem;
`;

export const EmptyContiner = styled.div`
  height: calc(100% - 2.9375rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EmptyBox = styled.div`
  display: flex;
  padding-top: 1rem;
  flex-direction: column;
  row-gap: 1rem;
  align-items: center;

  svg {
    width: 6.25rem;
    height: 6.25005rem;
  }

  color: #c0c0c0;
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;
