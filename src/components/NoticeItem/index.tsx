import * as S from "./style";
import * as I from "../../Assets/svg/index";
import { useNavigate } from "react-router-dom";
import DefualtPng from "../../Assets/png/requestCardDefault.png";
import { useState } from "react";

interface Props {
  id: number;
  requestType: string;
  requestOnly: boolean;
  title: string;
  content: string;
  authorName: string;
  image: string;
}

const NoticeItem: React.FC<Props> = ({
  requestType,
  requestOnly,
  title,
  content,
  authorName,
  id,
  image,
}) => {
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState<boolean>(true);

  const redirect = (e: React.MouseEvent<HTMLButtonElement>) => {
    const ID: string = e.currentTarget.id;
    ID !== null && navigate(`/request/detail/${ID}`);
  };

  return (
    <S.ListItem
      id={id.toString()}
      isOnlyOne={requestOnly}
      requestType={requestType}
      onClick={redirect}
    >
      {requestOnly && isShow && (
        <S.OnlyOneContainer>
          <I.OnlyOneIcon />
          <S.XIconBox
            onClick={(e) => {
              setIsShow(false);
              e.stopPropagation();
            }}
          >
            <I.OnlyOneXIcon />
          </S.XIconBox>
        </S.OnlyOneContainer>
      )}
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
          <S.ListAuthor>{authorName}</S.ListAuthor>
          {/* <S.ListTime>2분전</S.ListTime> */}
        </S.ListSub>
      </S.ListHeader>
      <S.ListTitle>{title}</S.ListTitle>
      <S.ListContent>
        {content.length > 40 ? content.slice(0, 40) + "..." : content}
      </S.ListContent>
      <S.ListImg
        src={
          image
            ? `https://port-0-gsmatch-back-f02w2almh8gdgs.sel5.cloudtype.app/api${image}`
            : DefualtPng
        }
      />
    </S.ListItem>
  );
};

export default NoticeItem;
