import styled from "styled-components";

export const MessageContainer = styled.div`
  position: relative;
  margin-top: 1.25rem;
  display: flex;
  column-gap: 0.5rem;
  align-items: end;
  margin-left: 6.5rem;
  width: 81%;

  @media (max-width: 720px) {
    margin-left: 4rem;
  }
`;

export const Message = styled.div`
  border-radius: 1.25rem;
  padding: 0.75rem 1.5rem;
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid #575757;
  color: #fff;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
  /* max-width: ; */

  @media (max-width: 720px) {
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
    max-width: 80%;
  }
`;

export const TimeCard = styled.div`
  min-width: 3rem;
  min-height: 1rem;
  color: #808080;
  text-align: center;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 200;
  line-height: 1rem;
`;

export const TypeImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: absolute;
  left: -3rem;
  bottom: 2.19rem;
`;

export const LineContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
`;
