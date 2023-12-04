import React from "react";
import * as S from "./style";
import { MyRequest } from "../../types/request";
import { RequestCard } from "../index";
import { MailIcon } from "../../Assets/svg";

interface Props {
  requestList: MyRequest[];
}

const RequestList: React.FC<Props> = ({ requestList }) => {
  return (
    <S.Container>
      <S.Header>
        <S.TItle>내가 보낸 요청들</S.TItle>
        <S.SubTitle>요청은 최대 3개까지 보낼 수 있어요!</S.SubTitle>
      </S.Header>

      {requestList.length > 0 ? (
        <S.ListContainer>
          {requestList.map((request) => (
            <RequestCard key={request.requestId} request={request} />
          ))}
        </S.ListContainer>
      ) : (
        <S.EmptyContiner>
          <S.EmptyBox>
            <MailIcon />
            현재 보낸 요청이 없어요
            <br />한 번 보내보는 건 어떨까요?
          </S.EmptyBox>
        </S.EmptyContiner>
      )}
    </S.Container>
  );
};

export default RequestList;
