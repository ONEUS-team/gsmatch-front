import * as S from "./style";

interface Props {
  chat: {
    sender: {
      id: number;
      senderId: string;
      senderName: string;
    };
    message: string;
    sendDate: string;
  };
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
