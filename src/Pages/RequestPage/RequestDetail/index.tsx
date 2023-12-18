import { useEffect, useState } from "react";
// import { useParams } from "react-router";
import * as S from "./style";
import { Major } from "../../../types/major";
import * as I from "../../../Assets/svg/index";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../libs/api/axiosInstance";
import { CharacterType, Grade, RequestType } from "../../../types/utilType";
import { MyInfo, DetailType } from "../../../types/request";
import { GradeConvert } from "../../../types/convert";
import { refresh } from "../../../components/api/refresh";

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

// const defaultDetail = {
//   id: 0,
//   title: "",
//   content: "",
//   requestType: "" as RequestType,
//   isOnlyOne: false,
//   author: {
//     id: 0,
//     name: "",
//     major: "" as unknown as Major,
//     type: "" as CharacterType,
//     level: 0,
//     grade: "" as Grade,
//   },
// } as unknown as DetailType;

// const defaultMyInfo = {
//   id: 0,
//   username: "",
//   grade: 0,
//   type: "",
// } as unknown as MyInfo;

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

  const typeImg = `../../src/Assets/png/${myInfoData?.type}.png`;

  const handleEditClick = () => {
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

      const dataDetail = await axiosInstance.get("/user", configDetail);
      console.log(dataDetail.data);

      setMyInfoData(dataDetail.data);

      const authorizationMyInfo = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`;

      const configMyInfo = {
        headers: {
          Authorization: authorizationMyInfo,
        },
        withCredentials: true,
      };

      const dataMyInfo = await axiosInstance.get(
        `/request/${requestId}`,
        configMyInfo
      );
      setDetailData(dataMyInfo.data);

      if (dataMyInfo.data?.author.id === dataDetail.data?.id) {
        setIsMine(true);
      } else {
        setIsMine(false);
      }

      setEditTitle(dataMyInfo.data.title);
      setEditContent(dataMyInfo.data.content);
    } catch (error) {}
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
      navigate("/");
    } catch (error) {
      refresh(navigate, handleDeleteClick);
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
      refresh(navigate, handleEditCompletetClick);
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
                <S.ItemImg
                  src={`https://port-0-gsmatch-back-f02w2almh8gdgs.sel5.cloudtype.app/api${imgList[imgIndex]}`}
                  alt="요청 이미지"
                />
                <S.LeftButton
                  onClick={() => {
                    imgIndex > 0 && setImgIndex((prev) => prev - 1);
                  }}
                >
                  <I.ImageLeftButton />
                </S.LeftButton>
                <S.RightButton
                  onClick={() => {
                    imgIndex < imgList.length - 1 &&
                      setImgIndex((prev) => prev + 1);
                  }}
                >
                  <I.ImageRightButton />
                </S.RightButton>
              </S.ImgContainer>
            ) : (
              <I.DefaultImg />
            )}
            <S.MiddleBox>
              <S.UserBox>
                <S.UserImg src={typeImg} alt="유저 프로필" />
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
                  <S.HeartButton onClick={() => setIsHeartClick(!isHeartClick)}>
                    {isHeartClick ? <I.FillHeartIcon /> : <I.HeartIcon />}
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
              <S.Button>
                답변하기
                <I.ArrowButtonIcon />
              </S.Button>
            )}
          </>
        )}
      </S.Container>
    );
  else return <S.Container></S.Container>;
};

export default RequestDetail;
