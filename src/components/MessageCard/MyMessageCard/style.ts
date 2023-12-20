import styled from "styled-components";

export const MessageContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  column-gap: 0.5rem;
  align-items: end;
  justify-content: end;
  margin-right: 4rem;
  width: 80%;
`;

export const Message = styled.div`
  border-radius: 1.25rem;
  background: #292424;
  padding: 0.75rem;
  max-width: 95%;
  word-wrap: break-word;
  color: #fff;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 170%;
`;

export const TimeCard = styled.div`
  height: 1rem;
  min-width: 3rem;
  color: #808080;
  text-align: center;
  font-size: 0.625rem;
  font-style: normal;
  font-weight: 200;
  line-height: 1rem;
`;

export const LineContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
