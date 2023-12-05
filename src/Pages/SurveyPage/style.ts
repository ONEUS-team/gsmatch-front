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
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
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

export const SurveyMainItem = styled.img<{ selected: boolean }>`
  cursor: pointer;
  filter: ${(props) =>
    props.selected ? "brightness(100%)" : "brightness(0.4)"};
`;

export const SurveyMainNextButton = styled.button`
  margin-top: 30px;
  background-color: #f3a4b2;
  padding: 15px 60px;
  border-radius: 180px;
  outline: none;
  border: none;
  font-weight: 550;
  font-size: 15px;
  cursor: pointer;
`;

export const HashTagContainer = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const HashTagTitle = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: 700;
  height: 30px;
`;

export const HashTagBox = styled.div`
  display: flex;
  gap: 10px;
  height: 30px;
`;

export const HashTag = styled.div`
  border: 1px solid #f0a0bd;
  color: #f0a0bd;
  width: 90px;
  padding: 7px 0px;
  text-align: center;
  border-radius: 120px;
`;

export const SurveyContent = styled.p`
  color: white;
  font-size: 30px;
`;

export const SurveyButton = styled.button``;
