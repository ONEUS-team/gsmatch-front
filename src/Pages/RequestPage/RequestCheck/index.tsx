import * as S from "./style";
import * as I from "../../../Assets/svg/index";
import { useNavigate } from "react-router-dom";
import { Gender, Grade, Major, RequestType } from "../../../types/utilType";
import axiosInstance from "../../../libs/api/axiosInstance";
import { refresh } from "../../../components/api/refresh";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Message from "../../../Assets/png/Message.png";

interface Props {
  requestType: RequestType | null;
  requestGender: Gender[];
  requsetMajor: Major[] | null;
  requestGrade: Grade[];
  requestTitle: string;
  requestContent: string;
  requestImg: { imgFile: File; img: string }[];
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
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [range, setRange] = useState<number>(0);
  const navigate = useNavigate();

  const handleBtnClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await request(e.currentTarget?.id == "isOnlyone" ? true : false);
  };

  const request = async (isOnlyone: boolean) => {
    setIsDisabled(true);
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
      body.append("images", img.imgFile);
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
      toast.success("요청이 생성되었습니다.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate(`/request/finish/succeed`);
    } catch (error: any) {
      if (error.response.status == 403) {
        refresh(navigate, () => request(isOnlyone));
      }
    } finally {
      setIsDisabled(false);
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
      if (response.data.range === 0) navigate(`/request/finish/failed`);
      setRange(response.data.range);
    } catch (error) {
      toast.error("요청을 보낼 수 없습니다.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");
    }
  };

  useEffect(() => {
    requestRange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <S.MessegeIconContainer>
          <S.IconImg src={Message} alt="메시지 이미지" />
        </S.MessegeIconContainer>
        <S.MainText>
          {range}명의 사람들에게
          <br />
          요청을 보낼 수 있어요!
        </S.MainText>
        <S.LinkTextContainer>
          <S.LinkTextItem
            disabled={isDisabled}
            id="isOnlyone"
            onClick={handleBtnClick}
          >
            랜덤으로 한명에게만 보내기
          </S.LinkTextItem>
          <I.CheckArrowIcon />
        </S.LinkTextContainer>
        <S.ExplainText>*특수 요청으로 보내집니다</S.ExplainText>
        <S.Button disabled={isDisabled} onClick={handleBtnClick}>
          보내기
          <I.ArrowButtonIcon />
        </S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default RequestCheck;
