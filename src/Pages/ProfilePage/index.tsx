import { useEffect, useState, useRef } from "react";
import * as S from "./style";
import { RequestList } from "../../components";
import { ArrowButtonIcon } from "../../Assets/svg";
import { UserInfo } from "../../types/user";
import { Type } from "../../types/type";
import axiosInstance from "../../libs/api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { refresh } from "../../components/api/refresh";

const typeList: Type = {
  PORORO: "뽀로로",
  LUPI: "루피",
  POBI: "포비",
  EDI: "에디",
};

const ProfilePage = () => {
  const [isScrollable, setIsScrollable] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    id: null,
    username: null,
    grade: null,
    level: null,
    gender: null,
    type: null,
    point: null,
    major: null,
    requestList: [],
  });

  const ref = useRef<HTMLDivElement>(null);
  const grade =
    userInfo.grade === "ONE"
      ? 1
      : userInfo.grade === "TWO"
      ? 2
      : userInfo.grade === "THREE"
      ? 3
      : null;
  const gender = userInfo.gender === "MALE" ? "남자" : "여자";
  const type = typeList[userInfo.type! as keyof Type];
  const profileSrc = `src\\Assets\\png\\${userInfo.type}.png`;

  const naviagte = useNavigate();

  const handleWindowResize = () =>
    window.innerHeight < 1012 ? setIsScrollable(true) : setIsScrollable(false);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const sendUserRequest = async () => {
    try {
      const response = await axiosInstance.get("/user", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        withCredentials: true,
      });

      if (response.data.type === null) {
        naviagte("/survey");
      }

      setUserInfo(response.data);
    } catch (error) {
      refresh(naviagte, sendUserRequest);
    }
  };

  useEffect(() => {
    sendUserRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <S.Container ref={ref} isScrollable={isScrollable}>
      <S.ProfileBox>
        <S.ProfileImg src={profileSrc} />
        <S.InfoBox>
          <S.TopInfo>
            Level {userInfo.level} {userInfo.username}
          </S.TopInfo>
          <S.BottomInfo>
            {grade}학년 {gender} {type} 유형
          </S.BottomInfo>
        </S.InfoBox>
      </S.ProfileBox>
      <S.BannerContainer>
        <S.BannerItem>
          <S.BannerImg src="src\Assets\png\Message.png" alt="배너 이미지" />
          <S.TextBox>
            <S.RequestBannerText>
              원하는 사람들과
              <br />
              대화하세요
            </S.RequestBannerText>
            <S.BannerLink to="/request">
              요청 보내기
              <ArrowButtonIcon />
            </S.BannerLink>
          </S.TextBox>
        </S.BannerItem>

        <S.BannerItem>
          <S.BannerImg src="src\Assets\png\Arrow.png" alt="배너 이미지" />
          <S.TextBox>
            <S.TypeBannerText>
              내 유형,
              <br />
              혹시 바뀌진 않았을까
            </S.TypeBannerText>
            <S.BannerLink to="/survey">
              정확한 내 유형 알아보기
              <ArrowButtonIcon />
            </S.BannerLink>
          </S.TextBox>
        </S.BannerItem>
      </S.BannerContainer>
      <RequestList requestList={userInfo.requestList} />
    </S.Container>
  );
};

export default ProfilePage;
