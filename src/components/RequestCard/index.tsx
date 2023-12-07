import React from "react";
import { MyRequest } from "../../types/request";
import * as S from "./style";
import { MacbookIcon, PeopleIcon } from "../../Assets/svg";

interface Props {
  request: MyRequest;
}

const RequestCard: React.FC<Props> = ({ request }) => {
  const type = request.requestType === "TYPE" ? "유형" : "전공";

  return (
    <S.Card to={`/request/detail/${request.requestId}`}>
      <S.RequestBox>
        <S.TopBox>
          <S.Type>
            {type} {type === "유형" ? <PeopleIcon /> : <MacbookIcon />}
          </S.Type>
          <S.Author>
            {request.authorName}
            {
              // 작성시간 로직
            }
          </S.Author>
        </S.TopBox>
        <S.BottomBox>
          <S.TItle>{request.title}</S.TItle>
          <S.Content>{request.content}</S.Content>
        </S.BottomBox>
      </S.RequestBox>
      <S.ImgBox>
        <S.PreviewImg src={""} />
      </S.ImgBox>
    </S.Card>
  );
};

export default RequestCard;
