import { ChattingCardList } from "../../../components";
import * as S from "./style";

const data = [
  {
    id: 1,
    roomName: "아니 왜 손흥민...",
    partner: {
      id: 1110,
      name: "황희찬",
      major: "FRONT",
      grade: "ONE",
      type: "PORORO",
    },
  },
  {
    id: 2,
    roomName: "아니 왜 손흥민...",
    partner: {
      id: 1210,
      name: "황희찬",
      major: "FRONT",
      grade: "TWO",
      type: "EDI",
    },
  },
  {
    id: 3,
    roomName: "아니 왜 손흥민123456789",
    partner: {
      id: 1130,
      name: "황희찬",
      major: "FRONT",
      grade: "ONE",
      type: "POBI",
    },
  },
];

const ChattingBasic = () => {
  return (
    <S.Container>
      <ChattingCardList cardList={data} />
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
