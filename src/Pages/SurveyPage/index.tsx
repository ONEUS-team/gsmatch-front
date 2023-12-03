import { Route, Routes } from "react-router-dom";
import * as S from "./style";
import PORORO from "../../Assets/png/pororo.png";
import POBI from "../../Assets/png/pobi.png";
import RUPI from "../../Assets/png/rupi.png";
import EDI from "../../Assets/png/edi.png";

const EDI_Q = [
  {
    content: "새로운 분야에 도전하는 것에 호기심을 느끼나요?",
    type: "EDI",
  },
  {
    content: "열정적으로 취미나 관심사에 몰두하는 편인가요?",
    type: "EDI",
  },
  {
    content:
      "창의적인 아이디어를 구상하고 구현하는 과정에서 즐거움을 느끼나요?",
    type: "EDI",
  },
  {
    content:
      "다양한 문제에 대해 깊이 파고들어 해결책을 찾는 것에 흥미를 느끼나요?",
    type: "EDI",
  },
  {
    content: "새로운 경험을 통해 세상을 더 넓게 보는 것에 흥미를 느끼나요?",
    type: "EDI",
  },
];

const LUPI_Q = [
  {
    content: "다른 사람들과의 소통과 상호작용을 즐기나요?",
    type: "LUPI",
  },
  {
    content:
      "다른 사람들에게 친절하게 대하고 배려하는 것을 중요하게 생각하나요?",
    type: "LUPI",
  },
  {
    content: "주변 사람들에게 위로와 격려를 주는 것에 기쁨을 느끼나요?",
    type: "LUPI",
  },
  {
    content: "다른 사람들의 이야기를 경청하고 이해하는 것에 관심이 있나요?",
    type: "LUPI",
  },
  {
    content: "자신의 긍정적인 에너지를 주변에 전달하려고 노력하나요?",
    type: "LUPI",
  },
];

const POBI_Q = [
  {
    content:
      "어려운 문제에 대해 냉정하게 분석하고 전략을 세우는 것을 좋아하나요?",
    type: "POBI",
  },
  {
    content: "스트레스 상황에서도 차분하고 조용한 마음을 유지하는 편인가요?",
    type: "POBI",
  },
  {
    content: "문제 해결을 위해 체계적인 방식을 사용하는 것을 선호하나요?",
    type: "POBI",
  },
  {
    content:
      "갈등 상황에서도 객관적으로 판단하고 중재하는 능력을 가지고 있나요?",
    type: "POBI",
  },
  {
    content:
      "어려운 상황에서도 마음의 평정을 잃지 않고 문제에 집중할 수 있나요?",
    type: "POBI",
  },
];

const PORORO_Q = [
  {
    content: "일상 속에서 긍정적인 사고를 유지하고 행동하려고 노력하나요?",
    type: "PORORO",
  },
  {
    content: "새로운 사람들과의 만남과 소통을 즐기나요?",
    type: "PORORO",
  },
  {
    content:
      "사회적인 활동이나 이벤트에 적극적으로 참여하고 에너지를 발산하나요?",
    type: "PORORO",
  },
  {
    content:
      "주변 사람들과 함께 웃고 즐거운 시간을 보내는 것을 중요하게 생각하나요?",
    type: "PORORO",
  },
  {
    content: "어려운 상황에서도 긍정적인 면을 찾아내고 희망을 가질 수 있나요?",
    type: "PORORO",
  },
];

export default function SurveyPage() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <S.MainContainer>
                <S.SurveMainyBox>
                  <S.SurveyMainTitle>
                    유형검사를 통해
                    <br />
                    나의 유형을 찾아보세요!
                  </S.SurveyMainTitle>
                  <S.SurveyMainItemBox>
                    <S.SurveyMainItem src={PORORO}></S.SurveyMainItem>
                    <S.SurveyMainItem src={POBI}></S.SurveyMainItem>
                    <S.SurveyMainItem src={RUPI}></S.SurveyMainItem>
                    <S.SurveyMainItem src={EDI}></S.SurveyMainItem>
                  </S.SurveyMainItemBox>
                  <S.SurveyMainNextButton>
                    유형검사 하러가기
                  </S.SurveyMainNextButton>
                </S.SurveMainyBox>
              </S.MainContainer>
            </>
          }
        />
      </Routes>
    </>
  );
}
