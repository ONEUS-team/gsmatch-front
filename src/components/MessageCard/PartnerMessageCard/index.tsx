import { IChatData } from "../../../Pages/ChattingPage/ChattingRoom";
import * as S from "./style";

import PORORO from "../../../Assets/png/pororo.png";
import POBI from "../../../Assets/png/pobi.png";
import LUPI from "../../../Assets/png/LUPI.png";
import EDI from "../../../Assets/png/edi.png";

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
  const profileSrc =
    partnerType == "PORORO"
      ? PORORO
      : partnerType == "POBI"
      ? POBI
      : partnerType == "LUPI"
      ? LUPI
      : partnerType == "EDI"
      ? EDI
      : "";

  return (
    <S.LineContainer>
      <S.MessageContainer>
        {partnerType !== null && <S.TypeImg src={profileSrc} />}
        <S.Message>{chat.message}</S.Message>
        <S.TimeCard>{sendDate}</S.TimeCard>
      </S.MessageContainer>
    </S.LineContainer>
  );
};

export default PartnerMessageCard;
