import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SurveMainyBox = styled.div`
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

export const SurveyMainTitle = styled.h1`
  color: white;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  line-height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SurveyMainItemBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
`;

export const SurveyMainItem = styled.img``;

export const SurveyMainNextButton = styled.button`
  margin-top: 100px;
  background-color: #f3a4b2;
  padding: 15px 60px;
  border-radius: 180px;
  outline: none;
  border: none;
  font-weight: 550;
  font-size: 15px;
  cursor: pointer;
`;
