import { IChatData } from "../../../Pages/ChattingPage/ChattingRoom";
import * as S from "./style";

interface Props {
  chat: IChatData;
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
