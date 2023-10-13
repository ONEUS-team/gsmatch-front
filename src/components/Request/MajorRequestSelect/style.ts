import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111;
  height: 100vh;
`;

export const MiddleContainer = styled.div`
  margin-top: 13rem;
  width: 50rem;
  display: flex;
  flex-direction: column;
  padding-left: 1.25rem;

  & > div:not(:first-of-type) {
    margin-top: 2.5rem;
  }
`;

export const TextItem = styled.h1`
  color: #eeeeee;
  font-weight: 700;
  font-size: 2rem;
  line-height: 120%;
`;

export const SubTextItem = styled.p`
  margin: 1rem 0 2.5rem 0;
  color: #777777;
  font-weight: 500;
  font-size: 1rem;
`;

export const SelectButton = styled.button<{ isSelect: boolean }>`
  border: 2px solid ${(props) => (props.isSelect ? "#F0A0BD" : "#777777")};
  color: ${(props) => (props.isSelect ? "#F0A0BD" : "#777777")};
  padding: 7px 13px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 30px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0);
`;

export const SelectText = styled.p`
  font-size: 20px;
  color: #eeeeee;
  font-weight: 700;
  margin-bottom: 15px;
  display: flex;
  column-gap: 0.25rem;
  align-items: center;
`;

export const GradeContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 8px;
  width: 45rem;
`;

export const GenderContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const MajorContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const LinkContainer = styled.div`
  display: inline-block;
`;

export const LinkText = styled.p`
  display: flex;
  margin-top: 2.5rem;
  cursor: pointer;
  column-gap: 0.5rem;
  align-items: center;
  color: #575757;
  font-size: 1rem;
  font-weight: 500;
  font-style: normal;
  line-height: 150%;
  text-decoration: underline;
`;

export const Button = styled.button`
  margin-top: 15.6rem;
  background-color: #f3a4b2;
  border: 0;
  /* width: 16rem; */
  padding: 1rem 5.1875rem;
  color: black;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 120%;
  border-radius: 1.875rem;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.5rem;
  cursor: pointer;
`;

export const RefText = styled.p`
  color: #f3a4b2;
  text-align: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 120%;
`;
