import { useNavigate } from "react-router-dom";
import { GoBackIcon } from "../../Assets/svg";
import * as S from "./style";
import { ChattingCard } from "..";

interface Props {
  chatList: {
    message: string;
    roomId: string;
    sendDate: string;
    sender: {
      senderName: string;
      senderId: string;
      type: string;
    };
  }[];
}

const ChattingCardList: React.FC<Props> = ({ chatList }) => {
  const navigate = useNavigate();

  const handleIconButtonClick = () => navigate("/");
  return (
    <S.Container>
      <S.AbsoluteBox>
        <S.IconButton onClick={handleIconButtonClick}>
          <GoBackIcon />
        </S.IconButton>
        채팅
      </S.AbsoluteBox>
      {chatList.map((chat) => (
        <ChattingCard key={chat.roomId} chat={chat} />
      ))}
    </S.Container>
  );
};

export default ChattingCardList;
