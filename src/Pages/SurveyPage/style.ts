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
  filter: ${({selected}) =>
    selected ? "brightness(100%)" : "brightness(0.4)"};
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

export const SurveyMainContainer = styled(MainContainer)`
  gap: 120px;
`;

export const SurveyBox = styled.div`
  display: flex;
  height: 500px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const SurveyTitle = styled.h1`
  font-size: 35px;
  color: #f3a4b2;
`;

export const SurveyContent = styled.p`
  color: white;
  font-size: 25px;
  width: 100%;
  text-align: center;
  line-height: 40px;
`;

export const SurveyButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SurveyButton = styled.button`
  background-color: #292424;
  border: none;
  border-radius: 50px;
  width: 300px;
  padding: 19px;
  color: white;
  font-size: 17px;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(243, 164, 178, 0.5);
    transition: all 0.3s;
  }
`;

export const SurveyBar = styled.div<{ page: number }>`
  padding: 8px 200px;
  border-radius: 50px;
  background: linear-gradient(
    90deg,
    #f3a4b2 0%,
    #f3a4b2 ${(props) => "" + ((props.page - 1) / 12) * 100 + "%"},
    #eee ${(props) => "" + ((props.page - 1) / 12) * 100 + "%"},
    #eee 100%
  );
`;

export const SurveyResultBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

export const SurveyResultTitle = styled.div`
  color: white;
  font-size: 25px;
`;

export const SurveyResultImg = styled.img``;

export const SurveyDescriptionBox = styled.div`
  background-color: #292424;
  width: 700px;
  padding: 30px;
`;

export const SurveyDescription = styled.p`
  color: white;
  font-weight: 300;
  margin: 25px 0;
`;

export const SurveyFinishButton = styled(SurveyMainNextButton)``;
