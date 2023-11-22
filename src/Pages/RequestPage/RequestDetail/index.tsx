import React, { useState } from "react";
import { useParams } from "react-router";
import * as S from "./style";
import { Major } from "../../../types/major";
import * as I from "../../../Assets/svg/index";

const mokdata = {
  id: 1,
  title: "Sample Title 1",
  content: "This is the content of sample post 1.",
  requestType: "type",
  isOnlyOne: false,
  author: {
    id: 101,
    name: "John Doe",
    major: "FRONT",
    type: "루피",
    level: 1,
    grade: 3,
  },
};

const majorList: Major = {
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
  const [data, setData] = useState(mokdata);
  const [isHeartClick, setIsHeartClick] = useState<boolean>(false);
  const { id } = useParams();
  return (
    <S.Container>
      {/* <S.ItemImg src="" alt="기본 이미지" /> */}
      <I.DefaultImg />
      <S.MiddleBox>
        <S.UserBox>
          <S.UserImg
            src="https://i.namu.wiki/i/oaOZE-a9jn7PYSFduvq3BYriDAAwGWJ8AJhau5GiqVf_FSD6NbYzsg7Nsoawz3bHCt0hx8YPoQw_o51LcH73Sg.webp"
            alt="유저 프로필"
          />
          <S.UserInfoBox>
            <S.UserName>{data.author.name}</S.UserName>
            <S.UserGradeMajor>
              {data.author.grade}학년 {majorList[data.author.major]}
            </S.UserGradeMajor>
          </S.UserInfoBox>
        </S.UserBox>
        <S.HeartBox>
          <S.HeartButton onClick={() => setIsHeartClick(!isHeartClick)}>
            {isHeartClick ? <I.FillHeartIcon /> : <I.HeartIcon />}
          </S.HeartButton>
        </S.HeartBox>
      </S.MiddleBox>
      <S.RequestBox>
        <S.RequestTitle>{data.title}</S.RequestTitle>
        <S.RequestContent>{data.content}</S.RequestContent>
      </S.RequestBox>
      <S.Button>
        답변하기
        <I.ArrowButtonIcon />
      </S.Button>
    </S.Container>
  );
};

export default RequestDetail;
