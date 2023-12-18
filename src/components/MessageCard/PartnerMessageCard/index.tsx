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
  partnerType: string;
  sendDate: string;
}

const PartnerMessageCard: React.FC<Props> = ({
  chat,
  partnerType,
  sendDate,
}) => {
  return (
    <S.LineContainer>
      <S.MessageContainer>
        <S.TypeImg src={`../../src/Assets/png/${partnerType}.png`} />
        <S.Message>{chat.message}</S.Message>
        <S.TimeCard>{sendDate}</S.TimeCard>
      </S.MessageContainer>
    </S.LineContainer>
  );
};

export default PartnerMessageCard;
