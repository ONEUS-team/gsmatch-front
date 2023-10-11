import * as S from "./style";
import * as I from "../../Assets/svg/index";

interface Props {
  requestType: string;
  isOnlyOne: boolean;
  title: string;
  content: string;
  author: {
    name: string;
  };
}

const NoticeItem: React.FC<Props> = ({
  requestType,
  isOnlyOne,
  title,
  content,
  author,
}) => {
  return (
    <S.ListItem requestType={requestType} isOnlyOne={isOnlyOne}>
      <S.ListHeader>
        <S.ListType>
          {requestType === "type" ? (
            <>
              유형
              <I.PeopleIcon />
            </>
          ) : (
            <>
              전공
              <I.MacbookIcon />
            </>
          )}
        </S.ListType>
        <S.ListSub>
          <S.ListAuthor>{author.name}</S.ListAuthor>
          <S.ListTime>2분전</S.ListTime>
        </S.ListSub>
      </S.ListHeader>
      <S.ListTitle>{title}</S.ListTitle>
      <S.ListContent>{content}</S.ListContent>
      <S.ListImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" />
    </S.ListItem>
  );
};

export default NoticeItem;
