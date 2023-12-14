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
}

const MyMessageCard: React.FC<Props> = ({ chat }) => {
  return (
    <S.MessageContainer>
      <S.TimeCard>오후 9 : 21</S.TimeCard>
      <S.Message>{chat.message}</S.Message>
    </S.MessageContainer>
  );
};

export default MyMessageCard;
