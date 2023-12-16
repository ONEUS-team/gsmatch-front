import * as S from "./style";
import * as I from "../../../Assets/svg/index";
import { useNavigate } from "react-router-dom";
import { Gender, Grade, Major, RequestType } from "../../../types/utilType";
import axiosInstance from "../../../libs/api/axiosInstance";
import { refresh } from "../../../components/api/refresh";
import { useEffect, useState } from "react";

interface Props {
  requestType: RequestType | null;
  requestGender: Gender[];
  requsetMajor: Major[] | null;
  requestGrade: Grade[];
  requestTitle: string;
  requestContent: string;
  requestImg: string[];
}

const RequestCheck: React.FC<Props> = ({
  requestType,
  requestGender,
  requsetMajor,
  requestGrade,
  requestTitle,
  requestContent,
  requestImg,
}) => {
  const [isOnlyone, setIsOnlyone] = useState<boolean>(false);
  const [range, setRange] = useState<number>(0);
  const navigate = useNavigate();

  const handleBtnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsOnlyone(e.currentTarget?.id === "isOnlyone" ? true : false);
    await request();

    // navigate(`/request/finish/succeed`);
  };

  const request = async () => {
    const body = new FormData();

    body.append(
      "request",
      new Blob(
        [
          JSON.stringify({
            title: requestTitle,
            content: requestContent,
            requestType: requestType,
            requestGrades: requestGrade,
            requestGenders: requestGender,
            requestMajors: requsetMajor,
            isOnlyone: isOnlyone,
          }),
        ],
        { type: "application/json" }
      )
    );

    requestImg.forEach((img) => {
      body.append("images", img);
    });

    const authorization = `Bearer ${localStorage.getItem("accessToken")}`;

    const config = {
      headers: {
        "Content-Type": `multipart/form-data`,
        Authorization: authorization,
      },
      withCredentials: true,
    };
    try {
      await axiosInstance.post("/request", body, config);
    } catch (error) {
      console.log(error);
      refresh(navigate, request);
    }
  };

  const requestRange = async () => {
    const body = {
      title: requestTitle,
      content: requestContent,
      requestType: requestType,
      requestGrades: requestGrade,
      requestGenders: requestGender,
      requestMajors: requsetMajor,
    };

    const authorization = `Bearer ${localStorage.getItem("accessToken")}`;

    const config = {
      headers: {
        Authorization: authorization,
      },
      withCredentials: true,
    };
    try {
      const response = await axiosInstance.post("/request/range", body, config);
      setRange(response.data.range);
      console.log(response);
    } catch (error) {
      console.log(error);
      refresh(navigate, requestRange);
    }
  };

  useEffect(() => {
    requestRange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <S.MessegeIconContainer>
        <S.IconImg src="..\src\Assets\png\Message.png" alt="메시지 이미지" />
      </S.MessegeIconContainer>
      <S.MainText>
        {range}명의 사람들에게
        <br />
        요청을 보낼 수 있어요!
      </S.MainText>
      <S.LinkTextContainer>
        <S.LinkTextItem id="isOnlyone" onClick={handleBtnClick}>
          랜덤으로 한명에게만 보내기
        </S.LinkTextItem>
        <I.CheckArrowIcon />
      </S.LinkTextContainer>
      <S.ExplainText>*특수 요청으로 보내집니다</S.ExplainText>
      <S.Button onClick={handleBtnClick}>
        보내기
        <I.ArrowButtonIcon />
      </S.Button>
    </S.Container>
  );
};

export default RequestCheck;
