import { useEffect, useState } from "react";
// import { useParams } from "react-router";
import * as S from "./style";
import { Major } from "../../../types/major";
import * as I from "../../../Assets/svg/index";

const mokdata = {
  id: 11,
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

const myData = {
  id: 101,
  username: "john_doe",
  grade: "ONE",
  level: 5,
  gender: "male",
  type: "student",
  point: 100,
  major: "FRONT",
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
  const [isMine, setIsMine] = useState<boolean>(false);
  const [state, setStaete] = useState<"edit" | "view">("view");
  const [editTitle, setEditTitle] = useState<string>(data.title);
  const [editContent, setEditContent] = useState<string>(data.content);

  const handleEditClick = () => setStaete("edit");

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  // const { id } = useParams();

  useEffect(() => {
    setData(mokdata);
    if (myData.id === data.author.id) {
      setIsMine(true);
    }
  }, []);

  if (state === "edit")
    return (
      <S.Container>
        <S.EditForm onSubmit={handleFormSubmit}>
          <S.TitleInput
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <S.contentInput
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
          />
          <S.EditCompleteButton>
            수정
            <I.ArrowButtonIcon />
          </S.EditCompleteButton>
        </S.EditForm>
      </S.Container>
    );

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
        <S.RequestTitle>{data.title}</S.RequestTitle>
        <S.RequestContent>{data.content}</S.RequestContent>
      </S.RequestBox>
      {isMine ? (
        <S.Button>삭제하기</S.Button>
      ) : (
        <S.Button>
          답변하기
          <I.ArrowButtonIcon />
        </S.Button>
      )}
    </S.Container>
  );
};

export default RequestDetail;
