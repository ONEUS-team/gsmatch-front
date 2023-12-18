import { IChatData } from "../../../Pages/ChattingPage/ChattingRoom";
import * as S from "./style";

interface Props {
  chat: IChatData;
  sendDate: string;
}

const MyMessageCard: React.FC<Props> = ({ chat, sendDate }) => {
  return (
    <S.LineContainer>
      <S.MessageContainer>
        <S.TimeCard>{sendDate}</S.TimeCard>
        <S.Message>{chat.message}</S.Message>
      </S.MessageContainer>
    </S.LineContainer>
  );
};

export default MyMessageCard;
