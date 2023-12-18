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
}

const PartnerMessageCard: React.FC<Props> = ({ chat, partnerType }) => {
  return (
    <S.LineContainer>
      <S.MessageContainer>
        <S.TypeImg src={`../../src/Assets/png/${partnerType}.png`} />
        <S.Message>{chat.message}</S.Message>
        <S.TimeCard>오후 9 : 21</S.TimeCard>
      </S.MessageContainer>
    </S.LineContainer>
  );
};

export default PartnerMessageCard;
