import { useEffect, useState } from "react";
// import { useParams } from "react-router";
import * as S from "./style";
import { Major } from "../../../types/major";
import * as I from "../../../Assets/svg/index";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../libs/api/axiosInstance";
import { MyInfo, DetailType } from "../../../types/request";
import { GradeConvert } from "../../../types/convert";
import { refresh } from "../../../components/api/refresh";
import { toast } from "react-toastify";

import PORORO from "../../../Assets/png/pororo.png";
import POBI from "../../../Assets/png/pobi.png";
import LUPI from "../../../Assets/png/LUPI.png";
import EDI from "../../../Assets/png/edi.png";

const gradeConvert: GradeConvert = {
  ONE: "1",
  TWO: "2",
  THREE: "3",
};

const majorConvert: Major = {
  FRONT: "프론트엔드",
  BACK: "백엔드",
  DESIGN: "디자이너",
  IOS: "IOS",
  AOS: "안드로이드",
  DEVOPS: "DevOps",
  WORLD_SKILL: "기능반",
  IOT: "IOT",
  AI: "AI",
};

const RequestDetail = () => {
  const [detailData, setDetailData] = useState<DetailType>();
  const [myInfoData, setMyInfoData] = useState<MyInfo>();
  const [isHeartClick, setIsHeartClick] = useState<boolean>(false);
  const [isMine, setIsMine] = useState<boolean>(false);
  const [state, setStaete] = useState<"edit" | "view">("view");
  const [editTitle, setEditTitle] = useState<string>("");
  const [editContent, setEditContent] = useState<string>("");
  const [imgIndex, setImgIndex] = useState<number>(0);
  const [isDisabled, setIsDIsabled] = useState<boolean>(false);
  const imgList = detailData?.imageNames?.map((img) => img);
  const navigate = useNavigate();

  const profileSrc =
    myInfoData?.type == "PORORO"
      ? PORORO
      : myInfoData?.type == "POBI"
      ? POBI
      : myInfoData?.type == "LUPI"
      ? LUPI
      : myInfoData?.type == "EDI"
      ? EDI
      : "";

  const handleEditClick = () => {
    setEditTitle(detailData!.title);
    setEditContent(detailData!.content);
    setStaete("edit");
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const { requestId } = useParams();

  const fetchMyInfoAndDetailData = async () => {
    try {
      const authorizationDetail = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`;

      const configDetail = {
        headers: {
          Authorization: authorizationDetail,
        },
        withCredentials: true,
      };

      const dataMyInfo = await axiosInstance.get("/user", configDetail);

      setMyInfoData(dataMyInfo.data);

      const authorizationMyInfo = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`;

      const configMyInfo = {
        headers: {
          Authorization: authorizationMyInfo,
        },
        withCredentials: true,
      };

      const requestDataDetail = await axiosInstance.get(
        `/request/${requestId}`,
        configMyInfo
      );

      const responseDataDetail = await axiosInstance.get(
        `/response/${requestId}`,
        configMyInfo
      );

      if (requestDataDetail.data?.author.id === dataMyInfo.data?.id) {
        setIsMine(true);
        setDetailData(requestDataDetail.data);
      } else {
        setIsMine(false);
        setDetailData(responseDataDetail.data);
      }
    } catch (error) {
      //
    }
  };

  const handleDeleteClick = async () => {
    setIsDIsabled(true);
    try {
      const authorization = `Bearer ${localStorage.getItem("accessToken")}`;

      const config = {
        headers: {
          Authorization: authorization,
        },
        withCredentials: true,
      };

      await axiosInstance.delete(`/request/${requestId}`, config);
      toast.success("요청이 삭제되었습니다.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/");
    } catch (error) {
      refresh(navigate, null);
    } finally {
      setIsDIsabled(false);
    }
  };

  const handleEditCompletetClick = async () => {
    setIsDIsabled(true);
    try {
      const authorization = `Bearer ${localStorage.getItem("accessToken")}`;

      const config = {
        headers: {
          Authorization: authorization,
        },
        withCredentials: true,
      };

      const body = {
        title: editTitle,
        content: editContent,
      };

      await axiosInstance.put(`/request/${requestId}`, body, config);
      setStaete("view");
      init();
    } catch (error) {
      refresh(navigate, null);
    } finally {
      setIsDIsabled(false);
    }
  };

  const handleLikeClick = async (responseId: number) => {
    if (responseId == null) return;

    setIsDIsabled(true);
    try {
      const authorization = `Bearer ${localStorage.getItem("accessToken")}`;

      const config = {
        headers: {
          Authorization: authorization,
        },
        withCredentials: true,
      };

      await axiosInstance.post(`/response/likes`, { responseId }, config);
    } catch (error) {
      refresh(navigate, null);
    } finally {
      setIsDIsabled(false);
    }
  };

  const init = async () => {
    await fetchMyInfoAndDetailData();
  };

  useEffect(() => {
    init();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChat = async (requestId: number) => {
    try {
      const authorization = `Bearer ${localStorage.getItem("accessToken")}`;

      const config = {
        headers: {
          Authorization: authorization,
        },
        withCredentials: true,
      };

      const response = await axiosInstance.post(`/room`, { requestId }, config);
      toast.success("채팅방에 생성되었습니다.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/chat/" + response.data.roomId);
    } catch (error) {
      toast.warning("이미 채팅방에 생성되었습니다.", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      navigate("/chat");
      refresh(navigate, null);
    } finally {
      setIsDIsabled(false);
    }
  };

  if (state === "edit")
    return (
      <S.Container>
        <S.EditForm onSubmit={handleFormSubmit}>
          <S.TitleInput
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <S.ContentInput
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <S.EditCompleteButton
            disabled={isDisabled}
            onClick={handleEditCompletetClick}
          >
            수정
            <I.ArrowButtonIcon />
          </S.EditCompleteButton>
        </S.EditForm>
      </S.Container>
    );

  if (detailData !== null && state === "view")
    return (
      <S.Container>
        {detailData != null && (
          <>
            {detailData?.imageNames?.length > 0 ? (
              <S.ImgContainer>
                {imgList != undefined ? (
                  <S.ItemImg
                    src={`${import.meta.env.VITE_BASE_URL}/api${
                      imgList[imgIndex]
                    }`}
                    alt="요청 이미지"
                  />
                ) : null}
                <S.LeftButton
                  onClick={() => {
                    imgIndex > 0 && setImgIndex((prev) => prev - 1);
                  }}
                >
                  <I.ImageLeftButton />
                </S.LeftButton>

                {imgList != undefined ? (
                  <S.RightButton
                    onClick={() => {
                      imgIndex < imgList.length - 1 &&
                        setImgIndex((prev) => prev + 1);
                    }}
                  >
                    <I.ImageRightButton />
                  </S.RightButton>
                ) : null}
              </S.ImgContainer>
            ) : (
              <I.DefaultImg />
            )}
            <S.MiddleBox>
              <S.UserBox>
                <S.UserImg src={profileSrc} alt="유저 프로필" />
                <S.UserInfoBox>
                  <S.UserName>{detailData!.author.name}</S.UserName>
                  <S.UserGradeMajor>
                    {gradeConvert[detailData!.author.grade]}학년{" "}
                    {majorConvert[detailData!.author.major]}
                  </S.UserGradeMajor>
                </S.UserInfoBox>
              </S.UserBox>
              <S.IconBox>
                {isMine ? (
                  <S.EditButton onClick={handleEditClick}>
                    <I.PencilIcon />
                  </S.EditButton>
                ) : (
                  <S.HeartButton
                    disabled={isDisabled}
                    onClick={() => {
                      handleLikeClick(detailData.responseId);
                      setIsHeartClick(!isHeartClick);
                    }}
                  >
                    {isHeartClick || detailData.likes ? (
                      <I.FillHeartIcon />
                    ) : (
                      <I.HeartIcon />
                    )}
                  </S.HeartButton>
                )}
              </S.IconBox>
            </S.MiddleBox>
            <S.RequestBox>
              <S.RequestTitle>{detailData!.title}</S.RequestTitle>
              <S.RequestContent>{detailData!.content}</S.RequestContent>
            </S.RequestBox>
            {isMine ? (
              <S.Button disabled={isDisabled} onClick={handleDeleteClick}>
                삭제하기
              </S.Button>
            ) : (
              <S.Button
                disabled={isDisabled}
                onClick={() => {
                  handleChat(detailData.responseId);
                }}
              >
                답변하기
                <I.ArrowButtonIcon />
              </S.Button>
            )}
          </>
        )}
      </S.Container>
    );
  else {
    return <S.Container></S.Container>;
  }
};

export default RequestDetail;
