import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    h1 {
      color: #f3a4b2;
    }
  }
`;

export const RequestBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
`;

export const ImgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PreviewImg = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 1.25rem;
`;

export const TopBox = styled.div`
  display: flex;
  column-gap: 0.75rem;
  align-items: center;
`;

export const BottomBox = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.75rem;
`;

export const TItle = styled.h1`
  color: #fff;
  overflow: hidden;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  max-width: 40rem;
`;

export const Content = styled.p`
  overflow: hidden;
  color: #c0c0c0;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
  max-width: 40rem;
`;

export const Type = styled.div`
  color: #f3a4b2;
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  display: flex;
  column-gap: 0.25rem;
`;

export const Author = styled.p`
  color: #777;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;
