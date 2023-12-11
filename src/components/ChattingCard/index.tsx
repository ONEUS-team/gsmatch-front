import { useEffect, useState } from "react";
import * as S from "./style";
import { FixIcon } from "../../Assets/svg";
import { useNavigate } from "react-router-dom";

interface Props {
  chat: {
    message: string;
    roomId: string;
    sendDate: string;
    sender: {
      senderName: string;
      senderId: string;
      type: string;
    };
  };
}

const ChattingCard: React.FC<Props> = ({ chat }) => {
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);

  const handleCardClick = () => navigate(`/chat/${chat.roomId}`);

  useEffect(() => {
    if (window.localStorage.getItem("fixList")?.includes(chat.roomId)) {
      setIsFixed(true);
    }
  }, []);

  return (
    <S.Card onClick={handleCardClick}>
      <S.InnerCard>
        <S.OpponentImg src="" alt="프로필 이미지" />
        <S.ChatInfoBox>
          <S.TopBox>
            <S.NameTimeBox>
              <S.OpponentName>{chat.sender.senderName}</S.OpponentName>
              <S.LastTime>오후 9:12</S.LastTime>
            </S.NameTimeBox>
            <S.FixBox>{isFixed && <FixIcon />}</S.FixBox>
          </S.TopBox>
          <S.BottomBox>{chat.message}</S.BottomBox>
        </S.ChatInfoBox>
      </S.InnerCard>
    </S.Card>
  );
};

export default ChattingCard;
