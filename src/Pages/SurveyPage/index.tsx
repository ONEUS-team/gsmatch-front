import {
  NavigateFunction,
  Params,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import * as S from "./style";

import PORORO from "../../Assets/png/pororo.png";
import POBI from "../../Assets/png/pobi.png";
import LUPI from "../../Assets/png/LUPI.png";
import EDI from "../../Assets/png/char/edi_n.png";

import PORORO_I from "../../Assets/png/char/pororo_i.png";
import POBI_I from "../../Assets/png/char/pobi_i.png";
import LUPI_I from "../../Assets/png/char/lupi_i.png";
import EDI_I from "../../Assets/png/char/EDI.png";

import { useEffect, useState } from "react";
import { usePreventLeave } from "../../hooks/usePreventLeave";
import axiosInstance from "../../libs/api/axiosInstance";
import { refresh } from "../../components/api/refresh";

const Q = [
  [
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
  ],

  [
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
  ],

  [
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
  ],

  [
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
      content:
        "어려운 상황에서도 긍정적인 면을 찾아내고 희망을 가질 수 있나요?",
      type: "PORORO",
    },
  ],
];

export default function SurveyPage() {
  const [selectedType, setSelectedType] = useState<
    "PORORO" | "POBI" | "LUPI" | "EDI"
  >();
  const [po_point, setPO_point] = useState(0);
  const [pb_point, setPB_point] = useState(0);
  const [lp_point, setLP_point] = useState(0);
  const [ed_point, setED_point] = useState(0);

  const [result, setResult] = useState<"PORORO" | "POBI" | "LUPI" | "EDI">();

  const [status, setStatus] = useState(1);

  const navigate = useNavigate();
  const { enablePrevent, disablePrevent } = usePreventLeave();

  interface IQuestion {
    content: string;
    type: string;
  }

  const [question, setQuestion] = useState<IQuestion[]>([]);
  const [questionNumber] = useState<number[]>([]);

  const initQuestion = () => {
    setQuestion([]);

    for (let i = 0; i < 4; i++) {
      const selectedValues: number[] = [];
      while (selectedValues.length < 3) {
        const randomValue = Math.floor(Math.random() * 5);
        if (!selectedValues.includes(randomValue)) {
          selectedValues.push(randomValue);
        }
      }

      for (let j = 0; j < selectedValues.length; j++) {
        setQuestion((prev) => [...prev, Q[i][selectedValues[j]]]);
      }
    }
  };

  const initQuestionNumber = () => {
    while (questionNumber.length < 12) {
      const randomValue = Math.floor(Math.random() * 12);
      if (!questionNumber.includes(randomValue)) {
        questionNumber.push(randomValue);
      }
    }

    navigate("/survey/" + status);
  };

  useEffect(() => {
    initQuestion();
    disablePrevent();
  }, []);

  const sendType = async (type: UserType) => {
    try {
      await axiosInstance.put(
        "/user/type",
        { type },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          withCredentials: true,
        }
      );

      navigate("/");
    } catch (error) {
      refresh(navigate, null);
    }
  };

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
                    <S.SurveyMainItem
                      selected={selectedType == "PORORO"}
                      src={selectedType == "PORORO" ? PORORO_I : PORORO}
                      onClick={() => {
                        setSelectedType("PORORO");
                      }}
                    ></S.SurveyMainItem>
                    <S.SurveyMainItem
                      selected={selectedType == "POBI"}
                      src={selectedType == "POBI" ? POBI_I : POBI}
                      onClick={() => {
                        setSelectedType("POBI");
                      }}
                    ></S.SurveyMainItem>
                    <S.SurveyMainItem
                      selected={selectedType == "LUPI"}
                      src={selectedType == "LUPI" ? LUPI_I : LUPI}
                      onClick={() => {
                        setSelectedType("LUPI");
                      }}
                    ></S.SurveyMainItem>
                    <S.SurveyMainItem
                      selected={selectedType == "EDI"}
                      src={selectedType == "EDI" ? EDI_I : EDI}
                      onClick={() => {
                        setSelectedType("EDI");
                      }}
                    ></S.SurveyMainItem>
                  </S.SurveyMainItemBox>
                  <S.HashTagContainer>
                    <S.HashTagTitle>
                      {selectedType == "PORORO"
                        ? "뽀로로 유형"
                        : selectedType == "POBI"
                        ? "포비 유형"
                        : selectedType == "LUPI"
                        ? "루피 유형"
                        : selectedType == "EDI"
                        ? "에디 유형"
                        : null}
                    </S.HashTagTitle>
                    <S.HashTagBox>
                      {selectedType == "PORORO" ? (
                        <>
                          <S.HashTag>#쾌활</S.HashTag>
                          <S.HashTag>#명량</S.HashTag>
                          <S.HashTag>#긍정</S.HashTag>
                        </>
                      ) : selectedType == "POBI" ? (
                        <>
                          <S.HashTag>#순함</S.HashTag>
                          <S.HashTag>#냉정</S.HashTag>
                          <S.HashTag>#침착</S.HashTag>
                        </>
                      ) : selectedType == "LUPI" ? (
                        <>
                          <S.HashTag>#친절</S.HashTag>
                          <S.HashTag>#포근</S.HashTag>
                          <S.HashTag>#밝음</S.HashTag>
                        </>
                      ) : selectedType == "EDI" ? (
                        <>
                          <S.HashTag>#호기심</S.HashTag>
                          <S.HashTag>#열정</S.HashTag>
                          <S.HashTag>#창의적</S.HashTag>
                        </>
                      ) : null}
                    </S.HashTagBox>
                  </S.HashTagContainer>
                  <S.SurveyMainNextButton
                    onClick={() => {
                      initQuestion();
                      initQuestionNumber();
                    }}
                  >
                    유형검사 하러가기
                  </S.SurveyMainNextButton>
                </S.SurveMainyBox>
              </S.MainContainer>
            </>
          }
        />
        <Route
          path="/:page"
          element={
            <SurveyInfo
              question={question}
              questionNumber={questionNumber}
              status={status}
              setStatus={setStatus}
              setPO_point={setPO_point}
              setPB_point={setPB_point}
              setLP_point={setLP_point}
              setED_point={setED_point}
              navigate={navigate}
              enablePrevent={enablePrevent}
              po_point={po_point}
              pb_point={pb_point}
              lp_point={lp_point}
              ed_point={ed_point}
              setResult={setResult}
            />
          }
        />
        <Route
          path="/result"
          element={
            <SurveyResult
              result={result}
              navigate={navigate}
              sendType={sendType}
            />
          }
        />
      </Routes>
    </>
  );
}

