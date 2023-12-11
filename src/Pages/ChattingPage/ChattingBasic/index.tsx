import { ChattingCardList } from "../../../components";
import * as S from "./style";

const data = [
  {
    message: "뭐",
    roomId: "1",
    sendDate: "2023-12-09T14:55:18.311214129",
    sender: {
      senderName: "신희성",
      senderId: "1",
      type: "PORORO",
    },
  },
  {
    message: "뭐",
    roomId: "5",
    sendDate: "2023-12-09T14:55:18.311214129",
    sender: {
      senderName: "신희성",
      senderId: "1",
      type: "PORORO",
    },
  },
  {
    message: "뭐",
    roomId: "123",
    sendDate: "2023-12-09T14:55:18.311214129",
    sender: {
      senderName: "신희성",
      senderId: "1",
      type: "PORORO",
    },
  },
];

const ChattingBasic = () => {
  return (
    <S.Container>
      <ChattingCardList chatList={data} />
      <S.NotSelectMessageContainer>
        <S.TextBox>
          <img src="../../../src/Assets/png/NotSelectMessage.png" alt="" />
          <S.KeyWord>채팅</S.KeyWord>
          <S.Text>다양한 질문과 이야기를 나눠보세요</S.Text>
        </S.TextBox>
      </S.NotSelectMessageContainer>
    </S.Container>
  );
};

export default ChattingBasic;