interface IQuestion {
  content: string;
  type: string;
}

type UserType = "PORORO" | "POBI" | "LUPI" | "EDI";

interface SurveyInfoProps {
  question: IQuestion[];
  questionNumber: number[];
  status: number;
  setStatus: React.Dispatch<React.SetStateAction<number>>;
  setPO_point: React.Dispatch<React.SetStateAction<number>>;
  setPB_point: React.Dispatch<React.SetStateAction<number>>;
  setLP_point: React.Dispatch<React.SetStateAction<number>>;
  setED_point: React.Dispatch<React.SetStateAction<number>>;
  navigate: NavigateFunction;
  enablePrevent: () => void;
  po_point: number;
  pb_point: number;
  lp_point: number;
  ed_point: number;
  setResult: React.Dispatch<React.SetStateAction<UserType | undefined>>;
}

function SurveyInfo({
  question,
  questionNumber,
  status,
  setStatus,
  setPO_point,
  setPB_point,
  setLP_point,
  setED_point,
  navigate,
  enablePrevent,
  po_point,
  pb_point,
  lp_point,
  ed_point,
  setResult,
}: SurveyInfoProps) {
  const { page }: Readonly<Params<string>> = useParams();

  const pageNumber = parseInt(page ?? "1", 10) - 1;
  const [currentQuestion, setCurrentQuestion] = useState(
    question[questionNumber[pageNumber]]
  );

  useEffect(() => {
    enablePrevent();
    if (currentQuestion == null) {
      navigate("/survey");
    }
    setCurrentQuestion(question[questionNumber[pageNumber]]);

    if (pageNumber + 1 > 12) {
      setStatus(1);

      const maxPoints = Math.max(po_point, pb_point, lp_point, ed_point);

      let resultType: UserType = "PORORO";
      if (maxPoints === po_point) {
        resultType = "PORORO";
      } else if (maxPoints === pb_point) {
        resultType = "POBI";
      } else if (maxPoints === lp_point) {
        resultType = "LUPI";
      } else if (maxPoints === ed_point) {
        resultType = "EDI";
      }

      setResult(resultType);

      setPO_point(0);
      setPB_point(0);
      setLP_point(0);
      setED_point(0);

      navigate("/survey/result");
    }
  });

  return (
    <S.SurveyMainContainer>
      <S.SurveyBox>
        <S.SurveyTitle>유형검사를 진행하고 있어요!</S.SurveyTitle>
        <S.SurveyContent>{currentQuestion?.content}</S.SurveyContent>
        <S.SurveyButtonBox>
          <S.SurveyButton
            onClick={() => {
              currentQuestion?.type == "PORORO"
                ? setPO_point((prev: number) => prev + 1)
                : currentQuestion?.type == "POBI"
                ? setPB_point((prev: number) => prev + 1)
                : currentQuestion?.type == "LUPI"
                ? setLP_point((prev: number) => prev + 1)
                : currentQuestion?.type == "EDI"
                ? setED_point((prev: number) => prev + 1)
                : null;

              navigate("/survey/" + (status + 1));
              setStatus((prev: number) => prev + 1);
            }}
          >
            맞아요
          </S.SurveyButton>
          <S.SurveyButton
            onClick={() => {
              currentQuestion?.type == "PORORO"
                ? setPO_point((prev: number) => prev - 1)
                : currentQuestion?.type == "POBI"
                ? setPB_point((prev: number) => prev - 1)
                : currentQuestion?.type == "LUPI"
                ? setLP_point((prev: number) => prev - 1)
                : currentQuestion?.type == "EDI"
                ? setED_point((prev: number) => prev - 1)
                : null;

              navigate("/survey/" + (status + 1));
              setStatus((prev: number) => prev + 1);
            }}
          >
            아니에요
          </S.SurveyButton>
        </S.SurveyButtonBox>
      </S.SurveyBox>
      <S.SurveyBar page={pageNumber + 1} />
    </S.SurveyMainContainer>
  );
}

function SurveyResult({
  result,
  navigate,
  sendType,
}: {
  result: UserType | undefined;
  navigate: NavigateFunction;
  sendType: (type: UserType) => void;
}) {
  useEffect(() => {
    if (result == null) {
      navigate("/survey");
    }
  });

  return (
    <S.MainContainer>
      <S.SurveyResultBox>
        <S.SurveyResultImg
          src={
            result == "PORORO"
              ? PORORO
              : result == "POBI"
              ? POBI
              : result == "LUPI"
              ? LUPI
              : result == "EDI"
              ? EDI
              : ""
          }
        />
        <S.SurveyResultTitle>
          {result == "PORORO"
            ? "뽀로로 유형입니다!"
            : result == "POBI"
            ? "포비 유형입니다!"
            : result == "LUPI"
            ? "루피 유형입니다!"
            : result == "EDI"
            ? "에디 유형입니다!"
            : ""}
        </S.SurveyResultTitle>
        <S.SurveyDescriptionBox>
          {result == "PORORO" ? (
            <>
              <S.SurveyDescription>
                • 일상에서 주변에 긍정적인 에너지를 전파하고, 다른 사람들과의
                활발한 교류를 즐겨요.
              </S.SurveyDescription>
              <S.SurveyDescription>
                • 다양한 일에 도전하는 걸 좋아하는 유형이에요.
              </S.SurveyDescription>
              <S.SurveyDescription>
                • 조금 고집이 있기도 하지만 융통성이 좋아 잘 해결해요.
              </S.SurveyDescription>
            </>
          ) : result == "POBI" ? (
            <>
              <S.SurveyDescription>
                • 어려운 상황에서도 차분하게 대처함, 든든한 성격을 지녔고
                전략적인 사고를 해요
              </S.SurveyDescription>
              <S.SurveyDescription>
                • 천천히 꼼꼼하게 일을 진행해요.
              </S.SurveyDescription>
              <S.SurveyDescription>
                • 조용하지만 대범한 모습을 보일 때도 있어요.
              </S.SurveyDescription>
            </>
          ) : result == "LUPI" ? (
            <>
              <S.SurveyDescription>
                • 사람들과의 소통을 중요시하고, 주변인들에게 관심이 많고, 친절과
                배려를 중요하게 생각해요.
              </S.SurveyDescription>
              <S.SurveyDescription>
                • 깊은 관계를 중요하게 여겨요.
              </S.SurveyDescription>
              <S.SurveyDescription>
                • 의견을 조율하거나 소통을 연결시키는 능력이 뛰어나요.
              </S.SurveyDescription>
            </>
          ) : result == "EDI" ? (
            <>
              <S.SurveyDescription>
                • 새로운 분야나 아이디어에 대한 호기심이 많고, 문제 해결과
                창의적인 접근을 즐겨요.
              </S.SurveyDescription>
              <S.SurveyDescription>
                • 본인이 흥미로워 하는 일이라면 깊게 파고들고 그 과정을 즐겨요.
              </S.SurveyDescription>
              <S.SurveyDescription>
                • 한 번 빠져들면 그 일이 질릴 때까지 몰두해요.
              </S.SurveyDescription>
            </>
          ) : (
            <></>
          )}
        </S.SurveyDescriptionBox>
        <S.SurveyFinishButton
          onClick={() => {
            if (result) sendType(result);
          }}
        >
          GSMATCH 시작하기
        </S.SurveyFinishButton>
      </S.SurveyResultBox>
    </S.MainContainer>
  );
}
